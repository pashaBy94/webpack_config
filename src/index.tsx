import { createRoot } from 'react-dom/client';
import { App } from './components/App';
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import LazyAbout from '@/pages/About/LazyAbout';
import LazyShop from '@/pages/Shop/LazyShop';
import { Suspense } from 'react';


  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <div>Error page</div>,
      children: [
        {
            path: "/about",
            element:<Suspense fallback={<div>Loading...</div>}>             
                       <LazyAbout />
                    </Suspense> 
        },
        {
            path: "/shop",
            element:<Suspense fallback={<div>Loading...</div>}>             
                       <LazyShop />
                    </Suspense> 
        }
      ]
    },
  ]);

const root = document.getElementById('root');
if(!root){
    throw new Error('Root not found')
}
const container = createRoot(root);
container.render(<RouterProvider router={router} />)
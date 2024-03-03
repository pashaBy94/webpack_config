import { useState } from "react"
import style from './App.module.scss'
import { Outlet } from "react-router-dom";
import CustomImag from "./../assets/imag.png";
import toExplore from "./../assets/to-explore.jpg";
import CloseImg from "./../assets/closeImag.svg";
// import React from "react"
export const App = ()=>{
    function test(a:number){
        return a ** 2
    }
    const [count, setCount] = useState<number>(0);
    function inctrement(){setCount(count+1)};
    // if(__PLATFORM__ == 'mobile'){
    //     return <h2>Hello mobilePhone</h2>
    // }
    // if(__PLATFORM__ == 'desktop'){
    //     return <h2>Hello desktopPhone</h2>
    // }

    // test('2')
    return (<div> 
        <p>

        Hello Wor d wldeo s a  Wcw qdorldHello    WorldHello WorldHello Worldello World Hello World Hello World  Hello World   Hello World   Hello World   Hello World    Hello World
        </p>
        <h1 data-testid={'Hellolo'}>{__PLATFORM__}</h1>Hello WorldHello WorldHello WorldHello World
        <button className={style.button} onClick={inctrement}>Click</button>
        <p>{count}</p> 
        <img src={CustomImag} /> 
        <img src={toExplore} /> 
        <CloseImg color={'red'} width={40} height={40}/>
        <Outlet />

    </div>)

}

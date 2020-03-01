//useContext 父子传值

import React, { useState , createContext ,useContext } from 'react';

const CountContext = createContext() //创建一个createContext

function UseContext(){
    const [ count , setCount ] = useState(0);
    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={()=>{setCount(count+1)}}>click me</button>
            {/* 用CountContext包裹组件名传递*/}
            <CountContext.Provider value={count}>
                <Counter/>
            </CountContext.Provider>
        </div>
    )
}
export default UseContext;

//再写一个组件
function Counter(){
    const count = useContext(CountContext)  //得到传来的conut
    return (<h2>{count}</h2>)
}
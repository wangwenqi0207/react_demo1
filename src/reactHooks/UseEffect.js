//useEffect代替生命周期函数 componentDidMount页面加载和componentDidUpdate页面更新

import React, { useState,useEffect } from 'react';

function UseEffect(){
    const [ count , setCount ] = useState(0);

    useEffect(()=>{
        console.log({count})
    })

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={()=>{setCount(count+1)}}>click me</button>
        </div>
        )
}

export default UseEffect;
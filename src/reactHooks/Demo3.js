//性能优化  父子组件  父组件渲染变化时所有子组件会重新渲染一遍（哪怕子组件没有渲染） 损耗性能 
import React , {useState,useMemo} from 'react';

// 父组件 调用onClick事件时 子组件会一直不断渲染
function Demo3(){
    const [Tony , setTony] = useState('Tony待客状态')
    const [Ben , setBen] = useState('Ben待客状态')
    return (
        <>
            <button onClick={()=>{setTony(new Date().getTime())}}>Tony</button>
            <button onClick={()=>{setBen(new Date().getTime()+',Ben向我们走来了')}}>Ben</button>
            <ChildComponent name={Tony}>{Ben}</ChildComponent>
        </>
    )
}

// 子组件 用useMemo在其他组件渲染的时候 无关子组件不会一直渲染
function ChildComponent({name,children}){
    function changeXiaohong(name){
        console.log('Tony向我们走来了')
        return name+',Tony向我们走来了'
    }

    const actionXiaohong = useMemo(()=>changeXiaohong(name),[name]) 
    return (
        <>
            <div>{actionXiaohong}</div>
            <div>{children}</div>
        </>
    )
}


export default Demo3
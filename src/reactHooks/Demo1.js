//旧的写法
// import React, { Component } from 'react';

// class Demo1 extends Component {
//     constructor(props) {
//         super(props);
//         this.state = { count:0 }
//     }
//     render() { 
//         return (
//             <div>
//                 <p>当前数字是 {this.state.count} </p>
//                 <button onClick={this.addCount.bind(this)}>Chlick me</button>
//             </div>
//         );
//     }
//     addCount(){
//         this.setState({count:this.state.count+1})
//     }
// }
 
// export default Demo1;

//react-hooks写法 
//直接用函数形式完成 ()=>{setCount(count+1)}
//useState是react自带的一个hook函数，它的作用是用来声明状态变量
//useState的用法，分别是声明、读取、使用（修改）
//useState这个函数接收的参数是状态的初始值,
//它返回一个数组，这个数组的第0位是当前的状态值，第1位是可以改变状态值的方法函数
//React Hooks不能出现在条件判断语句中，因为它必须有完全一样的渲染顺序。
//例如 不能出现以下：这样的代码
// if(showSex){
//     const [ sex , setSex ] = useState('男')
//     showSex=false
// }

import React, {useState} from 'react'
function Demo1(){
    const [ count ,setCount ] = useState(0);
    return (
        <div>
            <p>当前数字是 {count} </p>
            <button onClick={()=>{setCount(count+1)}}>点击我</button>
        </div>
    )
}
export default Demo1;

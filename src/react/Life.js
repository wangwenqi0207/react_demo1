
//react生命周期
import React, { Component } from 'react';
import axios from 'axios'

class Life extends Component {
    state = {  }
    render() { 
        console.log("组件挂载中")
        return (
            <div>react生命周期</div>
         );
    }

    //生命周期函数
    componentWillMount(){
        console.log("将要挂载")
    }
    componentDidMount(){
        //已经挂载  发起数据请求
        axios.post('https://web-api.juejin.im/v3/web/wbbr/bgeda')
            .then((res)=>
            {
                console.log(res)
            })
            .catch((error)=>{
                console.log('axios 获取数据失败'+error
                )})
    }
    shouldComponentUpdate(){
        console.log("组件发生改变前执行")
        return true;  //要求返回一个布尔值  false不往下执行
    }
    componentWillUpdate(){
        console.log("组件更新前执行")
    }
    componentDidUpdate(){
        console.log("组件更新后执行")
    }
}
 

export default Life;

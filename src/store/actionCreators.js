//封装组件的action
import {ADD_ITEM , DELETE_ITEM ,GET_LIST} from './actionTypes' //定义type类型的js
import axios from 'axios'

//组件addItem里的action  type已经封好 所以把value作为参数用箭头函数(value)=>传进来即可 

//增加数据
export const addItem = (value)=>({
    type:ADD_ITEM,
    value
})

//删除数据
export const deleteItem = (index)=>({
    type:DELETE_ITEM,
    index
})

//获取数据
export const getListAction = (data)=>({
    type:GET_LIST,
    data
})

export const getTodoList = () =>{
    return (dispatch)=>{
        axios.get('https://www.easy-mock.com/mock/5d63d7ca5774121e1a634378/demo1/demo1') 
        .then((res)=>
        {
           const data = res.data.data;
           const action  = getListAction(data)
           dispatch(action)   //将action这个值传给仓库
        })
        .catch((error)=>{
            console.log(error)
        })
    }
}
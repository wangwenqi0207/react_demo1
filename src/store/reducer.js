import {ADD_ITEM , DELETE_ITEM , GET_LIST} from './actionTypes' //定义type类型的js

const defaultState = {
    value:'sss',
    list:[]
}

// state: 指的是原始仓库里的状态。
// action: 指的是action新传递的状态。
export default (state = defaultState,action)=>{
    // console.log(state)
    //Reducer里只能接收state 不能改变state
    // if(action.type ==="changeInput"){
    //     let newState = JSON.parse(JSON.stringify(state)) //深拷贝state的值 转成字符串  赋值给一个变量
    //     newState.value = action.vlaue  //改变placeholder的值等于用户输入的值
    //     return newState  //将新state return出去
    // }
    //增加
    if(action.type === ADD_ITEM ){ //根据type值，编写业务逻辑
        let newState = JSON.parse(JSON.stringify(state)) 
        newState.list.push(action.value)  //用户输入的新内容push新的内容到列表中去
        console.log(action)
        newState.value = ''  //增加后清空
        return newState
    }
    //删除
    if(action.type === DELETE_ITEM ){ 
        let newState = JSON.parse(JSON.stringify(state)) 
        newState.list.splice(action.index,1)  //删除数组中对应的值
        return newState
    }
     //后端获取数据 传递给中央仓库做处理
     if(action.type === GET_LIST ){ 
        let newState = JSON.parse(JSON.stringify(state)) 
        newState.list =action.data
        return newState
    }
    return state
}
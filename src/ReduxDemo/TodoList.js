import React, { Component } from 'react';
import TodoListUi from './TodoListUi'  //组件UI部分
import store from '../store/index' //组件中获得store中的数据
//import {ADD_ITEM , DELETE_ITEM} from '../store/actionTypes' //定义type类型的js  为了更方便检查错误 写错会报错
import { addItem,deleteItem,getTodoList } from '../store/actionCreators'  //封装的action


//用reducer写todolist  调用中央仓库

class TodoList extends Component {
    constructor(props){
        super(props)
        // console.log(store.getState()) //getState方法取出仓库的值
        this.state = store.getState() //将组件state数据赋值给仓库数据
        this.changeInputVlaue = this.changeInputVlaue.bind(this)  //给方法做this绑定
        this.storeChange = this.storeChange.bind(this)
        this.clickBtn = this.clickBtn.bind(this)
        this.deleteItem = this.deleteItem.bind(this)
        store.subscribe(this.storeChange)  //订阅模式  改变数据时同步让仓库中的数据改变
    }
    render() { 
        return ( 
            <TodoListUi
                value={this.state.value}
                changeInputVlaue={this.changeInputVlaue}
                clickBtn={this.clickBtn}
                list={this.state.list}
                deleteItem = {this.deleteItem}
            ></TodoListUi>
         );
    }

    componentDidMount(){
        // axios.get('https://www.easy-mock.com/mock/5d63d7ca5774121e1a634378/demo1/demo1') 
        //     .then((res)=>
        //     {
        //        const data = res.data.data;
        //        const action =getListAction(data) //将取到的数据封入action
        //        store.dispatch(action) //传递给reducer
        //     })
        //     .catch((error)=>{
        //         console.log(error)
        //     })
        const action = getTodoList() //使用中间件获取数据
        store.dispatch(action) //传给仓库
    }
    //用户输入的值传给仓库  要通过dispatch()方法传递给store
    //Action就是一个对象，这个对象一般有两个属性，第一个是对Action的描述，第二个是要改变的值。
    //之前注销的方法，在reducer里深拷贝完state里面的数据，无法同步将用户输入赋值给state
    changeInputVlaue(e){
        this.setState({
            value:e.target.value  //将用户输入的value绑定给仓库中的value，监听用户输入
        })
        // const action = {
        //     type:'changeInput',  // 名字
        //     value:e.target.value  //值
        // }
        // store.dispatch(action)
    }

    //state和组件的值同步互相改变
    storeChange(){
        this.setState(store.getState())  
    }

    //增加 因为list数据存在中央仓库里 所以要做的是 将组件数据传给仓库 改变仓库数据后 再返回给组件展示
    clickBtn(){
        // console.log(this.state.value)
        // const action = { 
        //     type:ADD_ITEM,
        //     value:this.state.value  //获取到用户value，用于push
        // }
        const action = addItem(this.state.value);
        store.dispatch(action)
    }
    //删除
    deleteItem(index){
        // console.log(index)
        // const action = {
        //     type:DELETE_ITEM,
        //     index   //index传过去用于删除
        // }
        const action =deleteItem(index)
        store.dispatch(action)
    }
}
export default TodoList;

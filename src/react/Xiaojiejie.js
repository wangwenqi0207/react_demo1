// todolist  增删  使用axios 使用easymock
import axios from 'axios'
import React,{Component,Fragment } from 'react'
import XiaojijieItem from './XiaojiejieItem'  //子组件
//Fragment组件的作用 代替最外层的div 在不需要div时代替div

class Xiaojiejie extends Component{
 //初始化数据
constructor(props){
    super(props) //调用父类的构造函数，固定写法
    this.state={
        inputValue:'' , // input中的值
        list:[]    //服务列表
    }   
}
    render(){
        return  (
            <Fragment>
               <div>
                {/* label绑定 htmlFor="sss" input id='sss' 将label和input关联起来*/}
               <label htmlFor="sss">加入服务：</label>
                  <input id='sss' value={this.state.inputValue} onChange={this.inputChange.bind(this)}/>
                    <button  onClick={this.addlist.bind(this)}> 增加服务 </button>
                </div>
               <ul>
                   {/* js语法写在大括号里即可  循环*/}
                    {
                    this.state.list.map((item,index)=>{
                        return  (
                           <div>
                               {/* 父组件给子组件传值和方法 */}
                              <XiaojijieItem 
                              key={index+item} 
                              index={index}  
                              content={item}
                              deleteItem={this.deleteItem.bind(this)}
                              />  
                           </div>
                        )
                    })
                    }
               </ul> 
            </Fragment>
        )
    }
    componentDidMount(){
        //已经挂载 获取list数据 将组建中的list赋给请求来的数据
        axios.get('https://www.easy-mock.com/mock/5d63d7ca5774121e1a634378/demo1/demo1')
            .then((res)=>
            {
                console.log(res.data.data)
                this.setState({
                    list:res.data.data
                })
            })
            .catch((error)=>{
                console.log(error)
            })
    }
    inputChange(e){
        console.log(e.target.value);
        //用bind获取事件中的this 
        this.setState({
            inputValue:e.target.value  //双向数据绑定
        })
    }
    //添加一项
    addlist(){
        this.setState({
            list:[...this.state.list,this.state.inputValue],  //es6 语法 增加list菜单项  先列出数组中每一项 然后加入新的项
            inputValue:""  //之后将表单清空
        })
    }
    //删除每项
    deleteItem(index){
        let list = this.state.list
        list.splice(index,1)
        this.setState({
            list:list
        })
        //React是禁止直接操作state的
        //所以 this.state.list.splice(index,1) 不要这样操作
        //先给list赋给一个变量，操作变量后，再将变量赋给state中的list
    }
}

export default Xiaojiejie 

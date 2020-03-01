import React, { Component } from 'react';  //imrc
import PropTypes from 'prop-types' //数据类型校验


class XiaojiejieItem extends Component {   //cc
    constructor(props){
        super(props)
        this.handleClick= this.handleClick.bind(this)  //函数绑定this    
    }
    shouldComponentUpdate(nextProps,nextState){  //组件改变前执行  nextProps之前的参数 nextState改变之后的
        if(nextProps.content!==this.props.content){  //如果数据变化了（增删）就渲染  如果没变化就不渲染
            return true;  
        }else{
            return false;
        }
    }
    render() {
        console.log("子组件渲染") 
        return ( 
            <div>
                {/* 接收父组件的传值 */}
                <li onClick={this.handleClick} >{this.props.content}</li>
            </div>
        );
    }
    handleClick(){
        // 接收父组件的方法deleteItem 和参数index
        this.props.deleteItem(this.props.index)
    }
}
 
    //数据类型校验
    XiaojiejieItem.propTypes={
        content:PropTypes.string,
        deleteItem:PropTypes.func,
        index:PropTypes.number
    }

export default XiaojiejieItem;
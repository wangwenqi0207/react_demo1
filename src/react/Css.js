//css动画效果
import React, { Component } from 'react';
import '../style.css' //引入css
import { CSSTransition } from 'react-transition-group' //插件

class Css extends Component {
    constructor(props){
        super(props)
        this.state={
            isShow:true,
        }
        this.toToggole = this.toToggole.bind(this); //绑定this
    }

    render() {
        return (
            <div>
                <CSSTransition 
                in={this.state.isShow}   //用于判断是否出现的状态
                timeout={2000}           //动画持续时间
                classNames="boss-text"   //className值，防止重复
            >
                <div>BOSS级人物-孙悟空</div>
            </CSSTransition>
            <div><button onClick={this.toToggole}>召唤Boss</button></div>
            </div>
        );
    }

    toToggole(){
        this.setState({
            isShow:this.state.isShow ? false : true
        })
    }
}

export default Css;
import React, { Component } from 'react';
import { Link,Redirect  } from "react-router-dom";


//重定向 打开index就定向到Home组件
class Index extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            list:[
                {cid:123,title:'小羽的个人博客-1'},
                {cid:456,title:'小羽的个人博客-2'},
                {cid:789,title:'小羽的个人博客-3'},
            ]
         }
         this.props.history.push("/home/");   //编程式重定向
    }
    render() { 
        return (
            <ul>
                 <Redirect to="/home/" />
                {
                    this.state.list.map((item,index)=>{
                        return(
                            <li key={index}>
                                {/* 路由传值 */}
                                 <Link to={'/list/'+item.cid}> {item.title}</Link>  
                            </li>
                        )
                    })
                }
            </ul> 
        );
    }
}
 
export default Index;
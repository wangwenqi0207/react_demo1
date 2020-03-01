//此文件用于视图和逻辑的分离
import React from 'react';
import 'antd/dist/antd.css'    //引入Ant Design UI库
import { Input ,Button,List} from 'antd'   //引入input组件
 
//无状态组件  提高性能 将组件改造成函数
const TodoListUi = (props)=>{
    return ( 
        <div style={{margin:"100px"}}>
            <div>
                <Input
                style={{ width:"250px",marginRight:"20px"}}
                onChange={props.changeInputVlaue}
                value={props.value}
                />
                <Button type='primary' onClick={props.clickBtn}>增加</Button>
            </div>
            <div style={{margin:"10px",width:"300px"}}>
            <List
                    bordered  //加边框
                    dataSource={props.list}  //渲染什么数据
                    renderItem={(item,index)=>(<List.Item onClick={()=>{props.deleteItem(index)}}>{item}</List.Item>)}  //每项
                /> 
            </div>
        </div>
     );
}

//改造前组件  上边需要从react引入Component
// class TodoListUi extends Component {
//     state = {  }
//     render() { 
//         return ( 
//             <div style={{margin:"100px"}}>
//                 <div>
//                     <Input
//                     style={{ width:"250px",marginRight:"20px"}}
//                     onChange={this.props.changeInputVlaue}
//                     value={this.props.value}
//                     />
//                     <Button type='primary' onClick={this.props.clickBtn}>增加</Button>
//                 </div>
//                 <div style={{margin:"10px",width:"300px"}}>
//                 <List
//                         bordered  //加边框
//                         dataSource={this.props.list}  //渲染什么数据
//                         renderItem={(item,index)=>(<List.Item onClick={()=>{this.props.deleteItem(index)}}>{item}</List.Item>)}  //每项
//                     /> 
//                 </div>
//             </div>
//          );
//     }
// }
 
export default TodoListUi;
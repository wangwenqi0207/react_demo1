import React, { Component } from 'react';

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (  <h2>我是列表页 {this.state.id}</h2> );
    }

    componentDidMount(){
        console.log(this.props.match)  //接收router传值
        let tempId=this.props.match.params.id
        this.setState({id:tempId })
    }
}
 
export default List;
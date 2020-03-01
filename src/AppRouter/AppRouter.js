import React from 'react'
//BrowserRouter as Router 给BrowserRouter起名Router 方便使用
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Index from './Index'
import List from './List'
import Home from './Home'


function AppRouter(){
    return <Router>
        {/* Link相当于a标签 */}
        <ul>
            <li><Link to='/'>首页</Link></li>
            <li><Link to='/list/sss'>列表</Link></li>
        </ul>
        {/* exact严格匹配 */}
        {/* 匹配到哪个组件 */}
        <Route path='/' exact component={Index} />
        <Route path='/list/:id'  component={List} />
        <Route path='/home'  component={Home} />
    </Router>
}

export default AppRouter;
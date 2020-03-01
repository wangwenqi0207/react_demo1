//软技能 二级路由

import React from 'react'
import Money from './workplace/Money'
import Getup from './workplace/Getup'
import { Route, Link} from 'react-router-dom'
import './Video.css'

function Workplace(){
    return(
        <div>
            <div className='topNav'>
                <ul>
                    <li><Link to='/workplace/Money/'>程序员加薪秘籍</Link></li>
                    <li><Link to='/workplace/Getup/'>程序员早起攻略</Link></li>
                </ul>
            </div>
            <div className='videoContent'>
                <div>
                    <h3>职场软技能</h3>
                    <Route path='/workplace/Money/' component={Money} />
                    <Route path='/workplace/Getup/' component={Getup} />
                </div>
            </div>
        </div>    
    )
}

export default Workplace
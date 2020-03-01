//颜色共享 组件
import React, { useReducer } from 'react';
import ShowArea from './ShowArea';
import Buttons from './Buttons';
import {Color} from './Color';


function Demo2(){
    return (
        <div>
            <Color>
                <ShowArea />
                <Buttons />
            </Color>
        </div>
    )
}

export default Demo2
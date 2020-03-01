##  demo1 react 学习
manifest.json文件 移动端配置

组件首字母名称大写  否则会当成普通html标签渲染

onChange={this.inputChange.bind(this)}  react事件中 如果要用到全局中的数据 要将this绑定出来  

修改数据：this.setState({
            inputValue:e.target.value  
        })

e.target.value  获取用户输入

花括号可以内嵌任何js表达式

要注意的是标签的class名，在这里叫做className

给label和input绑定在一起 点击label聚焦input框 之前html是给label绑定for属性
react中只能写htmlFor

打开VSCode的插件菜单，然后在输入框中输入Simple React Snippets 安装
直接在vscode中输入imrc，就会快速生成最常用的import代码。
快速生成class 快捷键cc

react是单向数据流  父组件传递给子组件的值  只能使用  不能修改

函数式编程的好处是什么？
函数式编程让我们的代码更清晰，每个功能都是一个函数。
函数式编程为我们的代码测试代理了极大的方便，更容易实现前端自动化测试。
React框架也是函数式编程，所以说优势在大型多人开发的项目中会更加明显，让配合和交流都得心应手。

npm install -save axios

EasyMock网站:https://www.easy-mock.com/

react动画库
npm install react-transition-group --save

Redux是一个用来管理管理数据状态和UI状态的JavaScript应用工具。随着JavaScript单页应用（SPA）开发日趋复杂，JavaScript需要管理比任何时候都要多的state（状态），Redux就是降低管理难度的。（Redux支持React，Angular、jQuery甚至纯JavaScript）

Redux Dev Tools插件 Redux调试工具 谷歌商店下载

redux三个坑：
store仓库必须是唯一的，多个store是坚决不允许，只能有一个store空间
只有store能改变自己的内容，Reducer不能改变
Reducer必须是纯函数

Redux-thunk这个Redux最常用的插件：
在Dispatch一个Action之后，到达reducer之前，进行一些额外的操作，就需要用到middleware（中间件）
在实际工作中你可以使用中间件来进行日志记录、创建崩溃报告，调用异步接口或者路由
npm install --save redux-thunk


react-router
npm install --save react-router-dom

router传值 传递值 接收值
设置规则 传递值 接受值 显示内容 

路由重定向
1 标签式重定向
就是利用<Redirect>标签来进行重定向，业务逻辑不复杂时建议使用这种。
2 编程式重定向
这种是利用编程的方式，一般用于业务逻辑当中，比如登录成功挑战到会员中心页面。


React Hooks
它改变了原始的React类的开发方式，改用了函数形式;
React Hooks就是用函数的形式代替原来的继承类的形式，并且使用预函数的形式管理state;
原来把组件分为有状态组件和无状态组件，有状态组件用类的形式声明，无状态组件用函数的形式声明。那现在所有的组件都可以用函数来声明了。


useContext：可访问全局状态，避免一层层的传递状态。这符合Redux其中的一项规则，就是状态全局化，并能统一管理。

useReducer：通过action的传递，更新复杂逻辑的状态，主要是可以实现类似Redux中的Reducer部分，实现业务逻辑的可行性。
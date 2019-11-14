## 启动
安装包: `npm i`

运行: `npm run dev`

> 注意：在运行前请先将8000端口空闲或者在`webpack.config.js`中修改`devServer.port`

## mock
1. mock中间件: `config/mock.js`
2. mock数据: mock文件夹下的任意json

## 拖动排序
1. 依赖：[react-sortable-hoc](https://github.com/clauderic/react-sortable-hoc 'react-sortable-hoc')
2. 封装组件：src/Component/SortableContainer.js  src/Component/SortableItem.js

## 拖动右下角改变元素大小和字体大小
1. 封装组件：src/Component/SortableItem.js

## 懒加载Dom
1. 高阶组件：src/Component/Lazy.js

## 布局
1. 菜单+请求: src/Layout/Slider.js
2. 头部: src/Layout/Header.js
3. 内容: src/Layout/Content.js

## 接口请求
1. 依赖：axios
2. request封装：src/util/request.js
3. request请求写在：src/server/

## 路由按需加载
1. 封装组件：src/Route/Route.js

## 依赖
1. [react](https://zh-hans.reactjs.org/ 'react')
2. [antd](https://ant.design/index-cn 'antd')
3. [react-router-dom](https://github.com/ReactTraining/react-router 'react-router-dom')
4. [react-sortable-hoc](https://github.com/clauderic/react-sortable-hoc 'react-sortable-hoc')
5. [axios](https://github.com/axios/axios 'axios')
6. [bizcharts](https://github.com/alibaba/BizCharts 'bizcharts')
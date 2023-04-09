# create my components library
### 使用create-react-app创建项目

### 使用craco暴露webpack配置项

### 在craco中配置使用less
* 安装craco-less
* 暴露的craco.config.js中添加配置CracoLessPlugin = require("croco-less")

### 创建我的第一个Button Demo组件
* 组件目录中包括
  * index.css：css样式文件
  * index.jsx：组件文件
  * index.test.jsx：测试文件

### 使用storybook创建组件库
* storybook的官网：`https://storybook.js.org/`

### 如何完善组件单元测试
#### 渲染render
```javaScript
  const {
      container: HTMLDivElement,      // 组件渲染的容器
      baseElement: HTMLBodyElement,   // 相当于document.body
      debug: Function,                // 打印当前DOM结构  
      rerender: Function,             // 重新渲染组件
      unmount: Function,              // 组件卸载
  } = render(component);
```

#### 查询API Queries
![](../components_library/noteimg/queries%E5%8D%95%E5%85%83%E6%B5%8B%E8%AF%95.png)

### 单元测试基本知识点
#### 单元测试的库有 
* `jest`
* `@react-testing-library`，目前使用，`create-react-app`自动安装的库
* 真实浏览器跑的库
* `https://www.robinwieruch.de/react-testing-library/`学习使用react-testing-library的网站

#### 


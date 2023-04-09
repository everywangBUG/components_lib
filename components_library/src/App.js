import React, { memo } from "react";
import Button from "./button/index.jsx";
import Icon from "./icon/index.jsx";

const App = memo(() => {
  return (
    <div>
      <div className="wz-btn">
        {/* 此处的Click作为props.children透传到子组件button中，将className透传给子组件 */}
        <Button type="primary">Click me</Button>
        {/* 传入type和className */}
        <Button className="my-btn" type="primary">传入className</Button>
        {/* 什么也不传 */}
        <Button>这是原始的自定义button</Button>
        {/* Button组件的dash样式 */}
        <Button type="dash">这是secondarybutton</Button>
        {/* 传入lg/sm大小样式 */}
        <Button type="dash" size="lg"></Button>
      </div>
      <div className="myIcon">
        <Icon></Icon>
      </div>
    </div>
  )
})

export default App

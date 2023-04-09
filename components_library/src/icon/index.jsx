import React, { memo } from "react"
import classNames from "classnames"
import { stepBack, stepForward, settingIcon } from "./assets"
import "./index.less"

const svgMap = {
  stepBack,
  stepForward,
  settingIcon
}

const Icon = memo((props) => {
  const { type = "stepBack", size = 45, className, ...others } = props

  const cls = classNames({
    'ant-icon': type,
    [className]: !!className
  })

  const style = {}
  if(size) {
    style.width = size;
    style.height = size;
  }

  if (type in svgMap) {
    const svg = svgMap[type];
    // 使用React.cloneElement复制到ReactDom上，第二个参数设置属性和样式
    return React.cloneElement(svg, {
      ...others,
      className: cls,
      style,
    })
  }

  return (<i/>)
})

export default Icon
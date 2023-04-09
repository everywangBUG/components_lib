import React, { memo } from "react";
import classNames from "classnames";
import "./index.css";

const Button = memo((props) => {
  const { type, size = "lg", children, className, onClick, onBlur, onFocus, ...others } = props

  const cls = classNames({
    'ant-btn': type,
    // 样式的计算属性名写法
    [`ant-btn-${type}`]: type,
    // 样式的size设置
    [`ant-btn-${size}`]: size,
    // 将变量转换为boolean值
    [className]: !!className
  })
  return (<button className={cls} onClick={onClick} onBlur={onBlur} onFocus={onFocus}>{children}</button>)
})

export default Button 
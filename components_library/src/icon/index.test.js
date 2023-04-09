import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Icon from ".";

describe('Icon', () => {
  // 单元测试Icony样式是否
  test('render Icon', () => {
    const { container } = render(<Icon type="stepBack"/>);
    expect(container.querySelector('.ant-icon')).toBeInTheDocument();
  });

  // 单元测试onClick点击事件
  test('should support click', () => {
    // mock一个点击事件
    const onClick = jest.fn();
    // 渲染Icon组件
    const { container } = render(<Icon onClick={onClick} type="stepBack"/>);
    // 从屏幕中获取svg属性
    const linkElement = container.querySelector('svg')
    // 触发点击事件
    fireEvent.click(linkElement);
    // 断言回调函数
    expect(onClick).toBeCalled();
  });
});
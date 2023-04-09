import React from "react";
import Button from "./index.jsx";
import { fireEvent, render, screen } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect.js';


describe("button", () => {
  // 查找屏幕中是否有click me字段
  test('renders learn react link', () => {
    render(<Button>click me!</Button>);
    const linkElement = screen.getByText(/click me/i);
    expect(linkElement).toBeInTheDocument();
  });

  // 样式单元测试.ant-btn-normal元素是否在button中生效
  test('renders secondary Button', () => {
    const { container } = render(<Button className="secondary">Click me</Button>);
    expect(container.querySelector('.secondary')).toBeInTheDocument();
  });

  // 样式单元测试.ant-btn-primary元素是否在button元素中生效
  test('renders primary Button', () => {
    const { container } = render(<Button type="primary">Click me</Button>);
    expect(container.querySelector('.ant-btn-primary')).toBeInTheDocument();
  });

  // 单元测试点击事件
  test('should support click', () => {
    // mock一个点击行为
    const onClick = jest.fn();
    // 先渲染primary button元素
    render(<Button onClick={onClick} type="primary">click me</Button>);
    // 从屏幕中获取Button字段
    const linkElement = screen.getByText(/click me/i);
    // 触发点击事件一次
    fireEvent.click(linkElement);
    // onClick被调用一次
    expect(onClick).toBeCalled();
  });

  // 单元测试onBlur失去、焦点事件
  test('should support blur', () => {
    // mock一个点击行为
    const onBlur = jest.fn();
    // 先渲染primary button元素
    render(<Button onBlur={onBlur} type="primary">click me</Button>);
    // 从屏幕中获取click me字段
    const linkElement = screen.getByText(/click me/i);
    // 触发点击事件一次
    fireEvent.click(linkElement);
    // 模拟失去焦点
    fireEvent.blur(linkElement);
    // onBlur被调用一次
    expect(onBlur).toBeCalled();
  });

  // 单元测试onFocus
  test('should support focus', () => {
    // mock一个点击行为
    const onFocus = jest.fn();
    // 先渲染primary button元素
    render(<Button onFocus={onFocus} type="primary">click me</Button>);
    // 从屏幕中获取Button字段
    const linkElement = screen.getByText(/click me/i);
    // 触发失去焦点事件一次
    fireEvent.focus(linkElement);
    // onFocus被调用一次
    expect(onFocus).toBeCalled();
  });

  // 样式单元测量.ant-btn-lg/sm是否在button组件中生效
  test('size test', () => {
    // 渲染Button组件
    const { container } = render(<Button type="dash" size="lg">click me</Button>);
    // 获取.ant-btn-lg
    expect(container.querySelector('.ant-btn-lg')).toBeInTheDocument();
  })
});
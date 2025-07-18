# Todo List 小程序

## 1. 介绍

一个简洁高效的微信小程序 Todo List 应用，支持任务的添加、完成、删除、筛选、主题切换与本地数据持久化。旨在展示对小程序开发的熟练掌握以及良好的UI设计实践。

## 2. 功能亮点

\- 添加任务：支持输入任务内容后点击按钮或回车键添加任务

\- 任务状态切换：点击任务文本可切换完成与未完成状态

\- 删除任务：点击删除按钮，任务淡出动画后被移除

\- 筛选任务：支持“全部 / 未完成 / 已完成”三种视图切换

\- 删除动画：删除任务时伴随平滑淡出动画（opacity过渡）

\- 空状态提示：无任务时显示“暂无任务”友好提示

\- 明暗主题切换：点击按钮在“日间模式 / 夜间模式”间切换

\- 数据持久化：任务数据与主题状态保存在本地，自动恢复

\- 响应式设计：兼容各类尺寸的小程序端设备

## 3. 技术栈

本项目使用了原生微信小程序开发模式，结合 CSS 动画和本地缓存实现。各部分技术如下：

| 技术          | 说明                                                         |
| ------------- | ------------------------------------------------------------ |
| WXML          | 页面结构（类似 HTML），用于定义任务列表、输入框、按钮等组件  |
| WXSS          | 页面样式（类似 CSS），用于控制布局、颜色、动画、响应式单位等 |
| Javascript    | 页面逻辑控制，如添加任务、切换状态、删除、筛选、切换主题、缓存操作等 |
| 小程序 API    | 使用wx.setStorageSync() / wx.getStorageSync() 实现本地数据持久化 |
| CSS动画       | 使用transition-opacity, hover, fade-out等样式实现交互过渡与删除动画 |
| 响应式单位rpx | 适配不同屏幕宽度，保证在不同设备上良好显示                   |

## 4. 运行截图

日间模式/夜间模式：

<img width="388" height="408" alt="image" src="https://github.com/user-attachments/assets/6d614e24-ed4d-455e-9d85-9eb2af270bf9" />
<img width="378" height="411" alt="image" src="https://github.com/user-attachments/assets/09f7f88a-f933-4e8f-a143-7d13052c6411" />


  添加任务1后，未完成之前都会在active显示：

<img width="380" height="348" alt="image" src="https://github.com/user-attachments/assets/e4e9296e-72f9-4a63-a839-3534b0e7d7c5" />
<img width="405" height="359" alt="image" src="https://github.com/user-attachments/assets/a12d9d87-960d-4692-a829-858bfbe6eef2" />


  完成任务1后，点击本身：

 <img width="329" height="386" alt="image" src="https://github.com/user-attachments/assets/63ddb882-c743-4a49-873a-533b63aa87ce" />
<img width="370" height="354" alt="image" src="https://github.com/user-attachments/assets/90655d61-c669-415b-8051-e006af644b8f" />



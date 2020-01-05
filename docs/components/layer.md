---
title: 默认布局 - layer
sidebarDepth: 2
---

# 默认布局

提供 `container` `sider` `header` `content` `footer` 组件进行布局，并可进行嵌套使用，组件自带了对应的类名，可直接书写样式。

<br>

<ClientOnly>
<layer-demo-1></layer-demo-1>
</ClientOnly>

```html
<u-container>
  <u-sider>sider</u-sider>
  <u-container>
    <u-header>header</u-header>
    <u-content>content</u-content>
    <u-footer>footer</u-footer>
  </u-container>
</u-container>
```
```css
  .container {
    height: 200px;
    color: #fff;
  }
  .sider {
    width: 20%;
    background-color: #71c9ce;
  }
  .content{
    background-color: #cbf1f5;
    color:  #71c9ce;
  }
  .header, .footer{
    background-color: #56a7ac;
  }
```
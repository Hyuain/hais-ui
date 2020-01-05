---
title: 网格系统 - grid
sidebarDepth: 2
---

# 网格系统

## auto
<font color=#56a7ac>可选</font>

<br>

<ClientOnly>
<grid-demo-1></grid-demo-1>
</ClientOnly>

- 类型：`Boolean`

- 默认值：`false`

- 用法：

```html
<u-row id="container" auto>
  <u-col id="item1"></u-col>
  <u-col id="item2"></u-col>
  <u-col id="item3"></u-col>
</u-row>
```
```css
#item1, #item2, #item3{
  width: 100%;
}
```

在 `row` 组件上的 `auto` 属性会将所有的 `col` 组件放在一排并平均占据宽度，注意这个时候需要为 `col` 加上宽度。

## gutter
<font color=#56a7ac>可选</font>

<br>

<ClientOnly>
<grid-demo-4></grid-demo-4>
</ClientOnly>

- 类型：`String` `Number`

- 默认值：`undefined`

- 可接受值：`Number`

- 用法：

```html
<u-row id="container" auto gutter="20">
  <u-col id="box1">
    <div id="item1"></div>
  </u-col>
  <u-col id="box2">
    <div id="item2"></div>
  </u-col>
  <u-col id="box3">
    <div id="item3"></div>
  </u-col>
</u-row>
```

`gutter` 可以设置每个 `col` 内部元素之间的距离。

## span
<font color=#56a7ac>可选</font>

<br>

<ClientOnly>
<grid-demo-2></grid-demo-2>
</ClientOnly>

- 类型：`String` `Number`

- 默认值：`undefined`

- 可接受值：`0` ~ `24`

- 用法：

```html
<u-row id="container">
  <u-col id="item1" span="4"></u-col>
  <u-col id="item2" span="12"></u-col>
  <u-col id="item3" span="8"></u-col>
</u-row>
```

可以用 `span` 为每个 `col` 手动分配占据的宽度比例，每排一共 `24` 份，若几个 `col` 的 `span` 之和超过 `24`，末尾的元素将会换行。

## offset
<font color=#56a7ac>可选</font>

<br>

<ClientOnly>
<grid-demo-3></grid-demo-3>
</ClientOnly>

- 类型：`String` `Number`

- 默认值：`undefined`

- 可接受值：`0` ~ `24`

- 用法：

```html
<u-row id="container">
  <u-col id="item1" span="4"></u-col>
  <u-col id="item2" span="12" offset="2"></u-col>
  <u-col id="item3" span="2" offset="4"></u-col>
</u-row>
```

可以用 `offset` 为每个 `col` 设置距离其左边 `col` 的份数，若几个 `col` 的 `span` 和 `offset` 之和超过 `24`，末尾的元素将会换行。

## 响应式布局

布局组件支持响应式布局，内置 5 种宽度范围，当没有写对应范围的样式时，将默认向下取值。

|  属性  |  宽度  |
|  :----:   | :----:  |
|  默认  |  0px ~ 576px  |
|  pad  |  577px ~ 768px |
|  narrow-pc  |  769px ~ 992px |
|  pc  |  993px ~ 1200px |
|  wide-pc  |  ≥ 1201px  |

- 示例：

<ClientOnly>
<grid-demo-5></grid-demo-5>
</ClientOnly>


```html
<u-row id="container">
  <u-col id="item1" span="24"
         :pad="{span:8}"
         :narrow-pc="{span:6}"
         :pc="{span:4}"
         :wide-pc="{span:2}"
  ></u-col>
  <u-col id="item2" span="24"
         :pad="{span:15, offset:1}"
         :narrow-pc="{span:17,offset:1}"
         :pc="{span:18,offset:2}"
         :wide-pc="{span:19, offset:3}"
  ></u-col>
</u-row>
```
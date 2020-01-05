---
title: 按钮 - button
sidebarDepth: 2
---

# 按钮

## icon 
<font color=#56a7ac>可选</font>

<br>

<ClientOnly>
<button-demo-1></button-demo-1>
</ClientOnly>

- 类型：`String`

- 默认值：`undefined`

- 用法：

```html
<u-button>按钮</u-button>
<u-button icon="settings">按钮</u-button>
<u-button icon="likes">按钮</u-button>
<u-button icon="download">按钮</u-button>
<u-button icon="left">按钮</u-button>
<u-button icon="right">按钮</u-button>
<u-button icon="down">按钮</u-button>
```

`button` 组件内置了 6 个 icon，可以直接通过 `icon` 属性进行设置；也可以 Symbol 的方式引入自定义图标，然后把图标名传给 `icon` 属性。

以上的内置图标和自定义图标也可以通过 `icon` 组件直接使用。

```html
<u-icon name="settings"></u-icon>
```
## loading
<font color=#56a7ac>可选</font>

<br>

<ClientOnly>
<button-demo-2></button-demo-2>
</ClientOnly>

- 类型：`Boolean`

- 默认值：`false`

- 可接受值：`true` `false`

- 用法：

```html
<u-button icon="settings" loading>按钮</u-button>
<u-button icon="settings" :loading="state" @click="state = !state">按钮</u-button>
```

`loading` 属性可以控制是否显示 `loading` 图标，显示 `loading` 图标时将隐藏之前的图标；也可以给 `loading` 属性传一个变量，达到切换图标的效果。

## icon-position
<font color=#56a7ac>可选</font>

<br>

<ClientOnly>
<button-demo-3></button-demo-3>
</ClientOnly>

- 类型：`String`

- 默认值：`left`

- 可接受值：`left` `right`

- 用法：

```html
<u-button icon="settings" loading>按钮</u-button>
<u-button icon="settings" :loading="state" @click="state = !state">按钮</u-button>
```

可以通过 `icon-position` 来控制图标是在左边还是在右边，`loading` 图标也将显示在相同的位置。

## button-group
<font color=#56a7ac>可选</font>

<br>

<ClientOnly>
<button-demo-4></button-demo-4>
</ClientOnly>

- 用法：

```html
<u-button-group>
  <u-button icon="left">上一页</u-button>
  <u-button>按钮</u-button>
  <u-button icon="right" icon-position="right">下一页</u-button>
</u-button-group>
```

可以通过 `button-group` 组件来构成一个按钮组，中间的边框、圆角等将自适应，可以自行更改按钮组中按钮的数量。
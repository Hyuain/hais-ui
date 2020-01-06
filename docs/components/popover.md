---
title: 气泡卡片 - popover
sidebarDepth: 2
---

# 输入框

## value
<font color=#56a7ac>可选</font>

<br>

<ClientOnly>
<toast-demo-1></toast-demo-1>
</ClientOnly>

- 类型：`String`

- 默认值：`undefined`

- 用法：

```html
<u-input value="请输入内容"></u-input>
```

在 `value` 属性中可以传入默认显示的值。

## disabled
<font color=#56a7ac>可选</font>

<br>

<ClientOnly>
<input-demo-2></input-demo-2>
</ClientOnly>

- 类型：`Boolean`

- 默认值：`false`

- 可接受值：`true` `false`

- 用法：

```html
<u-input value="不可用" disabled></u-input>
```

将输入框设置为 `disabled`。

## readonly
<font color=#56a7ac>可选</font>

<br>

<ClientOnly>
<input-demo-3></input-demo-3>
</ClientOnly>

- 类型：`Boolean`

- 默认值：`false`

- 可接受值：`true` `false`

- 用法：

```html
<u-input value="只读" readonly></u-input>
```

将输入框设置为 `readonly`。

## error
<font color=#56a7ac>可选</font>

<br>

<ClientOnly>
<input-demo-4></input-demo-4>
</ClientOnly>

- 类型：`String`

- 默认值：`undefined`

- 用法：

```html
<u-input error="您输入的信息不符合要求！"></u-input>
```

可以给传入 `error` 传入错误信息，并且将输入框变为 `error` 样式。

## v-model

输入框组件支持 `v-model` 双向绑定。

- 示例：

<ClientOnly>
<input-demo-5></input-demo-5>
</ClientOnly>

```html
<u-input v-model="message"></u-input>
<p>{{message}}</p>
<u-button @click="message+=1">点我</u-button>
```
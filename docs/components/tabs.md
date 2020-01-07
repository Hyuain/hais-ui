---
title: 标签 - tabs
sidebarDepth: 2
---

# 标签

## 简单示例

`tabs` 组件包含 `tabs` `tabs-head` `tabs-item` `tabs-body` `tabs-pane` 这几个子组件。

<br>

<ClientOnly>
<tabs-demo-1></tabs-demo-1>
</ClientOnly>

<br>

```html
<u-tabs selected="sports">

  <u-tabs-head>
    <template slot="actions">
      <u-button>设置</u-button>
    </template>
    <u-tabs-item name="anime"><u-icon name="likes"></u-icon> 动漫</u-tabs-item>
    <u-tabs-item name="finance" disabled>财经</u-tabs-item>
    <u-tabs-item name="sports">体育</u-tabs-item>
  </u-tabs-head>

  <u-tabs-body>
    <u-tabs-pane name="anime">动漫相关资讯</u-tabs-pane>
    <u-tabs-pane name="finance">财经相关资讯</u-tabs-pane>
    <u-tabs-pane name="sports">体育相关资讯</u-tabs-pane>
  </u-tabs-body>

</u-tabs>
```

## name
<font color=#ff6464>必须</font>

- 类型：`String`

- 默认值：`undefined`

- 用法：

```html
<u-tabs-head>
  <u-tabs-item name="anime">动漫</u-tabs-item>
  <u-tabs-item name="finance">财经</u-tabs-item>
  <u-tabs-item name="sports">体育</u-tabs-item>
</u-tabs-head>

<u-tabs-body>
  <u-tabs-pane name="anime">动漫相关资讯</u-tabs-pane>
  <u-tabs-pane name="finance">财经相关资讯</u-tabs-pane>
  <u-tabs-pane name="sports">体育相关资讯</u-tabs-pane>
</u-tabs-body>
```
::: warning 注意
每个 `tabs-item` 和 `tabs-pane` 都必须接受一个 `name` 属性，且 `tabs-item` 与其对应的 `tabs-pane` 需要拥有相同的 `name`。
:::

## selected
<font color=#ff6464>必须</font>

- 类型：`String`

- 默认值：`undefined`

- 用法：

```html
<u-tabs selected="sports">

  <u-tabs-head>
    <u-tabs-item name="anime">动漫</u-tabs-item>
    <u-tabs-item name="finance">财经</u-tabs-item>
    <u-tabs-item name="sports">体育</u-tabs-item>
  </u-tabs-head>

  <u-tabs-body>
    <u-tabs-pane name="anime">动漫相关资讯</u-tabs-pane>
    <u-tabs-pane name="finance">财经相关资讯</u-tabs-pane>
    <u-tabs-pane name="sports">体育相关资讯</u-tabs-pane>
  </u-tabs-body>

</u-tabs>
```
给 `tabs` 一个 `selected` 属性，其值为默认选中的 `tabs-item` 和 `tabs-pane` 的 `name`。

`selected` 还支持 `.sync` 语法。


<ClientOnly>
<tabs-demo-2></tabs-demo-2>
</ClientOnly>


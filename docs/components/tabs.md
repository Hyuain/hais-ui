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
<hai-tabs selected="sports">

  <hai-tabs-head>
    <template slot="actions">
      <hai-button>设置</hai-button>
    </template>
    <hai-tabs-item name="anime"><hai-icon name="likes"></hai-icon> 动漫</hai-tabs-item>
    <hai-tabs-item name="finance" disabled>财经</hai-tabs-item>
    <hai-tabs-item name="sports">体育</hai-tabs-item>
  </hai-tabs-head>

  <hai-tabs-body>
    <hai-tabs-pane name="anime">动漫相关资讯</hai-tabs-pane>
    <hai-tabs-pane name="finance">财经相关资讯</hai-tabs-pane>
    <hai-tabs-pane name="sports">体育相关资讯</hai-tabs-pane>
  </hai-tabs-body>

</hai-tabs>
```

## name
<font color=#ff6464>必须</font>

- 类型：`String`

- 默认值：`undefined`

- 用法：

```html
<hai-tabs-head>
  <hai-tabs-item name="anime">动漫</hai-tabs-item>
  <hai-tabs-item name="finance">财经</hai-tabs-item>
  <hai-tabs-item name="sports">体育</hai-tabs-item>
</hai-tabs-head>

<hai-tabs-body>
  <hai-tabs-pane name="anime">动漫相关资讯</hai-tabs-pane>
  <hai-tabs-pane name="finance">财经相关资讯</hai-tabs-pane>
  <hai-tabs-pane name="sports">体育相关资讯</hai-tabs-pane>
</hai-tabs-body>
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
<hai-tabs selected="sports">

  <hai-tabs-head>
    <hai-tabs-item name="anime">动漫</hai-tabs-item>
    <hai-tabs-item name="finance">财经</hai-tabs-item>
    <hai-tabs-item name="sports">体育</hai-tabs-item>
  </hai-tabs-head>

  <hai-tabs-body>
    <hai-tabs-pane name="anime">动漫相关资讯</hai-tabs-pane>
    <hai-tabs-pane name="finance">财经相关资讯</hai-tabs-pane>
    <hai-tabs-pane name="sports">体育相关资讯</hai-tabs-pane>
  </hai-tabs-body>

</hai-tabs>
```
给 `tabs` 一个 `selected` 属性，其值为默认选中的 `tabs-item` 和 `tabs-pane` 的 `name`。

`selected` 还支持 `.sync` 语法。

<ClientOnly>
<tabs-demo-2></tabs-demo-2>
</ClientOnly>

```html
<hai-tabs :selected.sync="selectedTab">

  <hai-tabs-head>
    <hai-tabs-item name="anime">动漫</hai-tabs-item>
    <hai-tabs-item name="finance">财经</hai-tabs-item>
    <hai-tabs-item name="sports">体育</hai-tabs-item>
  </hai-tabs-head>

  <hai-tabs-body>
    <hai-tabs-pane name="anime">动漫相关资讯</hai-tabs-pane>
    <hai-tabs-pane name="finance">财经相关资讯</hai-tabs-pane>
    <hai-tabs-pane name="sports">体育相关资讯</hai-tabs-pane>
  </hai-tabs-body>

</hai-tabs>

selectedTab: {{selectedTab}}
```

## direction
<font color=#56a7ac>可选</font>

<br>

<ClientOnly>
<tabs-demo-3></tabs-demo-3>
</ClientOnly>

- 类型：`String`

- 默认值：`horizontal`

- 可接受值：`horizontal` `vertical`

- 用法：

```html
<hai-tabs selected="sports" direction="vertical">

  <hai-tabs-head>
    <hai-tabs-item name="anime">动漫</hai-tabs-item>
    <hai-tabs-item name="finance">财经</hai-tabs-item>
    <hai-tabs-item name="sports">体育</hai-tabs-item>
  </hai-tabs-head>

  <hai-tabs-body>
    <hai-tabs-pane name="anime">动漫相关资讯</hai-tabs-pane>
    <hai-tabs-pane name="finance">财经相关资讯</hai-tabs-pane>
    <hai-tabs-pane name="sports">体育相关资讯</hai-tabs-pane>
  </hai-tabs-body>

</hai-tabs>
```

可以通过 `direction` 属性设置标签为横向或纵向排列。
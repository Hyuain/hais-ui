---
title: 折叠面板 - collapse
sidebarDepth: 2
---

# 折叠面板

## 简单实例

<br>

<ClientOnly>
<collapse-demo-1></collapse-demo-1>
</ClientOnly>

```html
<u-collapse :selected="['name1','name3']">
  <u-collapse-item title="标题1" name="name1">这里是第1段内容</u-collapse-item>
  <u-collapse-item title="标题2" name="name2">这里是第2段内容</u-collapse-item>
  <u-collapse-item title="标题3" name="name3">这里是第3段内容</u-collapse-item>
</u-collapse>
```

`collapse` 由 `collapse` 和 `collapse-item` 两部分组成，包含基础属性 `selected` `title` `name`。

## title
<font color=#ff6464>必须</font>

- 类型：`String`

- 默认值：`undefined`

- 用法：

```html
<u-collapse-item title="标题1" name="1">这里是第1段内容</u-collapse-item>
```

用于设置 `collapse` 的每一项的标题中的值。

## name
<font color=#ff6464>必须</font>

- 类型：`String`

- 默认值：`undefined`

- 用法：

```html
<u-collapse-item title="标题1" name="1">这里是第1段内容</u-collapse-item>
```

每一项都必须有一个 `name` 属性，否则将会引起错误。

## selected
<font color=#56a7ac>可选</font>

- 类型：`Array`

- 默认值：`[]`

- 用法：

```html
<u-collapse :selected="['name1','name3']">
  <u-collapse-item title="标题1" name="name1">这里是第1段内容</u-collapse-item>
  <u-collapse-item title="标题2" name="name2">这里是第2段内容</u-collapse-item>
  <u-collapse-item title="标题3" name="name3">这里是第3段内容</u-collapse-item>
</u-collapse>
```

`selected` 属性需要传入一个数组，这个数组包含了默认展开项的 `name`，默认为空数组，即均不展开。

`selected` 属性也支持 `.sync` 语法，示例如下：
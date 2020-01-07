---
title: 安装
---

# 安装

您可以在使用 parcel、webpack、vue-cli 等搭建的项目中，通过 yarn 来安装 Hais-UI。

```bash
yarn add hais-ui
```

然后再您项目的入口文件中（这可能是 `main.js` 或其他 `JavaScript` 文件）引入 Vue、Hais-UI 及对应的 CSS 样式库。

```js
import Vue from 'vue'
import HaisUI from 'hais-ui'
import 'hais-ui/dist/index.css'
```

然后您需要注册并启用 Hais-UI 的组件。

```js
Vue.use(HaisUI)
```

然后您就可以在项目中直接使用 Hais-UI 的组件了，这包括按钮、输入框、网格系统、默认布局、弹出信息、标签、气泡卡片和折叠面板等，在接下来的文章中您会看到如何使用这些组件。 
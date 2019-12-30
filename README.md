# Hais UI - 一个小小的 Vue UI 组件

[![Build Status](https://travis-ci.com/Hyuain/hais-ui.svg?branch=master)](https://travis-ci.com/Hyuain/hais-ui) ![GitHub package.json version](https://img.shields.io/github/package-json/v/Hyuain/hais-ui)

## 介绍

我在学习 Vue 的过程中，尝试做了一个 UI 组件。

## 开始使用

1. 添加 CSS 样式

    使用本框架前，请先使用 `border-box`。
    
    ```css
    *{box-sizing: border-box;}
    *::before,*::after{box-sizing: border-box;}
    ```
    
    IE 8 及以上浏览器支持此样式。
    
    同时目前还需要设置颜色等 CSS 样式的变量（后续可能会改为 SCSS 变量）
    ```css
    html {
      --button-height: 32px;
      --font-size: 14px;
      --button-bg: white;
      --button-active-bg: #eee;
      --border-radius: 4px;
      --color: #333;
      --border-color: #999;
      --border-color-hover: #666;
    }
    ```
    
    IE 15 及以上浏览器支持此样式。

2. 安装 hais-ui

    ```
    yarn add hais-ui-001
    ```

3. 引入 hais-ui

    ```js
    import {Icon, Button, ButtonGroup} from 'hais-ui-001'
    import 'hais-ui-001/dist/index.css'
    export default {
      name: 'app',
      components: {
        'u-icon': Icon,
        'u-button': Button,
        'u-button-group': ButtonGroup
      }
    }
    ```

4. 引入 svg symbols

    ```html
    <script src="//at.alicdn.com/t/font_1584377_7jl7qtso52c.js"></script>
    ```

## 文档

## 提问

## 变更记录

## 联系方式

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Run your unit tests
```
yarn test:unit
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

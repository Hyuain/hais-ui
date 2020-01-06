---
title: 弹出信息 - toast
sidebarDepth: 2
---

# 弹出信息

## 简单示例

<br>

<ClientOnly>
<toast-demo-1></toast-demo-1>
</ClientOnly>

`toast` 组件是以插件的形式提供的，您需要在 `JavaScript` 文件中加入以下内容来使用插件：

```js
Vue.use(plugin)
```

然后就可以以函数的形式调用 `toast` 组件了。

```html
<u-button @click="showToast">弹出信息</u-button>
```

```js
new Vue({
  methods: {
    showToast() {
      this.$toast('这是一条弹出信息')
    }
  }
}).$mount('#app')
```

## this.$toast()

可以通过 `this.$toast()` 方法来使用 `toast` 组件，他接受两个参数：`message` 和 `options`，下面会介绍这两个参数的具体内容。

## message
<font color=#ff6464>必须</font>

- 类型：`String` `Html`

- 默认值：`undefined`

- 用法：

<ClientOnly>
<toast-demo-2></toast-demo-2>
</ClientOnly>

```js
showToast1() {
  this.$toast('Hais Teatime')
},
showToast2() {
  this.$toast('<a href="http://hais-teatime.com">Hais Teatime</a>', {
    enableHtml: true
  })
}
```

::: warning 注意
如果想要在 `message` 中使用 `Html` 内容，需要先开启 `enableHtml` 选项。
:::

## options
<font color=#56a7ac>可选</font>

- 类型：`Object`

`options` 是一个对象，包含以下这些属性，他们都是可选的：

### autoClose

- 类型：`Boolean` `Number`

- 默认值：`5`

- 可接受值：`false` `Number`

- 示例：

```js
this.$toast('Hais Teatime', {
  autoClose: false
})
```

若 `autoClose` 的值为 `false`，则弹出信息不会自动关闭，否则就传入一个数字，代表其自动关闭的秒数；若不写 `autoClose` 属性，则默认 5 秒后自动关闭。

### closeButton

- 类型：`Object`

<ClientOnly>
<toast-demo-3></toast-demo-3>
</ClientOnly>

- 示例：

```js
this.$toast('有关闭按钮的弹出信息', {
  autoClose: false,
  closeButton: {
    text: '知道了',
    callback(toast) {
      console.log('用户说他知道了')
      console.log(toast)
    },
  },
})
```

`closeButton` 是一个对象，用于定义关闭按钮的属性。

其中 `text` 属性用来控制关闭按钮显示的文字，初次之外还可以传入一个 `callback`，当用户点击关闭时调用，并会将这个 `toast` 组件作为参数传入。

### position

- 类型：`String`

- 默认值：`top`

- 可接受值：`top` `bottom` `middle`

- 示例：

<ClientOnly>
<toast-demo-4></toast-demo-4>
</ClientOnly>

```html
<u-button @click="showToast1">从顶部弹出</u-button>
<u-button @click="showToast2">在中间弹出</u-button>
<u-button @click="showToast3">从下方弹出</u-button>
```

```js
showToast1() {
  this.showToast('top')
},
showToast2() {
  this.showToast('middle')
},
showToast3() {
  this.showToast('bottom')
},
showToast(position) {
  this.$toast('这是一条弹出信息',
    {
      autoClose: false,
      position: position,
      closeButton: {
        text: '知道了'
      }
    }
  )
}
```

### enableHtml

- 类型：`Boolean`

- 默认值：`false`

- 可接受值：`true` `false`

- 示例：

<ClientOnly>
<toast-demo-5></toast-demo-5>
</ClientOnly>

```js
showToast1() {
  this.$toast('<a href="http://hais-teatime.com">Hais Teatime</a>', {
    enableHtml: false
  })
},
showToast2() {
  this.$toast('<a href="http://hais-teatime.com">Hais Teatime</a>', {
    enableHtml: true
  })
}
```
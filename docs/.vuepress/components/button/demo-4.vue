<template>
  <div>
    <u-button-group>
      <u-button icon="left">上一页</u-button>
      <u-button>按钮</u-button>
      <u-button icon="right" icon-position="right">下一页</u-button>
    </u-button-group>
  </div>
</template>

<script>
  import Button from "../../../../src/button"
  import ButtonGroup from "../../../../src/button-group"
  export default {
    components: {
      'u-button': Button,
      'u-button-group': ButtonGroup
    }
  }
</script>
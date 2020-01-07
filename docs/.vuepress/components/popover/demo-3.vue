<template>
<div>
  <u-popover>
    <template v-slot:content>
      <div>这是气泡卡片的内容</div>
    </template>
    <u-button>点击弹出</u-button>
  </u-popover>

  <u-popover trigger="hover">
    <template v-slot:content>
      <div>这是气泡卡片的内容</div>
    </template>
    <u-button>悬浮弹出</u-button>
  </u-popover>
</div>
</template>

<script>

  import Popover from "../../../../src/popover"
  import Button from "../../../../src/button"

  export default {
    components: {
      'u-popover': Popover,
      'u-button': Button
    }
  }

</script>
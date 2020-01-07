<template>
<div>
  <u-popover>
    <template v-slot:content>
      <div>这是气泡卡片的内容</div>
    </template>
    <hai-button>点击弹出</hai-button>
  </u-popover>

  <u-popover trigger="hover">
    <template v-slot:content>
      <div>这是气泡卡片的内容</div>
    </template>
    <hai-button>悬浮弹出</hai-button>
  </u-popover>
</div>
</template>

<script>

  import Popover from "../../../../src/popover"
  import Button from "../../../../src/button"

  export default {
    components: {
      'u-popover': Popover,
      'hai-button': Button
    }
  }

</script>
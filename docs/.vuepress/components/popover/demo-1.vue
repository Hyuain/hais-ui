<template>
  <div>
  <u-popover position="bottom">
    <template v-slot:content>
      <div>这是气泡卡片的内容</div>
    </template>
    <u-button>从下方弹出</u-button>
  </u-popover>

  <u-popover>
    <template v-slot:content>
      <div>这是气泡卡片的内容</div>
    </template>
    <u-button>从上方弹出</u-button>
  </u-popover>

  <u-popover position="left">
    <template v-slot:content>
      <div>这是气泡卡片的内容</div>
    </template>
    <u-button>从左侧弹出</u-button>
  </u-popover>

  <u-popover position="right">
    <template v-slot:content>
      <div>这是气泡卡片的内容</div>
    </template>
    <u-button>从右侧弹出</u-button>
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
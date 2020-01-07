<template>
  <div>
    <u-popover position="bottom">
      <template v-slot:content="{close}">
        <div>这是气泡卡片的内容</div>
        <div class="button-wrapper">
          <hai-button @click="close" class="button">点击关闭</hai-button>
        </div>
      </template>
      <hai-button>手动关闭标签示例</hai-button>
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

<style lang="scss" scoped>
  .button-wrapper {
    display: flex;
    justify-content: flex-end;
    > .button {
      margin-top: 10px;
    }
  }


</style>
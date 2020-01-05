<template>
  <div>
    <u-button icon="settings" loading>按钮</u-button>
    <u-button icon="settings" :loading="state" @click="state = !state">按钮</u-button>
  </div>
</template>

<script>

  import Button from "../../../../src/button"

  export default {
    components: {
      'u-button': Button
    },
    data() {
      return {
        state: false
      }
    }
  }

</script>
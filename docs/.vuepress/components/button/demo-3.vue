<template>
  <div>
    <u-button icon="settings">按钮</u-button>
    <u-button icon="settings" icon-position="right">按钮</u-button>
  </div>
</template>

<script>

  import Button from "../../../../src/button"

  export default {
    components: {
      'u-button': Button
    }
  }

</script>
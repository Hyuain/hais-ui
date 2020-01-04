<template>
  <div>
    <u-button>默认按钮</u-button>
    <u-button icon="settings">默认按钮</u-button>
    <u-button loading>默认按钮</u-button>
    <u-button disabled>默认按钮</u-button>
  </div>
</template>

<script>

  import Button from "../../../src/button"

  export default {
    components: {
      'u-button': Button
    }
  }

</script>
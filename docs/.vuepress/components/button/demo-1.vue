<template>
  <div>
    <u-button>按钮</u-button>
    <u-button icon="settings">按钮</u-button>
    <u-button icon="likes">按钮</u-button>
    <u-button icon="download">按钮</u-button>
    <u-button icon="left">按钮</u-button>
    <u-button icon="right">按钮</u-button>
    <u-button icon="down">按钮</u-button>
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
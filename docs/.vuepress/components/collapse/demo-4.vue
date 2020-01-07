<template>
  <div>
    <u-input error="您输入的信息不符合要求！"></u-input>
  </div>
</template>

<script>

  import Input from "../../../../src/input"

  export default {
    components: {
      'u-input': Input
    }
  }

</script>
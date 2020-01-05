<template>
  <div>
    <u-row id="container" auto>
      <u-col id="item1"></u-col>
      <u-col id="item2"></u-col>
      <u-col id="item3"></u-col>
    </u-row>
  </div>
</template>

<script>
  import Row from "../../../../src/row"
  import Col from "../../../../src/col"
  export default {
    components: {
      'u-row': Row,
      'u-col': Col
    }
  }
</script>

<style lang="scss" scoped>
  #item1, #item2, #item3{
    height: 50px;
    width: 100%;
  }
  #item2 {
    background-color: #cbf1f5;
  }
  #item1, #item3{
    background-color: #71c9ce;
  }
</style>
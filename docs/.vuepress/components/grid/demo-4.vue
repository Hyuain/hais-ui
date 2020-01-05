<template>
  <div>
    <u-row id="container" auto gutter="20">
      <u-col id="box1">
        <div id="item1"></div>
      </u-col>
      <u-col id="box2">
        <div id="item2"></div>
      </u-col>
      <u-col id="box3">
        <div id="item3"></div>
      </u-col>
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
  #box1, #box2, #box3 {
    width: 100%;
  }
  #item1, #item2, #item3 {
    height: 50px;
  }
  #item2 {
    background-color: #cbf1f5;
  }
  #item1, #item3 {
    background-color: #71c9ce;
  }
</style>
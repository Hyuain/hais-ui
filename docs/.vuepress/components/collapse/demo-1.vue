<template>
  <u-collapse :selected="['name1','name3']">
    <u-collapse-item title="标题1" name="name1">这里是第1段内容</u-collapse-item>
    <u-collapse-item title="标题2" name="name2">这里是第2段内容</u-collapse-item>
    <u-collapse-item title="标题3" name="name3">这里是第3段内容</u-collapse-item>
  </u-collapse>
</template>

<script>

  import Collapse from "../../../../src/collapse"
  import CollapseItem from "../../../../src/collapse-item"

  export default {
    components: {
      'u-collapse': Collapse,
      'u-collapse-item': CollapseItem
    }
  }

</script>
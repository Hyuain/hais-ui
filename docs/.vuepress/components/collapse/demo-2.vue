<template>
  <div>
    <hai-collapse :selected.sync="selectedItem">
      <hai-collapse-item title="标题1" name="name1">这里是第1段内容</hai-collapse-item>
      <hai-collapse-item title="标题2" name="name2">这里是第2段内容</hai-collapse-item>
      <hai-collapse-item title="标题3" name="name3">这里是第3段内容</hai-collapse-item>
    </hai-collapse>
    <div class="monitor">
      selectedItem: {{selectedItem}}
    </div>
  </div>
</template>

<script>

  import Collapse from "../../../../src/collapse"
  import CollapseItem from "../../../../src/collapse-item"

  export default {
    data(){
      return{
        selectedItem: ['name2']
      }
    },
    components: {
      'hai-collapse': Collapse,
      'hai-collapse-item': CollapseItem
    }
  }

</script>

<style scoped>
  .monitor {
    padding: 15px;
    color: #56a7ac;
    font-weight: 500;
  }
</style>
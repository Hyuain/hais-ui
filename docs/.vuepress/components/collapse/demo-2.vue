<template>
  <div class="demo-wrapper">
    <hai-collapse :selected.sync="selectedItem">
      <hai-collapse-item title="标题1" name="name1">这里是第1段内容</hai-collapse-item>
      <hai-collapse-item title="标题2" name="name2">这里是第2段内容</hai-collapse-item>
      <hai-collapse-item title="标题3" name="name3">这里是第3段内容</hai-collapse-item>
    </hai-collapse>
    <div class="demo-monitor">
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
  @media (max-width: 419px) {
    .demo-wrapper {
      margin: 0.85rem -1.5rem;
      border-radius: 0
    }
  }
  .demo-wrapper {
    background: rgba(234, 236, 239, 0.5);
    border-radius: 6px;
    padding: 10px;
  }
  .demo-monitor{
    margin-left: 4px;
    margin-top: 8px;
    color: #56a7ac;
    font-weight: 500;
  }
</style>
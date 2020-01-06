<template>
  <div>
    <u-tabs :selected.sync="selectedTab">

      <u-tabs-head>
        <u-tabs-item name="anime">动漫</u-tabs-item>
        <u-tabs-item name="finance">财经</u-tabs-item>
        <u-tabs-item name="sports">体育</u-tabs-item>
      </u-tabs-head>

      <u-tabs-body>
        <u-tabs-pane name="anime">动漫相关资讯</u-tabs-pane>
        <u-tabs-pane name="finance">财经相关资讯</u-tabs-pane>
        <u-tabs-pane name="sports">体育相关资讯</u-tabs-pane>
      </u-tabs-body>

    </u-tabs>

    <div class="monitor">
      selectedTab: {{selectedTab}}
    </div>
  </div>
</template>

<script>
  import Button from '../../../../src/button'
  import Tabs from '../../../../src/tabs'
  import TabsHead from '../../../../src/tabs-head'
  import TabsItem from '../../../../src/tabs-item'
  import TabsBody from '../../../../src/tabs-body'
  import TabsPane from '../../../../src/tabs-pane'
  import Icon from '../../../../src/icon'

  export default {
    data(){
      return {
        selectedTab : 'sports'
      }
    },
    components: {
      'u-button': Button,
      'u-tabs': Tabs,
      'u-tabs-head': TabsHead,
      'u-tabs-item': TabsItem,
      'u-tabs-body': TabsBody,
      'u-tabs-pane': TabsPane,
      'u-icon': Icon
    },
    methods: {
      showToast() {
        this.$toast('这是一条弹出信息')
      }
    }
  }

</script>

<style>
  .monitor{
    padding: 15px;
    color: #56a7ac;
    font-weight: 500;
  }
</style>
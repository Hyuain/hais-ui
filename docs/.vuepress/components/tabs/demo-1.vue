<template>
  <div>
    <u-tabs selected="sports">

      <u-tabs-head>
        <template slot="actions">
          <u-button>设置</u-button>
        </template>
        <u-tabs-item name="anime"><u-icon name="likes"></u-icon> 动漫</u-tabs-item>
        <u-tabs-item name="finance" disabled>财经</u-tabs-item>
        <u-tabs-item name="sports">体育</u-tabs-item>
      </u-tabs-head>

      <u-tabs-body>
        <u-tabs-pane name="anime">动漫相关资讯</u-tabs-pane>
        <u-tabs-pane name="finance">财经相关资讯</u-tabs-pane>
        <u-tabs-pane name="sports">体育相关资讯</u-tabs-pane>
      </u-tabs-body>

    </u-tabs>
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
    components: {
      'u-button': Button,
      'u-tabs': Tabs,
      'u-tabs-head': TabsHead,
      'u-tabs-item': TabsItem,
      'u-tabs-body': TabsBody,
      'u-tabs-pane': TabsPane,
      'u-icon': Icon
    }
  }

</script>
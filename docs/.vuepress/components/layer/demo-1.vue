<template>
  <div>
    <u-container>
      <u-sider>sider</u-sider>
      <u-container>
        <u-header>header</u-header>
        <u-content>content</u-content>
        <u-footer>footer</u-footer>
      </u-container>
    </u-container>
  </div>
</template>

<script>
  import Container from "../../../../src/container"
  import Sider from "../../../../src/sider"
  import Header from "../../../../src/header"
  import Content from "../../../../src/content"
  import Footer from "../../../../src/footer"

  export default {
    components: {
      'u-container': Container,
      'u-sider': Sider,
      'u-header': Header,
      'u-content': Content,
      'u-footer': Footer
    }
  }
</script>

<style lang="scss" scoped>
  .container {
    height: 200px;
    color: #fff;
  }
  .sider {
    width: 20%;
    background-color: #71c9ce;
  }
  .content{
    background-color: #cbf1f5;
    color:  #71c9ce;
  }
  .header, .footer{
    background-color: #56a7ac;
  }
</style>
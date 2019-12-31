<template>
  <div class="col" :class="[`col-${span}`, offset && `offset-${offset}`]" :style="{paddingLeft: gutter/2+'px', paddingRight: gutter/2+'px'}">
    <div style="border: 1px solid red; height: 100px;">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "HaiCol",
    data() {
      return {
        gutter: 0
      }
    },
    props: {
      span: {
        type: [Number, String]
      },
      offset: {
        type: [Number, String]
      }
    }
  }
</script>

<style lang="scss" scoped>
  .col {
    /*background: #b3cefb;*/
    width: 50%;
    /*border: 1px solid #666666;*/
    @for $n from 1 through 24 {
      &.col-#{$n} {
        width: ($n / 24) * 100%;
      }
      &.offset-#{$n} {
        margin-left: ($n / 24) * 100%;
      }
    }
  }
</style>
<template>
  <svg class="u-icon" aria-hidden="true">
    <use :xlink:href="`#icon-${name}`"/>
  </svg>
</template>

<script>
  import './svg.js'
  export default {
    props: ['name']
  };
</script>
<style lang="scss">
  .u-icon {
    width: 1em;
    height: 1em;
    vertical-align: -0.15rem;
    fill: currentColor;
    overflow: hidden;
  }
</style>
<template>
  <svg class="hai-icon" aria-hidden="true">
    <use :xlink:href="`#icon-${name}`"/>
  </svg>
</template>

<script>
  import './svg.js'
  export default {
    name: 'HaiIcon',
    props: ['name']
  };
</script>
<style lang="scss" scoped>
  .hai-icon {
    width: 1em;
    height: 1em;
    vertical-align: -0.15rem;
    fill: currentColor;
    overflow: hidden;
  }
</style>
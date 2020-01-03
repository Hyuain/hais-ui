<template>
  <div class="tabs-item" @click="xxx" :class="TabClass">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "HaiTabsItem",
    inject: ['eventBus'],
    data(){
      return {
        active: false
      }
    },
    props: {
      disabled: {
        type: Boolean,
        default: false
      },
      name: {
        type: [String, Number],
        required: true
      }
    },
    computed: {
      TabClass(){
        return {
          active: this.active
        }
      }
    },
    created() {
      this.eventBus.$on('update:selected', (name) => {
        this.active = name === this.name;
      })
    },
    methods:{
      xxx(){
        this.eventBus.$emit('update:selected', this.name)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .tabs-item{
    flex-shrink: 0;
    padding: 0 2em;
    cursor: pointer;
    height: 100%;
    display: flex;
    align-items: center;

    &.active{
      background-color: #999;
    }
  }

</style>
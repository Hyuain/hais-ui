<template>
  <div class="tabs-item" @click="onClick" :class="TabClass" :data-name="name">
    <span><slot></slot></span>
  </div>
</template>

<script>
  export default {
    name: "HaiTabsItem",
    inject: ['eventBus'],
    data() {
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
      TabClass() {
        return {
          active: this.active,
          disabled: this.disabled
        }
      }
    },
    created() {
      if (this.eventBus) {
        this.eventBus.$on('update:selected', (name) => {
          this.active = name === this.name;
        })
      }
    },
    methods: {
      onClick() {
        if (this.disabled) {
          return
        }
        if (this.eventBus) {
          this.eventBus.$emit('update:selected', this.name, this)
        }
        this.$emit('click')
      }
    }
  }
</script>

<style lang="scss" scoped>
  $active-color: blue;
  $disabled-color: gray;
  .tabs-item {
    flex-shrink: 0;
    padding: 0 1.5em;
    cursor: pointer;
    display: flex;
    align-items: center;
    height: 100%;
    &.active {
      color: $active-color;
      font-weight: bold;
    }
    &.disabled {
      color: $disabled-color;
      cursor: not-allowed;
    }
  }

</style>
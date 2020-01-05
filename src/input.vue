<template>
  <div class="wrapper" :class="{'error':error}">
    <input :value="value" :disabled="disabled" :readonly="readonly" type="text"
           @change="$emit('change', $event.target.value)"
           @input="$emit('input', $event.target.value)"
           @focus="$emit('focus', $event.target.value)"
           @blur="$emit('blur', $event.target.value)"
    >
    <template v-if="error">
      <Icon name="error" class="icon-error"></Icon>
      <span class="message-error">{{error}}</span>
    </template>
  </div>
</template>
<script>
  import Icon from './icon.vue'

  export default {
    components: {Icon},
    name: 'HaiInput',
    props: {
      value: {
        type: String
      },
      disabled: {
        type: Boolean,
        default: false,
      },
      readonly: {
        type: Boolean,
        default: false,
      },
      error: {
        type: String
      }
    }
  }
</script>
<style lang="scss" scoped>
  @import "var";
  .wrapper {
    font-size: $font-size;display: inline-flex;align-items: center;
    > :not(:last-child) {margin-right: .5em;}
    > input {
      height: $input-height;padding: 0 8px;font-size: inherit;color: $text-color;
      border: 1px solid $border-color;border-radius: $border-radius;
      &:hover {border-color: $border-color-hover;}
      &:focus {box-shadow: inset 0 1px 1px $box-shadow-color;outline: none;}
      &[disabled], &[readonly] {border-color: $color-disabled;color: $color-disabled;cursor: not-allowed;}
      &[readonly]:focus {box-shadow: inset 0 1px 1px $box-shadow-color-disabled;}
    }
    &.error {
      > input {
        border-color: $color-error; color: $color-error;
        &:focus {box-shadow: inset 0 1px 1px $box-shadow-color-error;}
      }
    }
    .icon-error {fill: $color-error;}
    .message-error {color: $color-error;}
  }
</style>
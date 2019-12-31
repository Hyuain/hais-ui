<template>
  <div class="col" :class="colClass" :style="colStyle">
    <slot></slot>
  </div>
</template>

<script>
  let validator = (value) => {
    let keys = Object.keys(value)
    let valid = true
    keys.forEach(key => {
      if (!['span', 'offset'].includes(key)) {
        valid = false
      }
    })
    return valid
  }
  export default {
    name: "HaiCol",
    data() {
      return {
        gutter: 0,
      }
    },
    computed: {
      colClass() {
        let {span, offset, pad, narrowPc, pc, widePc} = this
        return [
          span && `col-${span}`,
          offset && `offset-${offset}`,
          ...(pad ? [`col-pad-${pad.span}`, (pad.offset ? `offset-pad-${pad.offset}`:[])] : []),
          ...(narrowPc ? [`col-narrow-pc-${narrowPc.span}`, (narrowPc.offset ? `offset-narrow-pc-${narrowPc.offset}`:[])] : []),
          ...(pc ? [`col-pc-${pc.span}`, (pc.offset ? `offset-pc-${pc.offset}`:[])]:[]),
          ...(widePc ? [`col-wide-pc-${widePc.span}`, (widePc.offset ? `offset-wide-pc-${widePc.offset}`:[])] : [])
        ]
      },
      colStyle() {
        return {
          paddingLeft: this.gutter / 2 + 'px',
          paddingRight: this.gutter / 2 + 'px'
        }
      }
    },
    props: {
      span: {type: [Number, String]},
      offset: {type: [Number, String]},
      pad: {type: Object, validator},
      narrowPc: {type: Object, validator},
      pc: {type: Object, validator},
      widePc: {type: Object, validator}
    }
  }
</script>

<style lang="scss" scoped>
  .col {
    @for $n from 1 through 24 {
      &.col-#{$n} {
        width: ($n / 24) * 100%;
      }
      &.offset-#{$n} {
        margin-left: ($n / 24) * 100%;
      }
    }
    @media (min-width: 577px) {
      @for $n from 1 through 24 {
        &.col-pad-#{$n} {
          width: ($n / 24) * 100%;
        }
        &.offset-pad-#{$n} {
          margin-left: ($n / 24) * 100%;
        }
      }
    }
    @media (min-width: 769px) {
      @for $n from 1 through 24 {
        &.col-narrow-pc-#{$n} {
          width: ($n / 24) * 100%;
        }
        &.offset-narrow-pc-#{$n} {
          margin-left: ($n / 24) * 100%;
        }
      }
    }
    @media (min-width: 993px) {
      @for $n from 1 through 24 {
        &.col-pc-#{$n} {
          width: ($n / 24) * 100%;
        }
        &.offset-pc-#{$n} {
          margin-left: ($n / 24) * 100%;
        }
      }
    }
    @media (min-width: 1201px) {
      @for $n from 1 through 24 {
        &.col-wide-pc-#{$n} {
          width: ($n / 24) * 100%;
        }
        &.offset-wide-pc-#{$n} {
          margin-left: ($n / 24) * 100%;
        }
      }
    }
  }

</style>
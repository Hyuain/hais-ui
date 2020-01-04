<template>
  <div class="popover" ref="popover">
    <div ref="contentWrapper" class="content-wrapper" v-if="visible" :class="{[`position-${position}`]: true}">
      <slot name="content"></slot>
    </div>
    <span ref="triggerWrapper" class="trigger-wrapper" @click="onClickButton">
      <slot></slot>
    </span>
  </div>
</template>

<script>
  export default {
    name: "HaiPopover",
    data() {
      return {visible: false}
    },
    props: {
      position: {
        type: String,
        default: 'top',
        validator(value) {
          return ['top', 'bottom', 'left', 'right'].indexOf(value) >= 0
        }
      }
    },
    methods: {
      onClickButton(event) {
        if (this.$refs.triggerWrapper.contains(event.target)) {
          if (this.visible === true) {
            this.close()
          } else {
            this.open()
          }
        }
      },
      close() {
        this.visible = false
        document.removeEventListener('click', this.onClickDocument)
      },
      open() {
        this.visible = true
        this.$nextTick(() => {
          this.positioningContent()
          document.addEventListener('click', this.onClickDocument)
        })
      },
      positioningContent() {
        document.body.appendChild(this.$refs.contentWrapper)
        const {top, left, height, width} = this.$refs.triggerWrapper.getBoundingClientRect()
        const {height: contentHeight} = this.$refs.contentWrapper.getBoundingClientRect()
        if (this.position === 'top') {
          this.$refs.contentWrapper.style.left = left + window.scrollX + 'px'
          this.$refs.contentWrapper.style.top = top + window.scrollY + 'px'
        } else if (this.position === 'bottom') {
          this.$refs.contentWrapper.style.left = left + window.scrollX + 'px'
          this.$refs.contentWrapper.style.top = top + height + window.scrollY + 'px'
        } else if (this.position === 'left') {
          this.$refs.contentWrapper.style.left = left + window.scrollX + 'px'
          this.$refs.contentWrapper.style.top = top + (height - contentHeight) / 2 + window.scrollY + 'px'
        } else if (this.position === 'right') {
          this.$refs.contentWrapper.style.left = left + window.scrollX + width + 'px'
          this.$refs.contentWrapper.style.top = top + (height - contentHeight) / 2 + window.scrollY + 'px'
        }
      },
      onClickDocument(event) {
        const needClose =
          (!this.$refs.contentWrapper || !this.$refs.contentWrapper.contains(event.target)) &&
          (!this.$refs.popover.contains(event.target)) &&
          (this.$refs.popover !== event.target)
        if (needClose) {
          this.close()
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  $border-color: #333;
  $border-radius: 4px;
  .popover {
    display: inline-block;
    vertical-align: top;
    position: relative;
    .trigger-wrapper {
      display: inline-block;
    }
  }
  .content-wrapper {
    position: absolute;
    border: 1px solid $border-color;
    border-radius: $border-radius;
    max-width: 20em;
    padding: .5em 1em;
    word-break: break-all;
    filter: drop-shadow(0 1px 1px rgba(0, 0, 0, .5));
    background-color: white;
    &::before, &::after {
      content: '';
      display: block;
      border: 10px solid transparent;
      width: 0;
      height: 0;
      position: absolute;
    }
    &.position-top {
      transform: translateY(-100%);
      margin-top: -10px;
      &::before, &::after {
        left: 10px;
      }
      &::before {
        top: calc(100% + 1px);
        border-top-color: $border-color;
      }
      &::after {
        top: 100%;
        border-top-color: white;
      }
    }
    &.position-bottom {
      margin-top: 10px;
      &::before, &::after {
        left: 10px;
      }
      &::before {
        bottom: calc(100% + 1px);
        border-bottom-color: $border-color;
      }
      &::after {
        bottom: 100%;
        border-bottom-color: white;
      }
    }
    &.position-left {
      transform: translateX(-100%);
      margin-left: -10px;
      &::before, &::after {
        top: 50%;
        transform: translateY(-50%);
      }
      &::before {
        left: calc(100% + 1px);
        border-left-color: $border-color;
      }
      &::after {
        left: 100%;
        border-left-color: white;
      }
    }
    &.position-right {
      margin-left: 10px;
      &::before, &::after {
        top: 50%;
        transform: translateY(-50%);
      }
      &::before {
        right: calc(100% + 1px);
        border-right-color: $border-color;
      }
      &::after {
        right: 100%;
        border-right-color: white;
      }
    }
  }
</style>
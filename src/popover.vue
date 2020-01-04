<template>
  <div class="popover" ref="popover">
    <div ref="contentWrapper" class="content-wrapper" v-if="visible">
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
        setTimeout(() => {
          this.positioningContent()
          document.addEventListener('click', this.onClickDocument)
        })
      },
      positioningContent() {
        document.body.appendChild(this.$refs.contentWrapper)
        let {top, left} = this.$refs.triggerWrapper.getBoundingClientRect()
        this.$refs.contentWrapper.style.left = left + window.scrollX + 'px'
        this.$refs.contentWrapper.style.top = top + window.scrollY + 'px'
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
    transform: translateY(-100%);
    margin-top: -10px;
    max-width: 20em;
    padding: .5em 1em;
    word-break: break-all;
    filter: drop-shadow(0 1px 1px rgba(0, 0, 0, .5));
    background-color: white;
    &::before,&::after{
      content: '';
      display: block;
      border: 10px solid transparent;
      width: 0;
      height: 0;
      position: absolute;
      left: 10px;
    }
    &::before {
      top: calc(100% + 1px);
      border-top-color: $border-color;
    }
    &::after {
      border-top-color: white;
      top: 100%;
    }
  }
</style>
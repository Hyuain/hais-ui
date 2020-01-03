<template>
  <div class="popover" ref="popover">
    <div ref="contentWrapper" class="content-wrapper" v-if="visible">
      <slot name="content"></slot>
    </div>
    <span ref="triggerWrapper" @click="onClickButton">
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
      close(){
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
      onClickDocument(event){
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
  .popover {
    display: inline-block;
    vertical-align: top;
    position: relative;
  }
  .content-wrapper {
    position: absolute;
    border: 1px solid red;
    box-shadow: 0 0 3px rgba(0, 0, 0, .5);
    width: 100px;
    transform: translateY(-100%);
  }
</style>
<template>
  <div>
    <u-input v-model="message"></u-input>
    <p>{{message}}</p>
    <u-button @click="message+=1">点我</u-button>
  </div>
</template>

<script>

  import Input from "../../../../src/input"
  import Button from "../../../../src/button"

  export default {
    data(){
      return {
        message: '原始数据'
      }
    },
    components: {
      'u-input': Input,
      'u-button': Button
    }
  }

</script>
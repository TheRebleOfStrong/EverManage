<template>
  <div style="font-size: 80px;font-weight:800;position:absolute;top:48%;left: 50%;transform: translate(-50%,-50%);">
    <div>Not Found</div>
    <div style='text-align: center;margin-top: -50px;'><a-button size='large' type='primary' @click='skipPage'>返回首页</a-button></div>
  </div>
</template>

<script>
  export default {
    methods:{
      skipPage() {
        this.$router.replace('/');
      }
    }
  }
</script>

<style>
</style>

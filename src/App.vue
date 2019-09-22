<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'app',
  methods:{
    
  },
  created() {
    

  },
  mounted() {
    

  },
  watch:{
    '$route'(to,from) {
      
    }
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
  border: none;
}
html,body{
  width:100%;
  height: 100%;
  background-color: #f0f2f5;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width:100%;
  height: 100%;
  background-color: #f0f2f5;
}
ul,ol,li,dl,dt,dd{
  list-style: none;
}
</style>

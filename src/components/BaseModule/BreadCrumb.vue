<!-- 面包屑导航 -->
<template>
  <div>
    <a-breadcrumb style='margin-bottom:16px;' v-if = 'nav[nav.length - 1].path !== "/admin/index"'>
      <a-breadcrumb-item v-for='(item,index) in nav' :key='item.path'>
        <template v-if='index < (nav.length - 1)'>
          <a @click='skipPage(item.path)'>{{item.meta.title}}</a>
        </template>
        <template v-else>{{item.meta.title}}</template>
      </a-breadcrumb-item>
    </a-breadcrumb>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menu:this.$store.state.menu,
      selectedKeys:[],
      nav:[],
    }
  },
  methods:{
    skipPage(path) {
      this.$router.push({
        path
      });
    }
  },
  created() {
    this.nav = this.$router.history.current.matched;
  },
  watch:{
    '$route'() {
      this.nav = this.$router.history.current.matched;
    }
  }
}
</script>

<style scoped="scoped">

</style>

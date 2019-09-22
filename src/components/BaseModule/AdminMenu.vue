<template>
  <a-menu theme='dark' mode='inline' :inlineCollapsed='true' v-model='selectedKeys' :openKeys='openKeys' @openChange='openChange'>
    <template v-for='item in menu'>
      <a-sub-menu :key='item.key' v-if='Array.isArray(item.child) && item.child.length > 0'>
        <span slot='title'><a-icon :type='item.icon' v-if='item.icon'></a-icon><span>{{item.name}}</span></span>
        <a-menu-item v-for='item in item.child' :key='item.key'>
          <a-icon :type='item.icon' v-if='item.icon'></a-icon>
          <span>{{item.name}}</span>
        </a-menu-item>
      </a-sub-menu>
      <a-menu-item :key='item.key' v-else>
        <a-icon :type='item.icon' v-if='item.icon'></a-icon>
        <span>{{item.name}}</span>
      </a-menu-item>
    </template>
  </a-menu>
</template>

<script>
export default {
  data() {
    return {
      menu:this.$store.state.menu,
      selectedKeys:[],
      openKeys:[],
    }
  },
  methods:{
    openChange(openKeys) {
      const latestOpenKey = openKeys.find(key => this.openKeys.indexOf(key) === -1)
      this.openKeys = latestOpenKey ? [latestOpenKey] : [];
    }
  },
  mounted() {
    //获取当前路由
    const path = this.$route.fullPath;
    this.selectedKeys = [path];
    this.menu.forEach(item => {
      Array.isArray(item.child) && item.child.forEach(sub => {
        if(sub.key === path){
          this.openKeys = [item.key];
        };
      });
    });
  },
  watch:{
    selectedKeys(key) {
     const path = key[0];
     this.$router.push(path);
    },
    '$route'(to) {
      this.selectedKeys = [to.fullPath];
    },
  }
}
</script>

<style scoped="scoped">
.text{
  white-space: nowrap;
}
</style>

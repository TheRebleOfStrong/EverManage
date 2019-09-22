<!-- 分页组件 -->
<template>
  <el-pagination
    background
    layout='total, prev, pager, next, sizes, jumper'
    :current-page='page.pageNum'
    :page-size='page.pageSize'
    :page-sizes='pageList'
    :total='total'
    @size-change='sizeChange'
    @current-change='pageChange'
    @prev-click='pageChange'
    @next-click='pageChange'
  />
</template>

<script>
export default {
  props:{
    pageNum:{
      type:Number,
      default:1
    },
    pageSize:{
      type:Number,
      default:10
    },
    total:{
      type:Number,
      default:0
    }
  },
  data() {
    return {
      pageList:[5,10,20],
      page:{
        pageNum:1,
        pageSize:10,
      }
    }
  },
  methods:{
    pageChange(pageNum) {
      this.page.pageNum = pageNum;
      this.$emit('change',this.page);
    },
    sizeChange(pageSize) {
      this.page.pageNum = 1;
      this.page.pageSize = pageSize;
      this.$emit('change',this.page);
    },
  },
  mounted() {
    if(this.pageList.indexOf(this.pageSize) < 0){
      this.pageList.push(this.pageSize);
      this.pageList = this.pageList.sort((a,b) => a - b > 0 ? 1 : -1);
    };
    this.page = {
      pageNum:this.pageNum,
      pageSize:this.pageSize,
    };
  },
};
</script>

<style>
</style>
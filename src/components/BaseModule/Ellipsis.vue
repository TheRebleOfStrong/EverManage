<template>
  <span>
    <template v-if='tooltip && showTooltip'>
      <el-tooltip :content="content" style="font-size: 14px;max-width:300px">
        <span class="text">{{text}}</span>
      </el-tooltip>
    </template>
    <template v-else>
      <span class="text">{{text}}</span>
    </template>
  </span>
</template>

<script>
export default {
  props:{
    length:{
      type:Number,
      default:100,
    },
    content:{
      type:String,
      default:'',
    },
    tooltip:{
      type:Boolean,
      default:true,
    }
  },
  data() {
    return {
      text:'',
      showTooltip:true,
    }
  },
  mounted() {
    const str = this.content.split('');
    this.text = '';
    if(str.length > this.length){
      for(let i = 0; i< this.length;i++){
        this.text += str[i];
      };
      this.text += '...';
    }else{
      this.text = this.content;
      this.showTooltip = false;
    };
  }
}
</script>

<style scoped="scoped">
.text{
  white-space: nowrap;
}
</style>

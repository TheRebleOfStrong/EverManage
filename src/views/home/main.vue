<template>
  <div>
    <a-carousel arrows>
      <div
        slot="prevArrow" slot-scope="props"
        class="custom-slick-arrow"
        style="left: 10px;zIndex: 1"
      >
        <a-icon type="left-circle" />
      </div>
      <div
        slot="nextArrow" slot-scope="props"
        class="custom-slick-arrow"
        style="right: 10px"
      >
        <a-icon type="right-circle" />
      </div>
      <div><h3>1</h3></div>
      <div><h3>2</h3></div>
      <div><h3>3</h3></div>
      <div><h3>4</h3></div>
    </a-carousel>
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      
    }
  },
  methods:{
    onChange() {
      
    }
  },
  components:{
    
  },
  created() {
    

  }
}
</script>

<style scoped="scoped">
/* For demo */
.ant-carousel >>> .slick-slide {
  text-align: center;
  height:600px;
  line-height: 600px;
  background: #364d79;
  overflow: hidden;
}

.ant-carousel >>> .custom-slick-arrow {
  width:50px;
  height:50px;
  font-size:50px;
  color: #fff;
  background-color: rgba(31,45,61,.11);
  opacity: 0.3;
}
.ant-carousel >>> .custom-slick-arrow:before {
  display: none;
}
.ant-carousel >>> .custom-slick-arrow:hover {
  opacity: 0.5;
}

.ant-carousel >>> .slick-slide  h3 {
  color: #fff;
}
</style>

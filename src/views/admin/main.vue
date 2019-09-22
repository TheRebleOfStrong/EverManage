<template>
  <div>
    <a-row :gutter='24'>
      <a-col :xl='6' :lg='12' :md='24' style='margin-bottom:24px;' v-for='item in 4' :key='item'>
        <a-card :bordered="false" style='height:180px;'>12312</a-card>
      </a-col>
    </a-row>
    <a-row :gutter='24'>
      <a-col :xl='12' :lg='24' style='margin-bottom:24px;' v-for='item in 2' :key='item'>
        <a-card :bordered="false" style='height:180px;'>12312</a-card>
      </a-col>
    </a-row>
    <a-row :gutter='24'>
      <a-col :xl='6' :lg='12' style='margin-bottom:24px;' v-for='item in 2' :key='item'>
        <a-card :bordered="false" style='height:180px;'>12312</a-card>
      </a-col>
      <a-col :xl='12' :lg='24' style='margin-bottom:24px;'>
        <a-card :bordered="false" style='height:180px;'>12312</a-card>
      </a-col>
    </a-row>
    
    <a-row :gutter='24'>
      <a-col :span='6' style='margin-bottom:24px;'>
        <a-card :bordered="false" style='height:180px;'>12312</a-card>
      </a-col>
      <a-col :span='12' style='margin-bottom:24px;'>
        <a-card :bordered="false" style='height:180px;'>12312</a-card>
      </a-col>
      <a-col :span='6' style='margin-bottom:24px;'>
        <a-card :bordered="false" style='height:180px;'>12312</a-card>
      </a-col>
    </a-row>
    <a-row :gutter='24' style='margin-bottom:-48px'>
      <a-col :span='6' style='margin-bottom:24px;'>
        <a-card :bordered="false" style='height:180px;'>12312</a-card>
      </a-col>
      <a-col :span='18' style='margin-bottom:24px;'>
        <a-card :bordered="false" style='height:180px;'>12312</a-card>
      </a-col>
    </a-row>
    
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>

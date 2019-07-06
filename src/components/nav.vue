<template>
<div class="main">
  <el-row>
  <el-col :span="12"><div class="grid-content p">  <h1>My vue app</h1></div></el-col>
  <el-col :span="12"><div class="grid-content  bg-purple-light space">
    | <router-link to="/" class="color">Home</router-link> |
    <router-link to="/about" class="color">About</router-link> |
    <router-link to="/contact" class="color">Contact</router-link> |
    <router-link to="/testimonials" class="color">Testimonial</router-link> |</div></el-col>
</el-row>

</div>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
.main{
  background-color: #000000;
  height:50%;

}
.p{
  color:#F56C6C;
  font-size: .7rem;
}
.space{
  margin-top:18px;

}
.color:first-child{
  border-left: 2px solid red;
}
.color{
padding:18px;
  color: #ffffff;
border-right: 2px solid red;
text-decoration: none;
font-size:14px;

}
.color:hover{
  color: #409EFF;
  background-color: #909399;
}
</style>

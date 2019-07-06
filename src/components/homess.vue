<template>
  <div>
    <h1>{{header}}</h1>
    <div class="main">
      <img :src="img" alt="">
      <div class="box">
  <p>{{para}}</p>
      </div><br>
  <div class="">
    <p>{{para}}</p>
  </div>
    </div>



  </div>
</template>

<script>
export default {
  data(){
return{
    header:'what to do',
    img:'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
    para:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur',
  }
  }
}
</script>

<style lang="css" scoped>
h1{
  font-weight: bolder;
  font-size: 1.5rem;
}
img{
  float:left;
  width:500px;
}
.main{
  margin:0 250px;
}
</style>

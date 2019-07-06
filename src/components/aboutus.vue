<template>
  <div class="main">
    <div class="box">
      <div class="col">
  <img :src='img' alt="asd">
      </div>


    <div class="col2">
      <p>{{para}}</p>

    </div>
    </div>
    <div class="box">
    <div class="col2">
<p>{{para}}</p>
    </div>
    <div class="col">
<img :src='img' alt="asd">
    </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      img:'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
      para:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur',

    }
  }
}
</script>

<style lang="css" scoped>
.box{
  display: flex;
}
img{
  width:550px;
}
.main{
  margin:0 35px;
}
</style>

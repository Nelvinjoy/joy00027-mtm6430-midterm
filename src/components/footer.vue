<template>
  <div>

    <div id="contact">

      <div>
          <h2>{{ copyright }}</h2>
          </div>
      </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      copyright:'Copyrighted © By Nelvin',

    };
  }
};
</script>
<style>
#contact {
  display: flex;
  width: 100%;
  margin: 0 auto;
}
h2{
  float:right;
  margin: 0 12px 0 12px;
}
#contact div {
  list-style-type: none;
  text-align: left;
  width: 100%;
  background-color: #000000;
  color:#ffffff;
  padding:15px;
}

</style>

<template>
  <div>
    <h1>{{title}}</h1>
    <div>
        <contacts/>
    </div>

  </div>

</template>

<script>
import contacts from "@/components/contactus.vue";
export default {
  data: function(){
    return{
      title:'contact'
    }
  },

  components:{
    contacts
  },
};
</script>

<style lang="css" scoped>
h1{
  position: relative;
  left:-25%;
}
</style>

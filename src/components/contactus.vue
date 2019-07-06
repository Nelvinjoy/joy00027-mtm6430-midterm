<template>
  <div class="main">


<div class="row">
  <div class="col box">
    <h2>{{second}}</h2>
    <br>
  <strong>  <pre>{{Address.AddressLine1}}-{{Address.AddressLine2}}
    {{Address.City}}, {{Address.State}}
  {{Address.PostalCode}}
{{Address.phoneNumber}}</pre></strong>
  </div>
  <div class="col2 box">
<h2>{{hours}}</h2>
    <ul>
      <li v-for="(items,index) in time" :key="index"><strong>{{index}}: {{items}}</strong></li>
    </ul>
  </div>
</div>
  </div>
</template>

<script>
export default {
  data(){
return{
    title: 'Contact',
    second: 'Address',
    Address: {
      AddressLine1: "1435",
      AddressLine2: "Woodroffe Avenue,",
      City: "Ottawa",
      State: "Ontario",
      PostalCode: "K2G 1V8",
      phoneNumber: '613-7274723'
    },
    hours: 'Hours of operation',
    time:{
      Monday:'8am-6pm',
    Tuesday:'8am-6pm',
    Wednesday:'8am-6pm',
    Thursday:'8am-6pm',
    Friday:'8am-6pm',
    Saturday:'8am-6pm',
    Sunday:'8am-6pm'
  }



  }
  }
}
</script>

<style lang="css" scoped>
h1{
float: left;
}

.row{
  width:75%;
  align-content: center;
}
h2{
  text-decoration: underline;
}
pre{
  font-size: 20px;
}
.col{
  float: left;
  margin-left: 15rem;
}
.col2{
  float: right;
}
li{
  list-style: none;
}
</style>

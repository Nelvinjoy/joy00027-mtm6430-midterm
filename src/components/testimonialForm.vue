<template>
  <div class="testimonials">

    <!-- loop  -->
      <el-row :gutter="12" >
        <el-col :span="12" v-for="(lists,index) in comments" :key="index">
          <el-card shadow="always">
              <p><strong>{{lists.Name}} - {{lists.Position}}</strong></p>
              <p>{{lists.Comment}}</p>
          </el-card>
        </el-col>
      </el-row>

    <!-- the form start from here -->
    <div class="userForm">
      <el-form :model="form" :rules="rules" ref="form">
        <h3>Testimonial</h3>
        <el-row>
          <!-- First Name -->
          <el-form-item prop="yourName">
            <el-input size="medium" placeholder="Your Name" id="userName" v-model="form.yourName"></el-input>
          </el-form-item>
<!-- position Title -->
          <el-form-item prop="position">
            <el-input size="medium" placeholder="Position Title" id="userPosition" v-model="form.position"></el-input>
          </el-form-item>
                    <!-- Description -->
          <el-form-item prop="desc">
            <el-input  type="textarea" placeholder="Your Comments" id="userDesc" v-model="form.desc"></el-input>
          </el-form-item>
        </el-row>
      </el-form>
      <!-- Submit button -->
      <el-button type="success"plain @click="submitForm('form')">Submit</el-button>

    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {

  data () {
    return {

        form: {
          yourName: null,
          position: null,
          desc: null,
        },

        comments:[],

        // Rules for the form:--------
                rules: {
          yourName:[
            {required: true, message: 'Please input your Name', trigger: 'blur'},
            { min:0, max: 50, message: 'Name cannot be more than 50 words', trigger: ['blur', 'change'] }
          ],
          position:[
            { required: true, message: 'Please input the position', trigger: 'blur' },
            { min:0, max: 50, message: 'Position title cannot be more than 50 words', trigger: ['blur', 'change'] }
          ],
          desc:[
            { required: true, message: 'Please input the comment', trigger: 'blur' },
            { min:0, max: 120, message: 'Comment cannot be more than 120 words', trigger: ['blur', 'change'] }
          ],
        }
    };
  },

  methods: {


    submitForm(form) {
      this.$refs[form].validate((valid) => {
        if (valid) {

          let obj = {
             'Name': this.form.yourName,
             'Position': this.form.position,
             'Comment': this.form.desc,
          };
          // import axios to make api calls
          axios
          .post("https://joy00027-midterm.firebaseio.com/data.json", JSON.stringify(obj))
          .then(response => {
              console.log(response);
              console.log("Your data was saved status:" + response.status)

              // here we are making a GET request using AXIOS to get the data
              axios
                .get("https://joy00027-midterm.firebaseio.com/data.json")
                .then(response => {
                  // console.log(response);
                  console.log(response.data);

                  if (response.data) {
                    this.comments = response.data;
                  }
                })
                .catch(error => {
                  console.log("There was an error in getting data: " + error.response);
                });
          })

          // error
          .catch(error => {
              console.log(error);
          })

          // reset the form
          this.$refs[form].resetFields();
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
  },

// life cycle hook which will run when the instance is created
  created() {

  // here we are making a GET request using AXIOS to get the data
  axios
    .get("https://joy00027-midterm.firebaseio.com/data.json")
    .then(response => {
      // console.log(response);
       console.log(response.data);
      // Checking
      if (response.data) {
        this.comments = response.data;
}
    })
    .catch(error => {
      console.log("There was an error in getting data: " + error.response);
    });
  }
}
</script>

<style scoped>
.testimonials{
  margin: 0 250px;
}
  .userForm{
    border: 2px dashed black;
    padding: 2rem;
    border-radius: 10px;
  }
  .el-row{
    margin-bottom: 1.5rem;
  }

  .el-card {
    margin-top: 1.8rem;
    background-color: #D4AF37;
    color:white;
    border-radius: 15px;
  }
  .el-card:hover{
color: #000000;
background-color:#ffffff;
border:1px solid #D4Af37;
  }
</style>

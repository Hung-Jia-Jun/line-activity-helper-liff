<template> 
  <div class="container">
    <div class="row" style="justify-content: center; margin-bottom: 15px;">
      <div class="col" >
        <h1 style="color:#000;">{{activity.name}}</h1>
        <p>{{ $route.params.id }}</p>
        <router-link style="color: #000;" to="/">Go to Home</router-link>
        <router-link style="color: #000;" to="/activity">Go to activity</router-link>
        <!-- <router-view></router-view> -->

        <input v-model="activity.name" class="form-control" placeholder="活動名稱">
        <!-- <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div> -->
      </div>
    </div>
    <div class="row">
      <div v-for="item in activity.items">
        <div class="row">
          <div class="col-3">
            <input v-model="item.name" style="margin: 10px;" type="text" class="form-control" id="activity" placeholder="名稱"> 
          </div> 
          <div class="col">
            <input v-model="item.content" style="margin: 10px;" type="text" class="form-control" id="activity" placeholder="內容"> 
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-2">
      </div>
      <div class="col">
        <button style="margin:5px;" v-on:click="add_item" type="button" class="btn btn-light Btn">+</button>
        <button style="margin:5px;" v-on:click="remove_item" type="button" class="btn btn-light Btn">-</button>
      </div>
      <div class="col-2">
      </div>
    </div>
    <div class="row" v-for="form in activity.forms">
      <hr style="margin-top: 10px; color: #000; height: 2px; width: 100%;">
      <div class="row" style="justify-content: center;">
        <div class="col-5" style="margin-bottom: 10px;">
          <input style="margin-top: 100px;" v-model="form.name" type="text" class="form-control" id="activity" placeholder="表單名稱"> 
        </div>
      </div>
      <div class="row">
        <div class="col">
          <h6 style="color: #000;">姓名</h6>
        </div>
        <div class="col" v-for="field in form.fields">
          <h6 style="color: #000;">{{field.name}}</h6>
        </div>
      </div>
      <div class="row">
        <hr style="margin-top: 10px; color: #000; height: 2px; width: 100%;">
        <div class="col-3" style="justify-items: left;">
          <input style="margin:5px;" disabled type="text" class="form-control" id="activity" placeholder="姓名"> 
        </div> 
        <div class="col">
          <div class="col" v-for="field in form.fields">
            <input style="margin:5px;" v-model="field.name" type="text" class="form-control" id="activity" placeholder="內容">
          </div>
          <div class="col">
            <button style="margin:5px;" v-if="showAddField(form)" v-on:click="add_field(form)" type="button" class="btn btn-light Btn">+</button>
            <button style="margin:5px;" v-on:click="remove_field(form)" type="button" class="btn btn-light Btn">-</button>
          </div> 
        </div> 
      </div>
    </div>
    <div class="row" style="justify-content: center;">
      <hr style="margin-top: 10px; color: #000; height: 2px; width: 100%;">
      <div class="col-3">
      </div> 
      <div class="col">
        <button style="margin:5px;" v-on:click="add_form(form)" type="button" class="btn btn-light Btn">+</button>
        <button v-if="showRemoveFormBtn" style="margin:5px;" v-on:click="remove_form" type="button" class="btn btn-light Btn">-</button>
      </div> 
      <div class="col">
        <button style="margin:5px;" v-on:click="publish" type="button" class="btn btn-primary Btn">發佈活動</button>
      </div> 
    </div>
  </div>
</template>
<script>
  export default {
    data() {
        return {
          activity:{
            name:"",
            //活動內容
            items:[],
            forms:[
              {
                name : "",
                fields :[]
              }
            ],
          }
        }
      },
      props: {
        _activity: {
          type: String,
        },
      },
      computed:{
        showRemoveFormBtn()
        {
          if (this.activity.forms.length>1){
            return true
          }
          else
          {
            return false
          }
        },
        activityData() {
          return JSON.parse(this._activity);
        },
      },
      watch:{
        activityName:function(newValue,oldValue){
          console.log(newValue)
        }
      },
      created() {
        this.activity = JSON.parse(this.$route.params._activity)
      },
      methods: {

        //增加一個表單
        add_form(){
          this.activity.forms.push(
            {
              name : "",
              fields :[]
            })
        },
        remove_form(form) {
            if (this.activity.forms.length>1)
            {
              this.activity.forms.pop();
            }
        },
        //一個表單欄位最多限定四個
        showAddField(form) {
          return form.fields.length<=2;
        },
        add_field(form) {
            form.fields.push( { name: "" } );
        },
        remove_field(form) {
          if (form.fields.length>0)
          {
            form.fields.pop();
          }
        },
        add_item(){
          this.activity.items.push( { name: "", content:"" } );
        },
        remove_item() {
          if (this.activity.items.length>0)
          {
            this.activity.items.pop();
          }
        },
        //發佈活動
        publish(){
        }
      },
    }
</script>

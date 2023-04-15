<template> 
  <div class="container">
    <div class="row" style="justify-content: center; margin-bottom: 15px;">
      <div class="col" >
        <h1 style="color:#000;">報名小幫手 - 建立活動</h1>
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
      <div>
        <h5 for="description" style="color: #000;">活動描述:</h5>
        <textarea class="form-control" id="description" rows="5" v-model="activity.description"></textarea>
      </div>
      <div class="row">
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
            <input style="margin:5px;" v-model="field.name" type="text" class="form-control" id="activity" placeholder="欄位">
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
        <button v-if="showRemoveFormBtn" style="margin:5px;" v-on:click="remove_form(add_form)" type="button" class="btn btn-light Btn">-</button>
      </div> 
      <div class="col">
        <button style="margin:5px;" v-on:click="submit" type="button" class="btn btn-primary Btn">建立活動</button>
      </div> 
    </div>
  </div>
</template>
<script>
  import CreateActivity from './scripts/CreateActivity.js'

  export default {
    mixins: [CreateActivity]
  }
</script>

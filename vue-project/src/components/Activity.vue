<template> 
  <div class="container">
    <div class="row" style="justify-content: center; margin-bottom: 15px;">
      <div class="col" >
        <h1 style="color:#000;">{{activity.name}}</h1>
        <p>{{ $route.params.id }}</p>
      </div>
    </div>
    <div class="row">
      <div v-for="item in activity.items">
        <div class="row">
          <div class="col-3">
            <h4 style="color:#000;">{{item.name}}</h4>
          </div> 
          <div class="col">
            <h4 style="color:#000;">{{item.content}}</h4>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-2">
      </div>
      <div class="col-2">
      </div>
    </div>
    <div class="row" v-for="form in activity.forms">
      <hr style="margin-top: 10px; color: #000; height: 2px; width: 100%;">
      <h5 style="color:#000;">{{activity.description}}</h5>
      <div class="row" style="justify-content: center;">
        <div class="col" style="margin-top: 40px; margin-bottom: 10px;">
          <h3 style="color:#000;">{{form.name}}</h3>
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
        <div class="col">
          <div class="row">
            <div class="col-3" style="justify-items: left;">
              <input type="text" class="form-control" id="activity" placeholder="姓名"> 
            </div> 
            <div class="col" v-for="field in form.fields">
              <div class="form-group">
                <input class="form-control" type="text" id="activity" :placeholder="field.name">
              </div>
            </div>
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
        <button style="margin:5px;" v-on:click="publish" type="button" class="btn btn-primary Btn">完成報名</button>
      </div> 
    </div>
  </div>
</template>
<script>
   import Activity from './scripts/Activity.js'

  export default {
    mixins: [Activity]
  }

</script>

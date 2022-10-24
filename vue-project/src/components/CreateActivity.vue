<template> 
  <div class="container">
    <div class="row" style="justify-content: center; margin-bottom: 15px;">
      <div class="col" >
        <h1 style="color:#000;">報名小幫手 - 建立活動</h1>
        <input type="text" class="form-control" id="acitivity" placeholder="活動名稱">
        <!-- <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div> -->
      </div>
    </div>
    <div class="row">
      <div v-for="item in items">
        <div class="row">
          <div class="col-3">
            <input type="text" class="form-control" id="acitivity" placeholder="名稱"> 
          </div> 
          <div class="col">
            <input type="text" class="form-control" id="acitivity" placeholder="內容"> 
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-2">
      </div>
      <div class="col">
        <button v-on:click="add_item" type="button" class="btn btn-light Btn">+</button>
        <button v-on:click="remove_item" type="button" class="btn btn-light Btn">-</button>
      </div>
      <div class="col-2">
      </div>
      <hr style="margin-top: 10px; color: #000; height: 2px; width: 100%;">
    </div>
    <div class="row">
      <div class="row" style="justify-content: center;">
        <div class="col-5" style="margin-bottom: 10px;">
          <input type="text" class="form-control" id="acitivity" placeholder="表單名稱"> 
        </div>
      </div>
      <div class="row">
        <div class="col">
          <h6 style="color: #000;">姓名</h6>
        </div>
        <div class="col" v-for="field in fields">
          <h6 style="color: #000;">{{field.name}}</h6>
        </div>
      </div>
      <div class="row">
        <div class="col-3" style="justify-items: left;">
          <input disabled type="text" class="form-control" id="acitivity" placeholder="姓名"> 
        </div> 
        <div class="col">
          <div class="col" v-for="field in fields">
            <input v-model="field.name" type="text" class="form-control" id="acitivity" style="margin-bottom: 4px;" :placeholder="[[field.name]]">
          </div>
          <div class="col">
            <button v-if="showAddField" v-on:click="add_field" type="button" class="btn btn-light Btn">+</button>
            <button v-on:click="remove_field" type="button" class="btn btn-light Btn">-</button>
          </div> 
        </div> 
      </div>
    </div>
    <hr style="margin-top: 10px; color: #000; height: 2px; width: 100%;">
    <div class="row" style="justify-content: center;">
      <div class="col-3">
      </div> 
      <div class="col">
        <button v-if="showAddField" v-on:click="add_field" type="button" class="btn btn-light Btn">+</button>
        <button v-on:click="remove_field" type="button" class="btn btn-light Btn">-</button>
      </div> 
      <div class="col-3">
      </div> 
    </div>
  </div>
</template>
<script>
  
  export default {
    data() {
        return {
          itemLen: 1,
          fieldLen: 0,
          items:[],
          fields:[],
        }
      },
      computed:{
        showAddField() {
          return this.fields.length<=2;
        },
      },
      watch:{
      },
      methods: {
        add_field() {
            this.fieldLen++
            this.fields.push( { id: this.fieldLen, name: "內容"+this.fieldLen });
        },
        remove_field() {
          if (this.fields.length>0)
          {
            this.fieldLen--
            this.fields.pop();
          }
        },
        add_item(){
          this.items.push(this.itemLen);
        },
        remove_item() {
          if (this.items.length>0)
          {
            this.items.pop();
          }
        },
      },
      // `mounted` is a lifecycle hook which we will explain later
      mounted() {
        // `this` refers to the component instance.

        // data can be mutated as well
        // this.count = 3
        // this.increment()
      }
    }
</script>

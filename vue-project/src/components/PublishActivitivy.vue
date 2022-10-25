<template> 
  <div class="container">
	<div class="row" style="justify-content: center; margin-bottom: 15px;">
	  <div class="col" >
		<h1 style="color:#000;">{{activity.name}}</h1>
	  </div>
	</div>
	<div class="row">
	  <div v-for="item in activity.items">
		<div class="row">
		  <div class="col-3">
			<h4 style="color:#000">{{item.name}}</h4> 
		  </div> 
		  <div class="col">
			<h4 style="color:#000">{{item.content}}</h4> 
		  </div>
		</div>
	  </div>
	</div>
	<div class="row">
	  <div class="col-2">
	  </div>
	  <div class="col">
	  </div>
	  <div class="col-2">
	  </div>
	</div>
	<div class="row" v-for="form in activity.forms">
	  <hr style="margin-bottom: 50px; color: #000; height: 2px; width: 100%;">
	  <div class="row" style="justify-content: center;">
		<div class="col" style="margin-bottom: 10px;">
		  <h3 style="color: #000;">{{form.name}}</h3>
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
	</div>
	<div class="row">
		<hr style="margin-bottom:15px; color: #000; height: 2px; width: 100%;">
		<div class="col-2">
			<!-- <h6 style="color: #000;">{{ user["displayName"] }}</h6> -->
			<!-- <img  style="border-radius: 50%;" :src="user['pictureUrl']" width="50" height="50"> -->
			<div class="col-2">
				<img style="border-radius: 50%;" src="https://profile.line-scdn.net/0hJRKzV_BjFX1mAwAFL1RrAhZTFhdFckxvGjINSFtUGBgJNlcjSWUNT1UHGEldNAB4S2RbTlcLTBhqEGIbeFXpSWEzS0pfNVYsTmBckg" width="50" height="50">
				<h6 style="color: #000;">Jason</h6>
			</div>
		</div>

	</div>
	<div class="row">
		<div class="col">
			<button style="justify-items: center; margin:5px;" v-on:click="publish" type="button" class="btn btn-primary Btn">發佈活動</button>
		</div> 
	</div>
  </div>
</template>
<script>
var liffID = "1657565478-OlzWzEJ2";
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
		  	},
			user:{

			}
		}
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
		this.activity = JSON.parse(this.$route.query.q)
		// liff.init({
		//   liffId: liffID
		// }).then(()=>this.login_line())
		// .catch(function(error) {
		// 	console.log(error);
		// });
	  },
	methods: {
		login_line(){
			if (!liff.isLoggedIn()) {
				console.log("你還沒登入Line哦！");
				liff.login();
			} else {
				console.log("你已經登入Line哦！");
				liff.getProfile()
				.then((profile) =>this.user_data(profile))
				.catch((err) => {
					console.log('error', err);
				});
			}
			console.log('LIFF init');
			// 引用 LIFF SDK 的頁面，頁面中的 lang 值
			console.log("getLanguage: " + liff.getLanguage());
			
			// LIFF SDK 的版本
			console.log("getVersion: " + liff.getVersion());
			
			// 回傳是否由 LINE App 存取
			console.log("isInClient: " + liff.isInClient());
			
			// 使用者是否登入 LINE 帳號
			console.log("isLoggedIn: " + liff.isLoggedIn());
			
			// 回傳使用者作業系統：ios、android、web
			console.log("getOS: " + liff.getOS());
			var user = liff.getDecodedIDToken();
			
			// 使用者的 LINE 版本
			console.log("getLineVersion: " + liff.getLineVersion());
			// liff.shareTargetPicker([
			// 	{
			// 	'type': 'text',
			// 	'text': 'Hello, World!'
			// 	}
			// 	])
		},
		user_data(profile){
			this.user = profile
		},
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

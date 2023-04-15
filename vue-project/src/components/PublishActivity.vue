<template> 
  <div class="container">
	<div class="row" style="justify-content: center; margin-bottom: 15px;">
		<div class="col">
		  <router-link to="/">
			<button class="btn btn-secondary" @click="goBack">
				<i class="fa fa-arrow-left"></i> 返回
			</button>
		  </router-link>
		</div>
	</div>
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
		<hr style="margin-bottom: 10px; color: #000; height: 2px; width: 100%;">
		<h5 style="margin-bottom: 30px; color: #000;">{{activity.description}}</h5>
	  <div class="row">
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
import PublishActivity from './scripts/PublishActivity.js'
export default {
	mixins: [PublishActivity]
}

</script>


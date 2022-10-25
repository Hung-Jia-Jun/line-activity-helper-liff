var liffID = "1657565478-OlzWzEJ2";

liff.init({
	liffId: liffID
}).then(function() {
	
	if (!liff.isLoggedIn()) {
			console.log("你還沒登入Line哦！");
			liff.login();
	} else {
			console.log("你已經登入Line哦！");
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
	document.getElementById("showInfo").innerHTML='LIFF init'+
	"  getLanguage: " + liff.getLanguage()+ 
	"  getVersion: " + liff.getVersion()+ 
	"  isInClient: " + liff.isInClient()+ 
	"  isLoggedIn: " + liff.isLoggedIn()+ 
	"  getOS: " + liff.getOS()+ 
	"  user: " + user+ 
	"  getLineVersion: " + liff.getLineVersion()

	// liff.shareTargetPicker([
	// 	{
	// 	  'type': 'text',
	// 	  'text': 'Hello, World!'
	// 	}
	//   ])
}).catch(function(error) {
	console.log(error);
});

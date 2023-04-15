var liffID = "1657565478-OlzWzEJ2";
import axios from 'axios';
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
        goBack() {
            this.$router.push({
                name: "CreateActivity",
                query: { q: JSON.stringify(this.activity) },
              });
        },
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
        //使用post方式傳送資料到後端
        publish() {
            // 在这里编写发布活动的逻辑
            // 可以使用 this.activity 访问活动数据，
            // 使用 this.user 访问当前登录用户的信息
            
            // 例如，向服务器发送 POST 请求，将活动数据保存到数据库中
            axios.post('/api/activities', {
              name: this.activity.name,
              items: this.activity.items,
              forms: this.activity.forms,
              user: this.user
            })
            .then(response => {
              // 发布成功后的逻辑
              console.log(response.data);
              alert('发布成功！');
            })
            .catch(error => {
              // 发布失败后的逻辑
              console.log(error);
              alert('发布失败，请重试！');
            });
          }
    },
}
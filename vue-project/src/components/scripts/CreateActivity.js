export default {
    created() {
        // 獲取傳遞過來的資訊
        const data = this.$route.query.q;
        // 使用資訊更新頁面
        if (data) {
            let activity = JSON.parse(this.$route.query.q);
            this.activity = activity;
        }
      },
      data() {
        let activity = {
            name: "",
            description: "",
            // 活動內容
            items: [],
            forms: [
              {
                name: "",
                fields: []
              }
            ]
          }
        return {activity}
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
        }
      },
      watch:{
        activityName:function(newValue,oldValue){
          console.log(newValue)
        }
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
        submit(){
          this.$router.push({
            name: "PublishActivity",
            query: { q: JSON.stringify(this.activity) },
          });
        }

      },
      // `mounted` is a lifecycle hook which we will explain later
      mounted() {
      }
    }
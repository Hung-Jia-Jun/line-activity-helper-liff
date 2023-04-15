
import axios from "axios"
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
        //發起一個Get請求，取得活動資料
        //用firebase的id去取得活動資料
        var url = 'https://8a735afd-8934-466a-8ce1-8ea6a36de5ca.mock.pstmn.io'
        axios.get(url+'/api/activity/'+this.$route.params._activity)
        .then(response => {
          this.activity = response.data
        })
        .catch(error => {
          console.log(error);
        })
        
      },
      methods: {

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
      },
    }
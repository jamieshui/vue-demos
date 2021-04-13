<template>
    <div name="show">
        <ul class="goodList">
            <li v-for="good in list">
                <img v-bind:src="good.img">
                <p>{{good.goodsName}}</p>
            </li>
        </ul>
    </div>
</template>

<style type="text/css">
    .goodList li{
        width: 200px;
        height:100px;
        list-style: none;
        float: left;
        font-size: 9px;
        color: red;
        margin-bottom: 50px;
    }
    .goodList img{
        width: 120px;
        height: 120px;
    }
</style>

<script type="text/javascript">
export default {
    name:"show",
    data(){
        var obj=this;
        var url="";
        if(obj.goodId==0) {
            url="json/bjb.json";
        }
        this.$http.get(url).then(function(res){
            obj.list=res.data;
        })
        return {
            list:[]
        }
    },
    props:{
        goodId:Number
    },
    watch:{
        goodId(){
            var obj = this;
            var url = "";
            if(obj.goodId==1) {
                url="json/bjb.json";
            } else if (obj.goodId==2){
                url="json/sj.json";
            }
            this.$http.get(url).then(function(res){
            obj.list=res.data;
            })
            return {
                list:[]
            }
        }
    }
}
</script>
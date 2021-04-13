<template>
    <div class="main">
        <div class="left">
            <Left></Left>
        </div>
        <div class="right">
            <div class="top">
                <img src="img/title.jpg">
            </div>
            <div class="bottom">
                <Right></Right>
            </div>
        </div>
    </div>
</template>
<style type="text/css">
    *{
        padding: 0;
        margin: 0;
    }
    .left{
        width: 100px;
        float:left;
        margin-right: 10px;
    }
    .right{
        width: 1000px;
        float: left;
        margin-left: 10px;
    }
    .left,.right{
        background-color: #F5F5F5;
        height: 500px;
    }
    .main{
        width: 1200px;
        margin: 20px auto;
    }
    .top img{
        height: 200px;
        width:1000px;
    }
</style>
<script type="text/javascript">
    import Left from '../components/Left.vue'
    import Right from '../components/Right.vue'
    export default{
        components:{
            Left,
            Right
        }
    }
</script>

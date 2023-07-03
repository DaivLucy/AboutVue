<template>
    <li>
        <input type='checkbox' id='input' :checked='shuju.data' @change="ShujuChange(shuju.id)">
        <p v-text="shuju.titel"></p>
        <a href='javascript:;' id='i' @click="DeleteShuju2(shuju.id)"></a>
    </li>
</template>

<script>
    export default {
        name: "TodoFinishItem",
        props:["shuju", "ShujuGaibian" , "DeleteShuju"],
        methods:{
            ShujuChange(id){
                this.ShujuGaibian(id)
            },

            // 关于删除
            DeleteShuju2(id){
                if(confirm("你确定要删除吗")){
                    this.DeleteShuju(id)
                }
            },
        }
    }
</script>

<style>

</style>
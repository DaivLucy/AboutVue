<template>
    <div class="content-bottom">
        <div class="bottom-bottom center-all">
            <h1>已经完成</h1>
            <div class="textxt">
                <p v-text="shujuSum"></p>
            </div>
        </div>

        <ul>
            <TodoFinishItem v-for="n in shujuSaixuan" 
                :key="n.id" 
                :shuju="n" 
                :ShujuGaibian="ShujuGaibian"
                :DeleteShuju="DeleteShuju"
            />
        </ul>
    </div>
</template>

<script>
    import TodoFinishItem from "./TodoFinishItem"

    export default {
        name: "TodoFinish",
        components: {TodoFinishItem},
        props:["shuju" , "ShujuGaibian" , "DeleteShuju"],
        computed:{
            shujuSaixuan(){
                return this.shuju.filter(shuju => shuju.data === true)
            },

            // 计算一共有多少个
            shujuSum(){
                const sss = this.shuju.filter(t => t.data === true)
                return sss.length
            }
        }
    }
</script>

<style scoped>
    .content .content-all .textxt{
        width: 20px;
        height: 20px;
        background-color: brown;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
    }
</style>
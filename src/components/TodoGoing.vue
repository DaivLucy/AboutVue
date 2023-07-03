<template>
    <div class="content-top">
        <div class="top-top center-all">
            <h1>正在进行</h1>
            <div class="textxt">
                <p v-text="shujuSum"></p>
            </div>
        </div>

        <ol>
            <TodoGoingItem 
                v-for="n in this.shujuSaixuan" 
                :key="n.id" 
                :shuju="n" 
                :ShujuGaibian="ShujuGaibian"
                :DeleteShuju="DeleteShuju"
            />
        </ol>
    </div>
</template>

<script>
    import TodoGoingItem from './TodoGoingItem.vue'

    export default {
        name: "TodoGoing",
        components: {TodoGoingItem},
        props:["shuju" , "ShujuGaibian" , "DeleteShuju"],
        computed:{
            shujuSaixuan(){
                return this.shuju.filter(shuju => shuju.data === false)
            },
            
            // 计算一共有多少个
            shujuSum(){
                const sss = this.shuju.filter(t => t.data === false)
                return sss.length
            }
        }
    }
</script>

<style>
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
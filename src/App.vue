<template>
    <div>
        <TodoHeader :Addtodo="Addtodo"/>
        
    
        <div class="content">
    
            <div class="content-all">
    
                <TodoGoing :shuju="shuju" :ShujuGaibian="ShujuGaibian" :DeleteShuju="DeleteShuju"/>
    
    
                <TodoFinish :shuju="shuju" :ShujuGaibian="ShujuGaibian" :DeleteShuju="DeleteShuju"/>
    
            </div>
    
        </div>
    </div>
</template>

<script>
    import TodoHeader from './components/TodoHeader.vue'
    import TodoGoing from './components/TodoGoing.vue'
    import TodoFinish from './components/TodoFinish.vue'

    export default {
        name: 'App',
        components: {TodoHeader,TodoGoing,TodoFinish},
        data() {
            return {
                shuju:  JSON.parse(localStorage.getItem("ItemShuju")) || []
            }
        },
        methods:{
            // 添加数据
            Addtodo(x){

                this.shuju.unshift(x)

            },

            // 进行勾选操作
            ShujuGaibian(id){
                this.shuju.forEach(element => {
                    if(id === element.id){
                        element.data = !element.data
                    }
                });
            },

            // 删除操作
            DeleteShuju(id){
                this.shuju = this.shuju.filter(t => {
                    return t.id !== id
                })
            }
        },
        watch: {
            shuju:{
                deep: true,
                handler(value){
                    localStorage.setItem("ItemShuju",JSON.stringify(value))
                }
            }
        }
    }
</script>

<style>

li{
    list-style: none;
}
*{
    margin: 0;
    padding: 0;
}
a{
    text-decoration: none;
    color: black;
}
body{
    background-color: rgba(255, 192, 203, 0.556);
}

.center-all{
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}



.content{
    display: flex;
    width: 100%;
    justify-content: center;
}

.content .content-all{
    width: 50%;
}

.content .content-all .content-top{
    margin-bottom: 20px;
}

.top-top ,
.bottom-bottom{
    margin-bottom: 20px;
}

ol li{
    display: flex;
    margin-bottom: 10px;
    background-color: white;
    height: 30px;
    align-items: center;
    border-radius: 2px;
    border-left: 5px solid rgba(58, 128, 142, 0.813);
    padding: 0 5px 0 8px;
    position: relative;
}

ul li{
    display: flex;
    margin-bottom: 10px;
    background-color: white;
    height: 30px;
    align-items: center;
    border-radius: 2px;
    border-left: 5px solid rgba(111, 122, 124, 0.813);
    padding: 0 5px 0 8px;
    position: relative;
    opacity: .6;
}

ol li a{
    width: 20px;
    height: 20px;
    display: block;
    border-radius: 50%;
    background-color: aqua;
    position: absolute;
    right: 10px;
}



ul li a{
    width: 20px;
    height: 20px;
    display: block;
    border-radius: 50%;
    background-color: blanchedalmond;
    position: absolute;
    right: 10px;
}

#input{
    width: 15px;
    height: 15px;
    margin-right: 10px;
}

</style>
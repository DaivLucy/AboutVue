<template>
    <div>
        <div class="top-logo">
            <div class="logo-intent">
                <p class="logo">ToDoList</p>
                <input type="text" id="txt" placeholder="请输入你的待办事项" @keyup.enter="getShuju" v-model="titel">
            </div>
        </div>
    </div>
</template>

<script>
    import {nanoid} from 'nanoid'
    export default {
        name: "TodoHeader",
        data() {
            return {
                titel: "",
            }
        },
        methods: {
            getShuju(){
                if(this.titel !== ''){
                    const AddShuju = {id: nanoid() , titel: this.titel , data: false}
                    // localStorage.setItem("shuju",JSON.stringify(AddShuju))
                    
                    // console.log(Shuju);
                    this.Addtodo(AddShuju)

                    this.titel = ''
                }
            }
        },
        props:["Addtodo"]
    }
</script>

<style>
    .top-logo{
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: center;
    background-color: rgb(45, 45, 45);
    margin-bottom: 20px;
    }

    .top-logo .logo-intent{
        width: 50%;
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .top-logo .logo-intent p{
        color: white;
        font-size: 30px;
    }

    .top-logo .logo-intent #txt{
        width: 400px;
        height: 25px;
        border-radius: 6px;
    }

    .top-logo .logo-intent #txt:focus{
        outline: none;
    }
</style>
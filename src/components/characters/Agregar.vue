<template>
    <div>
        <Navbar />
            <div class="container">
                <form action="" class="form-horizontal">
                    <div class="form-group left">
                        <label for="" class="control-label col-sm-2">Nombre</label>
                        <div class="col-sm-10">
                            <input type="text" class="form-control" name="nombre" id="nombre" v-model="form.name">
                        </div>
                    </div>
                    <div class="form-group left">
                        <label for="" class="control-label col-sm-2">birthDate</label>
                        <div class="col-sm-10">
                            <input type="text" class="form-control" name="birthdate" id="birthdate" v-model="form.birthDate">
                        </div>
                    </div>
                    <div class="form-group left">
                        <label for="" class="control-label col-sm-2">Imagen</label>
                        <div class="col-sm-10">
                            <input type="text" class="form-control" name="imagen" id="imagen" v-model="form.picture">
                        </div>
                    </div>
                    <div class="form-group left">
                        <label for="" class="control-label col-sm-2">Alive: coloque true o false</label>
                        <div class="col-sm-10">
                            <input type="text" class="form-control" name="vivomuerto" id="vivomuerto" v-model="form.alive">
                        </div>
                    </div>
                    <div class="form-group left">
                        <label for="" class="control-label col-sm-2">Actor</label>
                        <div class="col-sm-10">
                            <input type="text" class="form-control" name="actor" id="actor" v-model="form.playedBy">
                        </div>
                    </div>

                <div class="form-group">
                    <button type="button" class="btn btn-primary" v-on:click="guardar()"  >Agregar</button>
                    <button type="button" class="btn btn-dark margen" v-on:click="salir()" >Salir</button>
                </div>
            </form>
            </div>
    </div>
</template>

<script>
import Navbar from "@/components/utils/Navbar.vue"
import axios from 'axios';
export default {
    name: "Agregar",
    data:function(){
        return{
            form:{
                "name": "",
                "birthDate": "",
                "picture": "",
                "alive": "",
                "playedBy": ""
            }
        }
    },
    components: {
        Navbar,
    },
    methods: {
        guardar() {
            axios.post("https://6282cdc538279cef71cd15d8.mockapi.io/api/Characters", this.form).then(data => {
                console.log(data);
                this.$router.push("/personajes");
            })
        },
        salir() {
            this.$router.push("/personajes");
        }
    }
}
</script>

<style scoped>
.left{
    text-align: left;
}
</style>
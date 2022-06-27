<template>
    <div>
        <div class="container">
            <form action="" class="form-horizontal">
                <div class="form-group left">
                    <label for="" class="control-label col-sm-2">Nombre</label>
                    <div class="col-sm-10">
                        <input type="text" class="form-control" name="name" id="name" v-model="form.name">
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
                    <button type="button" class="btn btn-primary" v-on:click="editar()"  >Editar</button>
                    <button type="button" class="btn btn-danger margen" v-on:click="eliminar()" >Eliminar</button>
                    <button type="button" class="btn btn-dark margen" v-on:click="salir()" >Salir</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import Navbar from "@/components/utils/Navbar.vue";
import axios from 'axios';
export default {
    name: "Editar",
    components: {
        Navbar,
    },
    data:function(){
        return{
            form:{
                "characterId": "",
                "name": "",
                "birthDate": "",
                "picture": "",
                "alive": "",
                "playedBy": ""
            }
        }
    },
    mounted:function(){
        this.form.characterId = this.$route.params.id;
        axios.get('https://6282cdc538279cef71cd15d8.mockapi.io/api/Characters?id='+ this.form.characterId).then(datos => {
            this.form.name = datos.data[0].name;
            this.form.birthDate = datos.data[0].birthDate;
            this.form.picture = datos.data[0].picture;
            this.form.alive = datos.data[0].alive;
            this.form.playedBy = datos.data[0].playedBy;
        })
    },
    methods: {
        editar(){
            const characterId = this.form.characterId;
            axios.put(`https://6282cdc538279cef71cd15d8.mockapi.io/api/Characters/${characterId}`, this.form).then(data => {
                    console.log(data);
                    this.$router.push("/personajes");
            })
        },
        salir(){
            this.$router.push("/personajes");
        },
        eliminar(){
            const characterId = this.form.characterId
            var enviar = {
                "characterId": characterId
            };
            axios.delete(`https://6282cdc538279cef71cd15d8.mockapi.io/api/Characters/${enviar.characterId}`, { headers: enviar}).then(data => {
                console.log(data);
                this.$router.push("/personajes");
            });
        }
    }
}
</script>

<style scoped>
.left {
    text-align: left;
}
</style>
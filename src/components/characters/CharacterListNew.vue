<template>
   <div class="container botonAgregarIzquierda">
        <h1> Listar Personajes :D:D:D: {{ miNombreApp }}</h1>
        <hr/>
        <button class="btn btn-primary" v-show="admin" v-on:click="agregar()">Agregar Personaje</button>
        <br><br>
        <div class="row justify-content-center"> 
            <div class ="col-4">
                <div class="mb-3">
                    <label for="id" class="form-label">Nombre</label>
                    <input type="text" class="form-control" id="name" v-model="charName">
                </div>  
            </div>


            <div class ="col-4">
                <div class="mb-3">
                    <label for="id" class="form-label">Actor</label>
                    <input type="text" class="form-control" id="actor" v-model="actorName">
                </div>  
            </div>
            
        </div>
        <div class="mb-3">   
          <h1> Cantidad: {{cantidadPersonajesFiltrados }} </h1>
          <h1> Seleccionado: {{personajeSeleccionado}}  </h1>
        </div>
        <div class="row">
            <div v-for="personaje in filtrarPersonajes" :key="personaje.id" class="col-md-3">
                 <div class="card">
                   <img :src="personaje.picture" class="card-img-top" alt="imagen de personaje.name">
                   <div class="card-body">
                       <h5 class="card-title">{{personaje.name}}</h5>
                       <p class="card-text">Nombre: {{personaje.name}}</p>
                       <p class="card-text">F.Nacimiento: {{personaje.birthDate}}</p>
                       <p class="card-text">Actor: {{personaje.playedBy}}</p>
                       <button class="btn btn-dark margen" @click="seleccionar(personaje)">Mostrar</button>
                       <button class="btn btn-primary" v-show="admin" @click="editar(personaje.id)">Editar</button>
                   </div>
               </div>
           </div>  
       </div>

       <!-- <div class="row">
           <div class="col-6">
               <button class="btn btn-info mt-4 text-white" @click="prev()">Previous</button>
           </div>
           <div class="col-6">
               <button class="btn btn-info mt-4 text-white" @click="next()">Next</button>
           </div>
       </div> -->
    </div>

</template>

<script>
import Navbar from "@/components/utils/Navbar.vue";
export default {
  name: "CharacterListNew",
  components: {
    Navbar,
  },
  data() {
    return {
       personajes: [],
       miNombreApp: 'Peaky Blinders',
       charName: '',
       actorName: '',
       url:'https://6282cdc538279cef71cd15d8.mockapi.io/api/Characters',
       cnatidadPersonajes: 0,
       personajeSeleccionado : '',
       admin: Boolean

    };
  },
  methods: {
    seleccionar(elemento) {
                console.log('Personaje Seleccionado:' + elemento.name)
                this.personajeSeleccionado = elemento.name
            },
    editar(id) {
                this.$router.push('/editar/' + id);
            },
    agregar() {
        this.$router.push('/Agregar');
    },
  },
  async created() {
            const response = await fetch(this.url)
            const data = await response.json();
            console.log(data);
            this.personajes = data           
            this.admin = localStorage.admin
    },
    computed: {
        filtrarPersonajes : function() {
            let filtrados = this.personajes;
            

            if (this.charName) {
                console.log('Hay un valor en Charname, filtro',this.charName)
                 filtrados = filtrados.filter(p => p.name.toLowerCase().includes(this.charName.toLowerCase()))
            }

            if (this.actorName) {
                console.log('Hay un valor en actorName, filtro',this.actorName)
                filtrados = filtrados.filter(p => p.playedBy.toLowerCase().includes(this.actorName.toLowerCase()))
            }

                       
            return filtrados;
        },
        cantidadPersonajesFiltrados() {
            return this.filtrarPersonajes.length
        }

    }
};
</script>

<style scoped>
    .botonAgregarIzquierda {
        text-align: left;
    }
</style>
<template>
   <div class="container">
      <div class="row justify-content-center">            
                <div class="row" justify-content-center>
                    <div class="col-6">
                        <form v-on:submit.prevent="onSubmit">
                            <div class="mb-3">
                                <label for="Nombre" class="form-label">Nombre</label>
                                <input type="text" class="form-control" v-model="form.name" />
                            </div>
                            <div class="d-grip gap-2">
                                <input class="btn btn-info text-white" type="submit" value="buscar" />
                            </div>
                        </form>
                    </div>
                </div>        


                <div v-for="character in characters" :key="character.name" class="col-4">
                 <div class="card">
                   <img :src="character.picture" class="card-img-top" alt="imagen de personaje.name">
                   <div class="card-body">
                       <h5 class="card-title">{{character.name}}</h5>
                       <p class="card-text">F.Nacimiento: {{character.birthDate}}</p>
                       <p class="card-text">Actor: {{character.playedBy}}</p>                       
                   </div>
               </div>
           </div>  
       </div>

       <div class="row">
           <div class="col-6">
               <button class="btn btn-info mt-4 text-white" @click="prev()">Previous</button>
           </div>
           <div class="col-6">
               <button class="btn btn-info mt-4 text-white" @click="next()">Next</button>
           </div>
       </div>
    </div>

</template>

<script>
//import CharacterCard from "./CharacterCard.vue";
import axios from "axios";

export default {
  name: "CharacterListNew",
  components: {
    //CharacterCard,
  },
  data() {
    return {
      characters: [],
//      urls: { prev: null, next: null },
      form: {
             id: null,
             name: null
           }
    };
  },
  methods: {
    async loadCharacters(url = "https://6282cdc538279cef71cd15d8.mockapi.io/api/Characters") {
      const res = await axios.get(url);
      const data = res.data;
      this.characters = data;
      
      /*this.urls.prev = previous;
      this.urls.next = next;
      document.getElementById("btnPrev").disabled = !this.urls.prev;
      document.getElementById("btnNext").disabled = !this.urls.next;
   */
    },
    /*
    async prev() {
      this.loadCharacters(this.urls.prev);
    },
    async next() {
      this.loadCharacters(this.urls.next);
    },*/
  },
  onSubmit() {
          const url = 'https://6282cdc538279cef71cd15d8.mockapi.io/api/Characters?name=' + this.form.name
        
              this.loadCharacters(url)
          },
  created() {
    this.loadCharacters();
  },
};
</script>
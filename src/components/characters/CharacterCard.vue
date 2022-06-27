<template>
 <div class="card" style="width: 5rem;">
                   <img :src="personaje.picture" class="card-img-top" alt="imagen de personaje.name">
                   <div class="card-body">
                       <h5 class="card-title">{{personaje.name}}</h5>
                       <p class="card-text">Nombre: {{personaje.name}}</p>
                       <p class="card-text">F.Nacimiento: {{personaje.birthDate}}</p>
                       <p class="card-text">Actor: {{personaje.playedBy}}</p>
                       <button @click="seleccionar(personaje)">Mostrar</button>
                   </div>
               </div>
</template>

<script>
export default {
  name: "CharacterCard",
  props: {
    character: Object
  },
};
</script>
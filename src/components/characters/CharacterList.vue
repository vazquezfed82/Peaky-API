<template>
  <div class="container">
    <div class="row justify-content-center">
      <div :key="c.id" v-for="c in characters" class="col-4 mt-4">
        <CharacterCard :c="c" />
      </div>
    </div>
  <!--  <div class="button-group">
      <button id="btnPrev" class="button" @click="prev()">Previous</button>
      <button id="btnNext" class="button" @click="next()">Next</button>
    </div>
  -->
  </div>
</template>

<script>
import CharacterCard from "./CharacterCard.vue";
import axios from "axios";

export default {
  name: "CharacterList",
  components: {
    CharacterCard,
  },
  data() {
    return {
      characters: [],
//      urls: { prev: null, next: null },
    };
  },
  methods: {
    async loadCharacters(
      url = "https://6282cdc538279cef71cd15d8.mockapi.io/api/Characters"
    ) {
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
  created() {
    this.loadCharacters();
  },
};
</script>
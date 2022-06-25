<template>
  <div class="card" style="width: 18rem">
    <img :src="character.picture" alt="..." class="card-img-top" />
    <div class="card-body">
      <h5 class="card-title">
        <b>{{ character.name }}</b>
      </h5>
      <div class="d-flex justify-content-between">
        <span>{{ character.name }}</span>
      </div>
      <div class="d-flex justify-content-between">
        <span>{{}}</span>
      </div>
      <div class="d-flex justify-content-between">
        <span>{{}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CharacterCard",
  props: {
    character: Object,
  },
};
</script>
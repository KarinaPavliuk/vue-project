<template>
  <ul>
    <li v-for="person in people">{{ person }}</li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      people: ["Lilu", "Sandy", "Nill", "Jasy"],
    };
  },
};
</script>

<style></style>

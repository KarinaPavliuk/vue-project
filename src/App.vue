<template>
  <div id="app">
    <button type="button" @click="component = 'Reg'">Reg</button>
    <button type="button" @click="component = 'Aut'">Aut</button>
    <keep-alive><component :is="component"></component></keep-alive>
  </div>
</template>

<script>
// import List from "./components/List.vue"; // імпортуєм компонент локально
import Aut from "./components/Aut.vue";
import Reg from "./components/Reg.vue";

export default {
  components: {
    Aut,
    Reg,
  },
  data() {
    return {
      component: "Aut",
    };
  },
};
</script>

<style></style>

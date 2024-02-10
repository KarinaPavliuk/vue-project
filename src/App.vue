<template>
  <div id="app">
    <Header></Header>
    <Main></Main>

    <!-- <button type="button" @click="component = 'Reg'">Reg</button>
    <button type="button" @click="component = 'Aut'">Aut</button>
    <keep-alive><component :is="component"></component></keep-alive> -->
  </div>
</template>

<script>
// import Aut from "./components/Aut.vue";// імпортуєм компонент локально
// import Reg from "./components/Reg.vue";
import Header from "./components/Header.vue";
import Main from "./components/Main.vue";

export default {
  components: {
    Header,
    Main,
    // Aut,
    // Reg,
  },
  data() {
    return {
      // component: "Aut",
    };
  },
};
</script>

<style></style>

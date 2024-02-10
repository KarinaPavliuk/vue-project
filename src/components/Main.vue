<template>
  <div class="main">
    <button type="button" @click="component = 'HomePage'">Home</button>
    <button type="button" @click="component = 'ProductPage'">Product</button>
    <button type="button" @click="component = 'CreateProductPage'">
      Create
    </button>
    <keep-alive><component :is="component"></component></keep-alive>
    <!-- <button type="button" @click="component = 'Reg'">Reg</button>
    <button type="button" @click="component = 'Aut'">Aut</button>
    <keep-alive><component :is="component"></component></keep-alive> -->
  </div>
</template>

<script>
// import Aut from "./components/Aut.vue";// імпортуєм компонент локально
// import Reg from "./components/Reg.vue";
import HomePage from "./HomePage.vue";
import ProductPage from "./ProductPage.vue";
import CreateProductPage from "./CreateProductPage.vue";

export default {
  components: {
    HomePage,
    ProductPage,
    CreateProductPage,
  },
  data() {
    return {
      component: "HomePage",
      // component: "Aut",
    };
  },
};
</script>

<style></style>

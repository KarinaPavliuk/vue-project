<template>
  <div class="main">
    <button type="button" @click="component = 'HomePage'">Home</button>
    <button type="button" @click="component = 'ProductPage'">Product</button>
    <button type="button" @click="component = 'CreateProductPage'">
      Create
    </button>
    <keep-alive
      ><component
        :is="component"
        @clickOnProduct="getProductId"
        @deleteProduct="getUpdatedProductsList"
        v-bind:productId="productId"
        v-bind:deletedId="deletedProductsId"
      ></component
    ></keep-alive>

    <!-- <button type="button" @click="component = 'Reg'">Reg</button>
    <button type="button" @click="component = 'Aut'">Aut</button>
    <keep-alive><component :is="component"></component></keep-alive> -->
  </div>
</template>

<script>
// import Aut from "./components/Aut.vue";// імпортуєм компонент локально
// import Reg from "./components/Reg.vue";
import HomePage from "./HomePage/HomePage.vue";
import ProductPage from "./ProductPage/ProductPage.vue";
import CreateProductPage from "./CreateProductPage/CreateProductPage.vue";

export default {
  components: {
    HomePage,
    ProductPage,
    CreateProductPage,
  },
  data() {
    return {
      component: "HomePage",
      productId: 1,
      deletedProductsId: [],
    };
  },
  methods: {
    getProductId: function (productId) {
      this.productId = productId;
      this.component = "ProductPage";
    },
    getUpdatedProductsList: function (productId) {
      console.log("deleted id", productId);
      this.deletedProductsId.push(productId);
      console.log("deleted", this.deletedProductsId);
      this.component = "HomePage";
    },
  },
};
</script>

<style></style>

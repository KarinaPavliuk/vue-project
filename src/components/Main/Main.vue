<template>
  <div class="main">
    <div class="container">
      <button class="button" type="button" @click="component = 'HomePage'">
        Home
      </button>
      <button class="button" type="button" @click="component = 'ProductPage'">
        Product
      </button>
      <button
        class="button"
        type="button"
        @click="component = 'CreateProductPage'"
      >
        Create
      </button>
      <keep-alive
        ><component
          :is="component"
          @deleteProduct="getUpdatedProductsList"
          v-bind:productId="productId"
          v-bind:deletedId="deletedProductsId"
        ></component
      ></keep-alive>
    </div>
  </div>
</template>

<script>
import { bus } from "../../main";
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
      this.deletedProductsId.push(productId);
      this.component = "HomePage";
    },
  },
  created() {
    bus.$on("clickOnProduct", () => {
      this.component = "ProductPage";
    });
    bus.$on("headerClick", () => {
      this.component = "HomePage";
    });
    bus.$on("createClick", () => {
      this.component = "CreateProductPage";
    });
    bus.$on("createProduct", () => {
      this.component = "HomePage";
    });
  },
};
</script>

<style>
.button {
  background-color: rgb(239, 237, 237);
  margin-bottom: 10px;
  box-shadow: none;
}
</style>

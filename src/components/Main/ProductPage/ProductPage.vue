<template>
  <div class="product-page">
    <div class="product-info" v-if="product">
      <img :src="product.images[0]" alt="" />
      <p><span>Title:</span> {{ product.title }}</p>
      <p><span>Brand:</span> {{ product.brand }}</p>
      <p><span>Description:</span> {{ product.description }}</p>
      <p><span>Rating:</span> {{ product.rating }}</p>
      <p><span>Price:</span> {{ product.price }} $</p>
    </div>
    <button @click="showModal">Update product</button>
    <button @click="handleDeleteClick(product.id)">Delete product</button>
    <ModalPage v-show="isModalVisible" @close="closeModal"></ModalPage>
  </div>
</template>

<script>
import { bus } from "../../../main.js";
import ModalPage from "./ModalPage.vue";

export default {
  data() {
    return {
      product: null,
      productId: 1,
      isModalVisible: false,
    };
  },
  methods: {
    getSingleProduct(id) {
      fetch(`https://dummyjson.com/products/${id}`)
        .then((res) => res.json())
        .then((data) => (this.product = data));
    },
    handleDeleteClick: function (id) {
      this.$emit("deleteProduct", id);
      bus.$emit("deleteProduct", id);
    },
    showModal() {
      this.isModalVisible = true;
      bus.$emit("product", this.product);
    },
    closeModal() {
      this.isModalVisible = false;
    },
  },
  created() {
    bus.$on("clickOnProduct", (data) => (this.productId = data));
    bus.$on("close", () => (this.isModalVisible = false));
  },
  mounted() {
    this.productId && this.getSingleProduct(this.productId);
  },
  components: { ModalPage },
};
</script>

<style scoped>
img {
  height: 200px;
}
span {
  font-weight: 600;
  background-color: rgb(222 189 243);
  padding: 2px;
  border-radius: 8px;
}
button {
  margin-bottom: auto;
}
.product-page {
  display: flex;
  column-gap: 24px;
}
.product-info {
  padding: 28px;
  border: 2px solid #8a878c;
  display: flex;
  flex-direction: column;
  row-gap: 16px;
}
</style>

<template>
  <div class="homePage">
    <input
      class="input"
      v-model="query"
      @keyup.enter="searchProducts(query)"
      type="text"
      @click="query = ''"
      placeholder="Search"
    />

    <div class="select-wrapper">
      <label for="sort-select">Sort:</label>
      <select
        class="select"
        v-model="option"
        @change="sort(option)"
        name="sort"
        id="sort-select"
      >
        <option value="title">Title (A-Z)</option>
        <option value="rating">Higher Rating -</option>
      </select>
    </div>

    <ul class="products-list">
      <li
        class="product-item"
        v-for="product in products"
        @click="openProductPage(product.id)"
        :key="product.id"
      >
        <img class="product-img" :src="product.thumbnail" alt="" />

        <div class="product-info-wrapper">
          <p class="product-title">{{ product.title }}</p>
          <p>{{ product.rating }}</p>
          <p class="product-price">{{ product.price }} $</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { bus } from "../../../main.js";

export default {
  data() {
    return {
      query: "",
      option: null,
      products: null,
      productId: 1,
      deletedId: null,
    };
  },
  methods: {
    getPosts() {
      fetch("https://dummyjson.com/products")
        .then((res) => res.json())
        .then((data) => (this.products = data.products));
    },
    searchProducts(productName) {
      fetch(`https://dummyjson.com/products/search?q=${productName}`)
        .then((res) => res.json())
        .then((data) => (this.products = data.products));
    },
    sort(option) {
      if (option === "title") {
        return this.products.sort((a, b) =>
          a.title.toLowerCase().localeCompare(b.title.toLowerCase())
        );
      } else if (option === "rating") {
        return this.products.sort((a, b) => b.rating - a.rating);
      }
    },
    openProductPage: function (productId) {
      this.productId = productId;
      bus.$emit("clickOnProduct", productId);
    },
    filterProducts: function (id) {
      this.products = this.products.filter((product) => product.id !== id);
    },
  },
  created() {
    bus.$on("deleteProduct", (data) => {
      this.filterProducts(data);
    });
    bus.$on("createProduct", (data) => {
      this.products.unshift(data);
    });
  },
  mounted() {
    this.getPosts();
  },
};
</script>

<style scoped>
.homePage {
  display: flex;
  flex-direction: column;
  row-gap: 12px;
}
.input {
  width: 320px;
  padding: 8px 8px;
  font-size: 16px;
  font-weight: 500;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  background: linear-gradient(white, white) padding-box,
    linear-gradient(to right, rgb(222 189 243), rgb(149 255 197)) border-box;
  border-radius: 32px;
  border: 4px solid transparent;
  outline: none;
  margin: 0 auto;
}

.select-wrapper {
  margin-left: auto;
  color: #8a878c;
}

.select {
  padding: 4px 4px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  background: linear-gradient(to right, rgb(222 189 243), rgb(149 255 197))
    border-box;
  border-radius: 32px;
  border: 4px solid transparent;
  outline: none;
  color: #8a878c;
  cursor: pointer;
}
.products-list {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

.product-item {
  width: 25%;
  padding: 12px 8px 12px 8px;
  border: 1px solid #dfdfdf;
  display: flex;
  flex-direction: column;
  row-gap: 4px;
  background-color: white;
  cursor: pointer;
  transition: transform 0.2s;
}

.product-item:hover {
  transform: scale(1.05);
  background-color: #f7f7f7;
  z-index: 1;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
}

.product-img {
  width: 100%;
  height: 100px;
  object-fit: contain;
  margin-bottom: 6px;
}

.product-info-wrapper {
  padding: 0 24px 0 24px;
  display: flex;
  flex-direction: column;
  row-gap: 4px;
}

.product-title {
  font-size: 18px;
}
.product-price {
  font-size: 20px;
  margin-left: auto;
  font-weight: 600;
  background-color: rgb(239, 237, 237);
  padding: 2px;
  border-radius: 8px;
}
</style>

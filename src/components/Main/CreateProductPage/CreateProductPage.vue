<template>
  <div class="create-product-page">
    <form action="submit" @submit.prevent="handleSubmit">
      <p class="form-heading">Create new product</p>
      <p>
        <label for="title">Title:</label>
        <input id="title" type="text" name="title" value="" />
      </p>
      <p>
        <label for="description">Description:</label>
        <input id="description" type="text" name="description" value="" />
      </p>
      <p>
        <label for="brand">Brand:</label>
        <input id="brand" type="text" name="brand" value="" />
      </p>
      <p>
        <label for="rating">Rating:</label>
        <input id="rating" type="text" name="rating" value="" />
      </p>
      <p>
        <label for="price">Price</label>
        <input id="price" type="text" name="price" value="" />
      </p>
      <button type="submit" name="button">Submit</button>
    </form>
  </div>
</template>

<script>
import { bus } from "../../../main";

export default {
  data() {
    return { product: null };
  },
  methods: {
    handleSubmit(event) {
      // this.product.title = event.target.elements.title.value;
      // this.product.brand = event.target.elements.brand.value;
      // this.product.description = event.target.elements.description.value;
      // this.product.rating = event.target.elements.rating.value;
      // this.product.price = event.target.elements.price.value;
      fetch("https://dummyjson.com/products/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: event.target.elements.title.value,
          brand: event.target.elements.brand.value,
          description: event.target.elements.description.value,
          rating: event.target.elements.rating.value,
          price: event.target.elements.price.value,
        }),
      })
        .then((res) => res.json())
        .then((data) => (this.product = data));

      bus.$emit("createProduct", this.product);
    },
  },
};
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  row-gap: 12px;
}
p {
  display: flex;
  align-items: center;
}
label {
  width: 20%;
  display: flex;
  padding: 9px 4px 9px 4px;
  background-color: rgb(222 189 243);
  align-items: center;
  justify-content: center;
  border-radius: 8px 0 0 8px;
  z-index: 99;
}
input {
  width: 80%;
  padding: 8px;
  font-size: 16px;
  border-radius: 0 8px 8px 0;
  border: 1px solid #b7b6b6;
  outline-color: gray;
  z-index: 100;
}

button {
  margin: 0 auto;
}

.form-heading {
  font-size: 22px;
  font-weight: 600;
  margin: 0 auto;
  background-color: rgb(239, 237, 237);
  padding: 8px 16px;
  border-radius: 24px;
  background: linear-gradient(
    90deg,
    rgb(222 189 243) 0%,
    rgb(149 255 197) 100%
  );
  color: white;
}
</style>

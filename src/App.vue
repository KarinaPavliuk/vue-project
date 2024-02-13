<template>
  <div id="app">
    <Header></Header>
    <Main></Main>
  </div>
</template>

<script>
import Header from "./components/Header/Header";
import Main from "./components/Main/Main.vue";

export default {
  components: {
    Header,
    Main,
  },
  data() {
    return {};
  },
};
</script>

<style>
p,
h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
}

ul {
  margin: 0;
  padding-left: 0;
}

button {
  cursor: pointer;
  background-color: #8a878c;
  font-size: 16px;
  font-weight: 500;
  color: white;
  padding: 8px 16px;
  border-radius: 16px;
  border: none;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
}

button:hover {
  background-color: #807e81;
}

* {
  margin: 0;
  padding: 0;
  list-style: none;
  box-sizing: border-box;
}

body {
  font-family: Roboto, sans-serif;
  font-size: 16px;
  font-style: normal;
  background: #ffffff;
}

.container {
  width: 100%;
  padding-left: 64px;
  padding-right: 64px;
  margin: 0 auto;
}

.link {
  text-decoration: none;
}

.list {
  list-style: none;
}
</style>

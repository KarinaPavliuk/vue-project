<template>
  <div class="header">
    <h1>Header</h1>
    <button type="button">Create</button>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: linear-gradient(
    90deg,
    rgba(131, 0, 212, 1) 0%,
    rgba(0, 221, 99, 1) 100%
  );
  height: 72px;
  color: white;
}
</style>

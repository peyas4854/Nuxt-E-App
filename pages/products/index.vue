<template>
  <div>
    <div class="grid grid-cols-4 gap-5">
      <div v-for="(product,index ) in products" :key="index">
       <ProductCard :product="product"/>
      </div>
    </div>
  </div>
</template>

<script setup>

const { data: products } = await useFetch("https://fakestoreapi.com/products");
</script>

<style  scoped>
</style>
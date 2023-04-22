<template>
  <div>
    <Head>
  <Title> Nuxt 3 | {{ product.title }}</Title>
  <Meta name="description" :content="product.description"/>
</Head>
   <ProductDetail :product="product"></ProductDetail>
  </div>
</template>

<script setup>
// definePageMeta({
//   layout: "products"
// });
const { id } = useRoute().params;
const url = "https://fakestoreapi.com/products/" + id;
console.log("url", url);
//fetch the product

const { data: product } = await useFetch(url,{key:id});
if(!product.value){
    throw createError({statusCode:404,statusMessage:'Product not found!',fatal:true })
}

</script>

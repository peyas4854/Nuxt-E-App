<template>
  <div>
    <div class="container mx-auto p-4">
        <slot/>
    </div>
    <header class="shadow-sm bg-white">
      <nav class="container mx-auto p-4 justify-between"> 
        <ul class="flex gap-4">
          <li>
            <NuxtLink to="/">Home</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/about">About</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/products/1">Products</NuxtLink>
          </li>
        </ul>
      </nav>
    </header>
    
  </div>
</template>

<script>
export default {};
</script>
<style scoped>
.router-link-exact-active{
    color: rgb(12, 172, 60);
}
</style>

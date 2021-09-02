<template>
  <div>
    <nuxt-link to="./">Назад</nuxt-link>
    <comment v-for="item in 7" :id="item" :key="item"  />
  </div>
</template>

<script>
export default {
  name: 'Comments',
}
</script>
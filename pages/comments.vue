<template>
  <div>
    <nuxt-link to="./">Назад</nuxt-link>
    <comment :id=1 />
    <comment :id=2 />
    <comment :id=3 />
  </div>
</template>

<script>
export default {
  name: 'Comments',
}
</script>
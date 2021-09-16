<template>
  <div>
    comment: {{comment}}
  </div>
</template>



<script>
export default {
  name: 'CommentComponent',
   props:{
    comment: {
      type: Object,
      default: ()=> {}
    }
  },
}
</script>
<template>
  <div>
    comment: {{comment}}
  </div>
</template>



<script>
import gql from "graphql-tag"
export default {
  name: 'CommentComponent',
   props:{
    id: {
      type: [String, Number],
      required: true
    }
  },
  apollo: {
    comment: {
      query: gql `query comment($id: ID!) {
          comment(id: $id) {
            id
            name
          }
        }`,
      variables() {
        return {id: this.id}
      }
    },
  }
}
</script>
<template>
  <div>
    {{id}} comment: {{comment}}
  </div>
</template>



<script>
import gql from "graphql-tag"
export default {
  name: 'CommentComponent',
  apollo: {
    comment: {
      query () {
        const query = `query comment_${this.id}($id: ID!) {
          comment(id: $id) {
            id
            name
          }
        }`
        return gql(query)
      },
      variables() {
        return {
          id: this.id
        }
      }
    }
  },
   props:{
    id: {
      type: [String, Number],
      required: true
    }
  }
}
</script>
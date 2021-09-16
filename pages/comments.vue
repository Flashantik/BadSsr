<template>
  <div>
    <nuxt-link to="./">Назад</nuxt-link>
    <comment :comment="comment_1" />
    <comment :comment="comment_2" />
    <comment :comment="comment_3" />
  </div>
</template>

<script>
  import gql from "graphql-tag"
  export default {
    name: 'Comments',
    apollo: {
      comment_1: {
        query: gql `query comment($id: ID!) {
           comment_1: comment(id: $id) {
             id
             name
           }
         }`,
        variables: {
          id: 1
        }
      },
      comment_2: {
        query: gql `query comment($id: ID!) {
           comment_2: comment(id: $id) {
             id
             name
           }
         }`,
        variables: {
          id: 2
        }
      },
      comment_3: {
        query: gql `query comment($id: ID!) {
           comment_3: comment(id: $id) {
             id
             name
           }
         }`,
        variables: {
          id: 3
        }
      }
    }
  }

</script>

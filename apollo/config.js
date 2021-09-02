import { onError } from 'apollo-link-error'
// import { createHttpLink } from 'apollo-link-http'
import { ApolloLink, from } from 'apollo-link'
import { BatchHttpLink } from "apollo-link-batch-http";

export default function (context) {
  const errorLink = onError((error) => {
    console.log(error)
  })

  // const customFetch =  (uri, options) => {
  //   return fetch(uri, options)
  // }
  const link = new BatchHttpLink({ uri: 'https://graphqlzero.almansi.me/api', batchInterval: 1, });


  const roundTripLink = new ApolloLink((operation, forward) => {
    // Called before operation is sent to server
    operation.setContext({ start: new Date() })
    console.log(
      `Start ${operation.operationName}`
    )
    return forward(operation).map((data) => {
      // Called after server responds
      const time = new Date() - operation.getContext().start
      console.log(
        `Finish ${operation.operationName} took ${time} to complete`
      )
      return data
    })
  })


  return {
    link: from([errorLink, roundTripLink, link]),
    shouldBatch: true,
  }
}

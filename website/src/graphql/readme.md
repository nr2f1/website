# GraphQL


## Possible types

Go to GraphiQL and run

```gql
{
  __schema {
    types {
      kind
      name
      possibleTypes {
        name
      }
    }
  }
}
```

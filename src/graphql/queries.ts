/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getTodoGroup = /* GraphQL */ `
  query GetTodoGroup($id: ID!) {
    getTodoGroup(id: $id) {
      id
      userId
      todos {
        title
        text
        notificatedAt
        index
        createdAt
        updatedAt
        status
      }
      name
      createdAt
      updatedAt
      handleUpdatedAt
    }
  }
`;
export const listTodoGroups = /* GraphQL */ `
  query ListTodoGroups(
    $filter: ModelTodoGroupFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTodoGroups(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userId
        todos {
          title
          text
          notificatedAt
          index
          createdAt
          updatedAt
          status
        }
        name
        createdAt
        updatedAt
        handleUpdatedAt
      }
      nextToken
    }
  }
`;

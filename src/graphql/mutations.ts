/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createTodoGroup = /* GraphQL */ `
  mutation CreateTodoGroup(
    $input: CreateTodoGroupInput!
    $condition: ModelTodoGroupConditionInput
  ) {
    createTodoGroup(input: $input, condition: $condition) {
      id
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
      owner
    }
  }
`;
export const updateTodoGroup = /* GraphQL */ `
  mutation UpdateTodoGroup(
    $input: UpdateTodoGroupInput!
    $condition: ModelTodoGroupConditionInput
  ) {
    updateTodoGroup(input: $input, condition: $condition) {
      id
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
      owner
    }
  }
`;
export const deleteTodoGroup = /* GraphQL */ `
  mutation DeleteTodoGroup(
    $input: DeleteTodoGroupInput!
    $condition: ModelTodoGroupConditionInput
  ) {
    deleteTodoGroup(input: $input, condition: $condition) {
      id
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
      owner
    }
  }
`;

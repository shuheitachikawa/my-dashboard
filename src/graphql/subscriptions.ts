/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateTodoGroup = /* GraphQL */ `
  subscription OnCreateTodoGroup($owner: String!) {
    onCreateTodoGroup(owner: $owner) {
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
export const onUpdateTodoGroup = /* GraphQL */ `
  subscription OnUpdateTodoGroup($owner: String!) {
    onUpdateTodoGroup(owner: $owner) {
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
export const onDeleteTodoGroup = /* GraphQL */ `
  subscription OnDeleteTodoGroup($owner: String!) {
    onDeleteTodoGroup(owner: $owner) {
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

/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateTodoGroupInput = {
  id?: string | null,
  todos: Array< TodoInput >,
  name: string,
  createdAt?: string | null,
  updatedAt?: string | null,
  handleUpdatedAt?: string | null,
};

export type TodoInput = {
  title: string,
  text: string,
  notificatedAt?: string | null,
  index: number,
  createdAt: string,
  updatedAt?: string | null,
  status: TodoStatus,
};

export enum TodoStatus {
  doing = "doing",
  done = "done",
}


export type ModelTodoGroupConditionInput = {
  name?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  handleUpdatedAt?: ModelStringInput | null,
  and?: Array< ModelTodoGroupConditionInput | null > | null,
  or?: Array< ModelTodoGroupConditionInput | null > | null,
  not?: ModelTodoGroupConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type TodoGroup = {
  __typename: "TodoGroup",
  id: string,
  todos:  Array<Todo >,
  name: string,
  createdAt: string,
  updatedAt?: string | null,
  handleUpdatedAt?: string | null,
  owner?: string | null,
};

export type Todo = {
  __typename: "Todo",
  title: string,
  text: string,
  notificatedAt?: string | null,
  index: number,
  createdAt: string,
  updatedAt?: string | null,
  status: TodoStatus,
};

export type UpdateTodoGroupInput = {
  id: string,
  todos?: Array< TodoInput > | null,
  name?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
  handleUpdatedAt?: string | null,
};

export type DeleteTodoGroupInput = {
  id: string,
};

export type ModelTodoGroupFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  handleUpdatedAt?: ModelStringInput | null,
  and?: Array< ModelTodoGroupFilterInput | null > | null,
  or?: Array< ModelTodoGroupFilterInput | null > | null,
  not?: ModelTodoGroupFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelTodoGroupConnection = {
  __typename: "ModelTodoGroupConnection",
  items?:  Array<TodoGroup | null > | null,
  nextToken?: string | null,
};

export type CreateTodoGroupMutationVariables = {
  input: CreateTodoGroupInput,
  condition?: ModelTodoGroupConditionInput | null,
};

export type CreateTodoGroupMutation = {
  createTodoGroup?:  {
    __typename: "TodoGroup",
    id: string,
    todos:  Array< {
      __typename: "Todo",
      title: string,
      text: string,
      notificatedAt?: string | null,
      index: number,
      createdAt: string,
      updatedAt?: string | null,
      status: TodoStatus,
    } >,
    name: string,
    createdAt: string,
    updatedAt?: string | null,
    handleUpdatedAt?: string | null,
    owner?: string | null,
  } | null,
};

export type UpdateTodoGroupMutationVariables = {
  input: UpdateTodoGroupInput,
  condition?: ModelTodoGroupConditionInput | null,
};

export type UpdateTodoGroupMutation = {
  updateTodoGroup?:  {
    __typename: "TodoGroup",
    id: string,
    todos:  Array< {
      __typename: "Todo",
      title: string,
      text: string,
      notificatedAt?: string | null,
      index: number,
      createdAt: string,
      updatedAt?: string | null,
      status: TodoStatus,
    } >,
    name: string,
    createdAt: string,
    updatedAt?: string | null,
    handleUpdatedAt?: string | null,
    owner?: string | null,
  } | null,
};

export type DeleteTodoGroupMutationVariables = {
  input: DeleteTodoGroupInput,
  condition?: ModelTodoGroupConditionInput | null,
};

export type DeleteTodoGroupMutation = {
  deleteTodoGroup?:  {
    __typename: "TodoGroup",
    id: string,
    todos:  Array< {
      __typename: "Todo",
      title: string,
      text: string,
      notificatedAt?: string | null,
      index: number,
      createdAt: string,
      updatedAt?: string | null,
      status: TodoStatus,
    } >,
    name: string,
    createdAt: string,
    updatedAt?: string | null,
    handleUpdatedAt?: string | null,
    owner?: string | null,
  } | null,
};

export type GetTodoGroupQueryVariables = {
  id: string,
};

export type GetTodoGroupQuery = {
  getTodoGroup?:  {
    __typename: "TodoGroup",
    id: string,
    todos:  Array< {
      __typename: "Todo",
      title: string,
      text: string,
      notificatedAt?: string | null,
      index: number,
      createdAt: string,
      updatedAt?: string | null,
      status: TodoStatus,
    } >,
    name: string,
    createdAt: string,
    updatedAt?: string | null,
    handleUpdatedAt?: string | null,
    owner?: string | null,
  } | null,
};

export type ListTodoGroupsQueryVariables = {
  filter?: ModelTodoGroupFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTodoGroupsQuery = {
  listTodoGroups?:  {
    __typename: "ModelTodoGroupConnection",
    items?:  Array< {
      __typename: "TodoGroup",
      id: string,
      todos:  Array< {
        __typename: "Todo",
        title: string,
        text: string,
        notificatedAt?: string | null,
        index: number,
        createdAt: string,
        updatedAt?: string | null,
        status: TodoStatus,
      } >,
      name: string,
      createdAt: string,
      updatedAt?: string | null,
      handleUpdatedAt?: string | null,
      owner?: string | null,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type OnCreateTodoGroupSubscriptionVariables = {
  owner: string,
};

export type OnCreateTodoGroupSubscription = {
  onCreateTodoGroup?:  {
    __typename: "TodoGroup",
    id: string,
    todos:  Array< {
      __typename: "Todo",
      title: string,
      text: string,
      notificatedAt?: string | null,
      index: number,
      createdAt: string,
      updatedAt?: string | null,
      status: TodoStatus,
    } >,
    name: string,
    createdAt: string,
    updatedAt?: string | null,
    handleUpdatedAt?: string | null,
    owner?: string | null,
  } | null,
};

export type OnUpdateTodoGroupSubscriptionVariables = {
  owner: string,
};

export type OnUpdateTodoGroupSubscription = {
  onUpdateTodoGroup?:  {
    __typename: "TodoGroup",
    id: string,
    todos:  Array< {
      __typename: "Todo",
      title: string,
      text: string,
      notificatedAt?: string | null,
      index: number,
      createdAt: string,
      updatedAt?: string | null,
      status: TodoStatus,
    } >,
    name: string,
    createdAt: string,
    updatedAt?: string | null,
    handleUpdatedAt?: string | null,
    owner?: string | null,
  } | null,
};

export type OnDeleteTodoGroupSubscriptionVariables = {
  owner: string,
};

export type OnDeleteTodoGroupSubscription = {
  onDeleteTodoGroup?:  {
    __typename: "TodoGroup",
    id: string,
    todos:  Array< {
      __typename: "Todo",
      title: string,
      text: string,
      notificatedAt?: string | null,
      index: number,
      createdAt: string,
      updatedAt?: string | null,
      status: TodoStatus,
    } >,
    name: string,
    createdAt: string,
    updatedAt?: string | null,
    handleUpdatedAt?: string | null,
    owner?: string | null,
  } | null,
};

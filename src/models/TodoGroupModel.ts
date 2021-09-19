import GqlBaseModel from './GqlBaseModel';
import { createTodoGroup } from 'graphql/mutations'
import { listTodoGroups } from 'graphql/queries'
import { CreateTodoGroupInput, Todo, ListTodoGroupsQuery, TodoGroup } from 'API';

export default class TodoGroupModel extends GqlBaseModel {
  name: string;
  todos: Todo[];
  constructor() {
    super()
    this.name = '';
    this.todos = [];
  }

  public static async create(input: CreateTodoGroupInput) {
    await this.createModel(input, createTodoGroup)
  }
  
  public static async index(): Promise<TodoGroup[]> {
    // ここではエラーハンドリングしなくとも、GqlBaseModelでcatchしたエラーがコンポーネントに返る。
    const data = await this.listModel<ListTodoGroupsQuery>(listTodoGroups)
    return data.listTodoGroups?.items as TodoGroup[]
  }
}
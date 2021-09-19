import GqlBaseModel from './GqlBaseModel';
import { createTodoGroup } from 'graphql/mutations'
import { CreateTodoGroupInput, Todo } from 'API';

export default class TodoGroup extends GqlBaseModel {
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
}
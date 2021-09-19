import GqlBaseModel from './GqlBaseModel';
import {
  CreateTodoGroupInput,
  ListTodoGroupsQuery,
  TodoGroup,
  CreateTodoGroupMutation
} from 'API';
import { createTodoGroup } from 'graphql/mutations';
import { listTodoGroups } from 'graphql/queries';

export default class TodoGroupModel extends GqlBaseModel {
  constructor() {
    super();
  }

  /**
   * TodoGroup新規作成
   * @param input: payload
   */
  public static async create(input: CreateTodoGroupInput): Promise<TodoGroup> {
    const data = await this.createModel<
      CreateTodoGroupInput,
      CreateTodoGroupMutation
    >(input, createTodoGroup);
    return data.createTodoGroup as TodoGroup;
  }

  /**
   * TodoGroup一覧取得
   * @returns TodoGroup一覧
   */
  public static async index(): Promise<TodoGroup[]> {
    // ここではエラーハンドリングしなくとも、GqlBaseModelでcatchしたエラーがコンポーネントに返る。
    const data = await this.listModel<ListTodoGroupsQuery>(listTodoGroups);
    return data.listTodoGroups?.items as TodoGroup[];
  }
}

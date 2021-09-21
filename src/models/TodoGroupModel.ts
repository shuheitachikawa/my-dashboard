import GqlBaseModel from './GqlBaseModel';
import {
  CreateTodoGroupInput,
  ListTodoGroupsQuery,
  TodoGroup,
  CreateTodoGroupMutation,
  UpdateTodoGroupInput,
  UpdateTodoGroupMutation
} from 'API';
import {
  createTodoGroup,
  updateTodoGroup,
  deleteTodoGroup
} from 'graphql/mutations';
import { listTodoGroups } from 'graphql/queries';

export default class TodoGroupModel extends GqlBaseModel {
  constructor() {
    super();
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
   * TodoGroup更新
   * @returns TodoGroup一覧
   */
  public static async update(input: UpdateTodoGroupInput): Promise<TodoGroup> {
    const data = await this.updateModel<
      UpdateTodoGroupInput,
      UpdateTodoGroupMutation
    >(input, updateTodoGroup);
    return data.updateTodoGroup as TodoGroup;
  }

  /**
   * TodoGroup削除
   */
  public static async delete(todoGroupId: string): Promise<void> {
    await this.deleteModel(todoGroupId, deleteTodoGroup);
  }
}

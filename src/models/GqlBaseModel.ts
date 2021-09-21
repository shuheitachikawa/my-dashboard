import { API } from 'aws-amplify';

type graphql = string;

export default class GqlBaseModel {
  constructor() {}

  // 一覧取得
  public static async listModel<T>(query: graphql): Promise<T> {
    try {
      const data: any = await API.graphql({
        query
      });
      if (!data.data) throw new Error('fetch error');
      return data.data;
    } catch (e) {
      console.error(e);
      throw new Error((e as any).message);
    }
  }

  // 新規作成
  public static async createModel<Input, Response>(
    input: Input,
    query: graphql
  ): Promise<Response> {
    try {
      const data: any = await API.graphql({
        query,
        variables: { input }
      });
      if (!data.data) throw new Error('create error');
      return data.data;
    } catch (e) {
      throw new Error((e as any).message);
    }
  }

  // 更新
  public static async updateModel<Input, Response>(
    input: Input,
    query: graphql
  ): Promise<Response> {
    try {
      const data: any = await API.graphql({
        query,
        variables: { input }
      });
      if (!data.data) throw new Error('update error');
      return data.data;
    } catch (e) {
      throw new Error((e as any).message);
    }
  }

  // 削除
  public static async deleteModel(id: string, query: graphql): Promise<void> {
    try {
      await API.graphql({
        query,
        variables: { input: { id } }
      });
    } catch (e) {
      throw new Error((e as any).message);
    }
  }
}

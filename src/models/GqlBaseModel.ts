import { API } from 'aws-amplify';

type graphql = string;

type Response<T> = {
  data: T
}

export default class GqlBaseModel {
  constructor() {}

  public static async createModel<Input>(input: Input, query: graphql) {
    try {
      await API.graphql({
        query,
        variables: { input }
      });
    } catch (e) {
      throw new Error((e as any).message)
    }
  }

  public static async listModel<T>(query: graphql): Promise<T> {
    try {
      const data: any = await API.graphql({
        query
      });
      if (!data.data) throw new Error('fetch error')
      return data.data;
    } catch (e) {
      console.error(e)
      throw new Error((e as any).message)
    }
  }
}
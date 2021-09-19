import { API } from 'aws-amplify';

type graphql = string;

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
}
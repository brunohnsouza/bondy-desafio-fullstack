import type { GraphQLResolveInfo } from 'graphql'
import { login } from './login'
import { mutationTest } from './mutationTest'

export default {
  mutationTest: (
    parent: any,
    args: any,
    context: any,
    info: GraphQLResolveInfo
  ) => mutationTest(parent, args, context, info),

  login: (parent: any, args: any, context: any, info: GraphQLResolveInfo) =>
    login(parent, args, context, info),
}

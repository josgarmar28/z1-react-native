/* THIS IS A GENERATED FILE - DO NOT MODIFY */
/* eslint-disable */
import * as Types from './globalTypes';

import { gql } from '@apollo/client';
import * as ApolloReactCommon from '@apollo/client';
import * as ApolloReactHooks from '@apollo/client';
const defaultOptions = {} as const;
export type LessonsQueryVariables = Types.Exact<{ [key: string]: never }>;

export type LessonsQuery = {
  __typename?: 'Query';
  items?:
    | Array<
        | {
            __typename?: 'Lesson';
            id: string;
            title: string;
            image: string;
            author?: string | undefined | null;
            content: string;
            category: { __typename?: 'Category'; id: string; title: string };
          }
        | undefined
        | null
      >
    | undefined
    | null;
};

export const LessonsDocument = gql`
  query Lessons {
    items {
      id
      title
      image
      author
      category {
        id
        title
      }
      content
    }
  }
`;
export function useLessonsQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<
    LessonsQuery,
    LessonsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return ApolloReactHooks.useQuery<LessonsQuery, LessonsQueryVariables>(
    LessonsDocument,
    options,
  );
}
export function useLessonsLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    LessonsQuery,
    LessonsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return ApolloReactHooks.useLazyQuery<LessonsQuery, LessonsQueryVariables>(
    LessonsDocument,
    options,
  );
}
export type LessonsQueryHookResult = ReturnType<typeof useLessonsQuery>;
export type LessonsLazyQueryHookResult = ReturnType<typeof useLessonsLazyQuery>;
export type LessonsQueryResult = ApolloReactCommon.QueryResult<
  LessonsQuery,
  LessonsQueryVariables
>;

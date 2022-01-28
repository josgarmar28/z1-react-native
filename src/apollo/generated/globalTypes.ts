/* THIS IS A GENERATED FILE - DO NOT MODIFY */
/* eslint-disable */
import {
  FieldPolicy,
  FieldReadFunction,
  TypePolicies,
  TypePolicy,
} from '@apollo/client/cache';
export type Maybe<T> = T | undefined | null;
export type InputMaybe<T> = T | undefined | null;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `Upload` scalar type represents a file upload. */
  Upload: string;
};

export enum CacheControlScope {
  Private = 'PRIVATE',
  Public = 'PUBLIC',
}

export type Category = {
  __typename?: 'Category';
  id: Scalars['ID'];
  title: Scalars['String'];
};

export type Lesson = {
  __typename?: 'Lesson';
  author?: Maybe<Scalars['String']>;
  category: Category;
  content: Scalars['String'];
  id: Scalars['ID'];
  image: Scalars['String'];
  title: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  items?: Maybe<Array<Maybe<Lesson>>>;
};

export type CategoryKeySpecifier = ('id' | 'title' | CategoryKeySpecifier)[];
export type CategoryFieldPolicy = {
  id?: FieldPolicy<any> | FieldReadFunction<any>;
  title?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type LessonKeySpecifier = (
  | 'author'
  | 'category'
  | 'content'
  | 'id'
  | 'image'
  | 'title'
  | LessonKeySpecifier
)[];
export type LessonFieldPolicy = {
  author?: FieldPolicy<any> | FieldReadFunction<any>;
  category?: FieldPolicy<any> | FieldReadFunction<any>;
  content?: FieldPolicy<any> | FieldReadFunction<any>;
  id?: FieldPolicy<any> | FieldReadFunction<any>;
  image?: FieldPolicy<any> | FieldReadFunction<any>;
  title?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type QueryKeySpecifier = ('items' | QueryKeySpecifier)[];
export type QueryFieldPolicy = {
  items?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type StrictTypedTypePolicies = {
  Category?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | CategoryKeySpecifier
      | (() => undefined | CategoryKeySpecifier);
    fields?: CategoryFieldPolicy;
  };
  Lesson?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | LessonKeySpecifier
      | (() => undefined | LessonKeySpecifier);
    fields?: LessonFieldPolicy;
  };
  Query?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | QueryKeySpecifier
      | (() => undefined | QueryKeySpecifier);
    fields?: QueryFieldPolicy;
  };
};
export type TypedTypePolicies = StrictTypedTypePolicies & TypePolicies;
export const operations = {
  Query: {
    Lessons: 'Lessons',
  },
};

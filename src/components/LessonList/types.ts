import { Lesson } from 'apollo/generated/globalTypes';

export type Props = {
  lessons: (Lesson | null | undefined)[] | null | undefined;
  filter: string;
};

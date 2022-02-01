import { LessonNormalized } from 'models/Lesson';

export type Props = {
  lessons: LessonNormalized[];
  filter: string;
};

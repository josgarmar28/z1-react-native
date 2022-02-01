import { LessonNormalized } from 'models/Lesson';

export type Props = {
  lesson: LessonNormalized;
  onPress: (item: LessonNormalized) => void;
};

import { Lesson } from 'models/Lesson';

export type Props = {
  lesson: Lesson;
  onPress: (item: Lesson) => void;
};

import { Lesson } from '../../../apollo/generated/globalTypes';

export type Props = {
  lesson: Lesson | null | undefined;
  onPress: (item: Lesson | null | undefined) => void;
};
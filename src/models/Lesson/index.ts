import { Lesson } from 'apollo/generated/globalTypes';

export const normalizeLesson = (lesson: Lesson) => ({
  __typename: 'Lesson',
  author: lesson.author,
  category: lesson.category,
  content: lesson.content,
  id: lesson.id,
  image: lesson.image,
  title: lesson.title,
});

export type LessonNormalized = ReturnType<typeof normalizeLesson>;

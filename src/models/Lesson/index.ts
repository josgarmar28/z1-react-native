import { Lesson as LessonType } from 'apollo/generated/globalTypes';

export const normalizeLesson = (lesson: LessonType) => ({
  author: lesson.author ?? '',
  category: lesson.category,
  content: lesson.content,
  id: lesson.id,
  image: lesson.image,
  title: lesson.title,
});

export type Lesson = ReturnType<typeof normalizeLesson>;

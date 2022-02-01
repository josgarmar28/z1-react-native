import { Lesson as LessonType } from 'apollo/generated/globalTypes';
import { LessonsQuery } from 'apollo/generated/lessons';
import { Lesson, normalizeLesson } from 'models/Lesson';

export const normalizeLessons = (learn?: LessonsQuery) => ({
  items: learn?.items
    ?.filter((x): x is LessonType => x !== null)
    .map(normalizeLesson) as Lesson[],
});

export type Learn = ReturnType<typeof normalizeLessons>;

import { Lesson } from 'apollo/generated/globalTypes';
import { LessonsQuery } from 'apollo/generated/lessons';
import { LessonNormalized, normalizeLesson } from 'models/Lesson';

export const normalizeLessons = (learn: LessonsQuery | undefined) => ({
  lessons: learn?.items
    ?.filter((x): x is Lesson => x !== null)
    .map(normalizeLesson) as LessonNormalized[],
});

export type Learn = ReturnType<typeof normalizeLessons>;

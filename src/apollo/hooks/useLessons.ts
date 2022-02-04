import { useMemo } from 'react';
import { useLessonsQuery } from 'apollo/generated/lessons';
import { normalizeLessons } from 'models/Lessons';

export const useLessons = () => {
  const { data, loading, refetch } = useLessonsQuery();

  const lessons = useMemo(() => normalizeLessons(data), [data]);

  return { lessons, loading, refetch };
};

import { useMemo, useState } from 'react';
import { useLessonsQuery } from 'apollo/generated/lessons';
import { normalizeLessons } from 'models/Lessons';

const useConnect = () => {
  const { data } = useLessonsQuery();

  const { items } = normalizeLessons(data);

  const allCategories = items?.map((lesson) => {
    return lesson?.category.title;
  });

  const categoryList = Array.from(new Set(allCategories));
  categoryList.push('All');
  categoryList.sort();

  const [filter, setFilter] = useState<string>('All');

  const showAllLessons = filter === 'All';

  var filteredList = useMemo(() => {
    if (showAllLessons) return items;
    return items?.filter((lesson) => filter === lesson?.category.title);
  }, [filter, items, showAllLessons]);

  return {
    categoryList,
    filteredList,
    filter,
    setFilter,
  };
};

export default useConnect;

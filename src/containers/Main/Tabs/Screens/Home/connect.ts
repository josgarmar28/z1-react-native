import { useMemo, useState } from 'react';
import { useLessons } from 'apollo/hooks/useLessons';

const useConnect = () => {
  const { lessons } = useLessons();

  const allCategories = lessons.items?.map((lesson) => {
    return lesson?.category.title;
  });

  const categoryList = Array.from(new Set(allCategories));
  categoryList.push('All');
  categoryList.sort();

  const [filter, setFilter] = useState<string>('All');

  const showAllLessons = filter === 'All';

  var filteredList = useMemo(() => {
    if (showAllLessons) return lessons.items;
    return lessons?.items.filter((lesson) => filter === lesson?.category.title);
  }, [filter, lessons, showAllLessons]);

  return {
    categoryList,
    filteredList,
    filter,
    setFilter,
  };
};

export default useConnect;

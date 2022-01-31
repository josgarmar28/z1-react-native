import { useMemo, useState } from 'react';
import { useLessonsQuery } from 'apollo/generated/lessons';

const useConnect = () => {
  const { data } = useLessonsQuery();

  const lessons = data?.items;
  const categories = lessons?.map((lesson) => {
    return lesson?.category.title;
  });
  const categoryList: (string | undefined)[] = Array.from(new Set(categories));
  categoryList.push('All');
  categoryList.sort();

  const [filter, setFilter] = useState<string>('All');

  const selector = filter === 'All';

  var filteredList = useMemo(() => {
    if (selector) return lessons;
    return lessons?.filter((lesson) => filter === lesson?.category.title);
  }, [filter, lessons, selector]);

  return {
    categoryList,
    filteredList,
    filter,
    setFilter,
  };
};

export default useConnect;

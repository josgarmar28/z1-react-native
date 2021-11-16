import React, { useMemo, useState } from 'react'
import { View, FlatList } from 'react-native';

import { CategoryCard } from '../components/categoryCard';
import { LessonCard } from '../components/lessonCard';
import { useLesson } from '../hooks/useLesson';
import { useCategory } from '../hooks/useCategory';
import { HomeScreenCategoryBar, HomeScreenTitle } from '../themes/AppThemes';

export const HomeScreen = () => {

     const { lessonList } = useLesson();
     const { categoryList } = useCategory();
     const [filtro, setFiltro] = useState<string>('All');

     var filteredList = useMemo(
        () => {
          if (filtro === 'All' ) return lessonList
          return lessonList.filter(lesson => filtro === lesson.category.title)
        },
        [filtro, lessonList]
      )

     return (
            <View style={{ alignItems: 'center'}}>

                <HomeScreenTitle>Learn</HomeScreenTitle>
                
                <HomeScreenCategoryBar
                    data={categoryList}
                    renderItem={
                         ({ item }) => 
                         ( <CategoryCard category={ item } setFiltro={setFiltro} /> )}
                    horizontal= {true}
                />
                
                <FlatList 
                    data={ filteredList }
                    showsVerticalScrollIndicator={ false }
                    numColumns={ 2 }
                    renderItem={ 
                        ({ item }) =>
                        ( <LessonCard lesson={ item }/> )}
                />

            </View>
    )
}
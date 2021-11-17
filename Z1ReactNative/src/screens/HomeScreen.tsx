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

    const selector = filtro === 'All';

    var filteredList = useMemo(
    () => {
        if ( selector ) return lessonList
        return lessonList.filter(lesson => filtro === lesson.category.title)
    },
    [filtro, lessonList]
    )

    return (
        <View style={{ alignItems: 'center'}}>
            <View style={{ alignItems: 'center'}}>
            <HomeScreenTitle>Learn</HomeScreenTitle>
            
            <HomeScreenCategoryBar
                data={ categoryList }
                showsHorizontalScrollIndicator={ false }
                renderItem={
                        ({ item }) => 
                        ( <CategoryCard category={ item } filtro={ filtro } setFiltro={ setFiltro } /> )}
                horizontal= {true}
            />
            
            {selector ?
            
            <FlatList 
                key={ '2' }
                data={ filteredList }
                showsVerticalScrollIndicator={ false }
                numColumns= { 2 }
                renderItem={ 
                    ({ item }) => ( <LessonCard lesson={ item } selector={ selector }/> )
                }
            />
            :
            <FlatList 
                key={ '1' }
                data={ filteredList }
                showsVerticalScrollIndicator={ false }
                numColumns= { 1 }
                renderItem={ 
                    ({ item }) => ( <LessonCard lesson={ item } selector={ selector }/> )
                }
            />

            }
            </View>

        </View>
    )
}
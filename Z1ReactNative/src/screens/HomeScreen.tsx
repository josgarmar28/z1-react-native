import React from 'react'
import { FlatList, Text, View, } from 'react-native'


import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { CategoryCard } from '../components/categoryCard';
import { LessonCard } from '../components/lessonCard';
import { useLesson } from '../hooks/useLesson';

export const HomeScreen = () => {

//     // const { top } = useSafeAreaInsets();
     const { lessonList } = useLesson();
     return (
         
            <View
                style={{ alignItems: 'center' }}
            >
                <Text>Learn</Text>
                <FlatList 
                    data={lessonList}
                    renderItem={ ({ item }) => ( <CategoryCard lesson={ item } /> )}
                    horizontal= {true}

                />
                <FlatList 
                    data={ lessonList }
                    showsVerticalScrollIndicator={ false }
                    numColumns={ 2 }

                    renderItem={ ({ item }) => ( <LessonCard lesson={ item } /> )}

                />
            </View>
    )
}


import React, { useMemo, useState } from 'react'
import { FlatList, StyleSheet, Text, View, } from 'react-native'

import { CategoryCard } from '../components/categoryCard';
import { LessonCard } from '../components/lessonCard';
import { useLesson } from '../hooks/useLesson';
import { Title } from '../interfaces/lessonInterfaces';
import { useCategory } from '../hooks/useCategory';

export const HomeScreen = () => {

     const { lessonList } = useLesson();
     const { categoryList } = useCategory();
     const [filtro, setFiltro] = useState<string>('All');

     const filteredList = useMemo(
        () => {
          if (filtro === 'All' ) return lessonList
          return lessonList.filter(lesson => filtro === lesson.category.title)
        },
        [filtro, lessonList]
      )

     return (
            <View
                style={{ alignItems: 'center'}}
            >
                <Text style={styles.header}>Learn</Text>
                <FlatList
                    style={styles.listaHorizontal} 
                    data={categoryList}
                    renderItem={ ({ item }) => ( <CategoryCard category={ item } setFiltro={setFiltro} /> )}
                    horizontal= {true}
                />
                
                <FlatList 
                    data={ filteredList }
                    showsVerticalScrollIndicator={ false }
                    numColumns={ 2 }
                    renderItem={ ({ item }) => ( <LessonCard lesson={ item } /> )}

                />
            </View>
    )
}

const styles = StyleSheet.create({
    header: {
        fontSize: 30,
        marginTop: 25,
        fontWeight: 'bold',
    },
    listaHorizontal: {
        marginTop: 12,
        marginBottom: 22,
        marginLeft: 10,
        height: 50, 
    },
});



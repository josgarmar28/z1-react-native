import React from 'react'
import { FlatList, StyleSheet, Text, View, } from 'react-native'

import { CategoryCard } from '../components/categoryCard';
import { LessonCard } from '../components/lessonCard';
import { useLesson } from '../hooks/useLesson';

export const HomeScreen = () => {

     const { lessonList } = useLesson();

     return (
            <View
                style={{ alignItems: 'center' }}
            >
                <Text style={styles.header}>Learn</Text>

                <FlatList
                    style={styles.listaHorizontal} 
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
    }
});



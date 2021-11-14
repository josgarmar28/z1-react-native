import React from 'react'
import { Text, View, TouchableOpacity, StyleSheet, Dimensions, Image } from 'react-native';

import { Lesson } from '../interfaces/LessonInterfaces';

interface Props {
    lesson: Lesson;
}

export const CategoryCard = ({ lesson}: Props ) => {

    return (
        <TouchableOpacity
            activeOpacity={ 0.9 } 
        >
            <View style={
                styles.cardContainer
            }>
                <Text style={ styles.name }>
                    { lesson.category.title }
                </Text>
            </View>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    cardContainer: {
        marginHorizontal: 7,
        backgroundColor: 'grey',
        borderRadius: 10,
    },
    name: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        marginHorizontal: 10,
        marginVertical: 5,
        top: -2,
    },
});
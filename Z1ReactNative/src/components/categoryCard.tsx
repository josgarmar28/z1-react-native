import { useNavigation } from '@react-navigation/core';
import React, { useEffect, useRef, useState } from 'react'
import { Text, View, TouchableOpacity, StyleSheet, Dimensions, Image } from 'react-native';

import { Lesson, Title } from '../interfaces/lessonInterfaces';

const windowWidth = Dimensions.get('window').width

interface Props {
    lesson: Lesson;
}

export const CategoryCard = ({ lesson}: Props ) => {

    const [bgColor, setBgColor] = useState('grey');
    const isMounted = useRef(true);
    const navigation = useNavigation();
    const urlImagen = lesson.image; 

    return (
        <TouchableOpacity
            activeOpacity={ 0.9 } 
        >
            <View style={{
                ...styles.cardContainer,
            }}>
            
            <Text style={ styles.name }>
                { lesson.category.title }
            </Text>
            </View>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    cardContainer: {
        marginHorizontal: 10,
        backgroundColor: 'grey',
        marginBottom: 25,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,

    },
    name: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        top: 0,
        left: 10
    },
});
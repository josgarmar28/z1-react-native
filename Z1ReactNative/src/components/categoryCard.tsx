import React from 'react'
import { Text, View, TouchableOpacity, StyleSheet, Dimensions, Image } from 'react-native';

import { Lesson, Title, Category } from '../interfaces/lessonInterfaces';
import { useState } from 'react';

interface Props {
    category: string;
    setFiltro: React.Dispatch<React.SetStateAction<string>>;
}


export const CategoryCard = ({ category, setFiltro}: Props ) => {    

    return (
        <TouchableOpacity
            activeOpacity={ 0.9 } 
            onPress={() => setFiltro(category)}
        >
            <View style={
                styles.cardContainer
            }>
                <Text style={ styles.name }>
                    { category }
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
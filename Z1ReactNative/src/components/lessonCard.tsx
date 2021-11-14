import React from 'react'
import { Text, View, StyleSheet, Dimensions, Image} from 'react-native';

import { Lesson, Category, Title } from '../interfaces/lessonInterfaces';

const windowWidth = Dimensions.get('window').width

interface Props {
    lesson: Lesson;
    filtro: string;
    setFiltro: React.Dispatch<React.SetStateAction<string>>;
}

export const LessonCard = ({ lesson, filtro }: Props ) => {

    const urlImagen = lesson.image; 
      
    {if (lesson.category.title.match(filtro) || filtro.match('Any')) {
        return (
            <View style={styles.cardContainer}>
                <Image
                    style={styles.image}
                    source={{
                    uri: urlImagen,
                    }}
                />

                <Text style={ styles.category }>
                    {lesson.category.title }
                </Text>
                <Text style={ styles.title }>
                    {lesson.title }
                </Text>
                <Text style={ styles.author }>
                    {lesson.author }
                </Text>
                
            </View>
    )
    } else{
        return (
            <>
            </>
        )
    } }
    
}


const styles = StyleSheet.create({
    cardContainer: {
        marginHorizontal: 5,
        backgroundColor: 'grey',
        width: windowWidth * 0.45,
        marginBottom: 10,
        borderRadius: 10,
        height:300,
    },
    image: {
        width:'100%',
        height: '38%',
        borderTopLeftRadius: 10,
        borderTopRightRadius:10,
    },
    category: {
        color: 'yellow',
        fontSize: 15,
        marginHorizontal:10,
        textTransform: 'uppercase',
        fontWeight: 'bold',
        marginTop: 10,
        marginBottom: 5,
    },
    title:{
        color: 'white',
        fontSize: 18,
        marginHorizontal: 10,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    author:{
        color: 'white',
        fontSize: 13,
        marginHorizontal: 10,
        marginBottom: 5,
    }
});
import { StackScreenProps } from '@react-navigation/stack';
import React from 'react'
import { Image, StyleSheet, Text, View, FlatList, Button } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { RootStackParams } from '../navigator/Navigator';
import { Lesson } from '../interfaces/lessonInterfaces';

interface Props extends StackScreenProps<RootStackParams, 'DetailScreen'> {};


export const DetailScreen = ({ navigation, route }: Props) => {
    const { lesson } = route.params;
    const urlImagen = lesson.image; 

    return (
        
        <ScrollView
                showsVerticalScrollIndicator={ false }
                style={{
                    ...StyleSheet.absoluteFillObject,
                }}
        >
            
            <View style={styles.container}>
                <View style={styles.backButton}>
                    <TouchableOpacity 
                        activeOpacity={ 0.75 }
                        style={[
                            styles.backButton,
                        ]}
                        onPress={ () => navigation.pop() }
                    >
                        <Text>X</Text>
                    </TouchableOpacity>
                </View>

                <Text style={styles.article}>
                    Article
                </Text>

                <Text style={ styles.title }>
                    {lesson.title }
                </Text>

                <Text style={ styles.author }>
                    {lesson.author }
                </Text>

                <Image
                    style={styles.image}
                    source={{
                    uri: urlImagen,
                    }}
                />

                <Text style={ styles.author }>
                    {lesson.content }
                </Text>

            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    backButton: {
        width:20,
        height: 20,
    },
    container: {
        flex:1,
        alignContent: 'center',
        marginHorizontal:20,
        marginTop: 20,
    },
    article: {
        color: 'yellow',
        fontSize: 13,
        marginHorizontal:10,
        textTransform: 'uppercase',
        marginTop: 10,
        marginBottom: 5,

    },
    image: {
        width:'100%',
        height: 300,
        borderRadius: 10,
        marginVertical: 7,

    },
    title:{
        color: 'white',
        fontSize: 30,
        marginHorizontal: 10,
        fontWeight: 'bold',
        marginVertical: 7,
    },
    author:{
        color: 'white',
        fontSize: 13,
        marginHorizontal: 10,
        marginVertical: 7,
    }
});

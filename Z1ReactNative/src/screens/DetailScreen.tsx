import { StackScreenProps } from '@react-navigation/stack';
import React from 'react'
import { StyleSheet, Text } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Entypo';
import { RootStackParams } from '../navigator/Navigator';
import { DetailScreenContainer, DetailScreenArticle, DetailScreenTitle, DetailScreenText, DetailScreenImage, DetailScreenBackButton } from '../themes/AppThemes';

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
            
            <DetailScreenContainer>

                <DetailScreenBackButton>

                    <TouchableOpacity 
                        activeOpacity={ 0.75 }
                        onPress={ () => navigation.pop() }
                    >

                        <Icon name="cross" size={20} color="#FFFFFF"/>

                    </TouchableOpacity>

                </DetailScreenBackButton> 

                <DetailScreenArticle>
                    Article
                </DetailScreenArticle>

                <DetailScreenTitle>
                    { lesson.title }
                </DetailScreenTitle>

                <DetailScreenText>
                    { lesson.author }
                </DetailScreenText>

                <DetailScreenImage
                    source={{ uri: urlImagen }}
                />

                <DetailScreenText>
                    { lesson.content }
                </DetailScreenText>

            </DetailScreenContainer>

        </ScrollView>
    )
}
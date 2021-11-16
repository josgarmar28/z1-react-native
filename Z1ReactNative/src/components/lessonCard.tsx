import React from 'react'
import { Dimensions, TouchableOpacity } from 'react-native';

import { Lesson } from '../interfaces/lessonInterfaces';
import { useNavigation } from '@react-navigation/core';
import { useRef } from 'react';
import { LessonCardContainer, LessonCardImage, LessonCardCategory, LessonCardTitle, LessonCardAuthor, HLessonCardContainer, HLessonCardImage, HLessonCardTitle, HLessonCardAuthor, HLessonCardArticle } from '../themes/AppThemes';

const windowWidth = Dimensions.get('window').width

interface Props {
    lesson: Lesson;
    selector: boolean;
}

export const LessonCard = ({ lesson, selector }: Props ) => {

    const urlImagen = lesson.image; 
    const isMounted = useRef(true);
    const navigation = useNavigation();
      

        return (
            <TouchableOpacity
            activeOpacity={ 0.9 }
            onPress={ 
                () => navigation.navigate('DetailScreen', { 
                    lesson: lesson
                }) 
            } 
            >
            
            { selector ?

                <LessonCardContainer style={{width: windowWidth * 0.45}}>
                    <LessonCardImage
                        source={{uri: urlImagen}}
                    />

                    <LessonCardCategory>
                        {lesson.category.title }
                    </LessonCardCategory>

                    <LessonCardTitle>
                        {lesson.title }
                    </LessonCardTitle>

                    <LessonCardAuthor>
                        {lesson.author }
                    </LessonCardAuthor>
                    
                </LessonCardContainer>
            :
                <HLessonCardContainer style={{width: windowWidth * 0.9}}>
                    <HLessonCardImage
                        source={{uri: urlImagen}}
                    />

                    <HLessonCardArticle>
                        Article
                    </HLessonCardArticle>

                    <HLessonCardTitle>
                        {lesson.title }
                    </HLessonCardTitle>

                    <HLessonCardAuthor>
                        {lesson.author }
                    </HLessonCardAuthor>
                    
                </HLessonCardContainer>

            }

            </TouchableOpacity>
    )
}
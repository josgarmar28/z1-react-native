import { useState, useEffect } from 'react';
import { query } from '../api/lessonApi';
import { Lesson } from '../interfaces/lessonInterfaces';

export const useLesson = ( ) => {

    const [ isLoading, setIsLoading ] = useState(true)
    const [ lessonList, setLessonList ] = useState<Lesson[]>({} as Lesson[])

    const loadAudio = async() => {
        const result = await query;
        setLessonList(result.data.items);
        setIsLoading(false);
    }

    useEffect(() => {
        loadAudio();
    }, [])

    return {
        isLoading,
        lessonList
    }
}

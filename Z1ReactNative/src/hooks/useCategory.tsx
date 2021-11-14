import { useEffect, useRef, useState } from 'react';
import { query } from '../api/lessonApi';
import { Data, Category, Lesson } from '../interfaces/lessonInterfaces';


export const useCategory = () => {


    const [ categoryList, setCategoryList ] = useState<string[]>([]);
        

    const loadCategories = async() => {      
        const result = await query;
        crearLista( result.data.items ) ;
    }


    const crearLista = (lessons : Lesson[]) => {

        const newCategoryTitle: string[]= lessons.map(({category}) => {
            const categoryTitle = category.title;
            return categoryTitle;  
        });
        let filteredCategory = Array.from(new Set(newCategoryTitle));
        filteredCategory.push('All');
        filteredCategory.sort();
       setCategoryList(filteredCategory);
    }

    
    useEffect(() => {
        loadCategories();
    }, [])


    return {
        categoryList
    }

}
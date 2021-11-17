import React from 'react'
import { TouchableOpacity } from 'react-native';

import { CategoryCardContainer, CategoryCardName, SelectedContainer } from '../themes/AppThemes';

interface Props {
    category: string;
    filtro: string;
    setFiltro: React.Dispatch<React.SetStateAction<string>>;
}


export const CategoryCard = ({ category, filtro, setFiltro }: Props ) => {    

    return (
        <TouchableOpacity
            activeOpacity={ 0.9 } 
            onPress={() => setFiltro(category)}
        >

        { category === filtro ?
            <SelectedContainer>
                <CategoryCardName>
                    { category }
                </CategoryCardName>
            </SelectedContainer>
        :
            <CategoryCardContainer>
                <CategoryCardName>
                    { category }
                </CategoryCardName>
            </CategoryCardContainer>
        }

        </TouchableOpacity>
    )
}
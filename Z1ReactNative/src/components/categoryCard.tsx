import React from 'react'
import { TouchableOpacity} from 'react-native';

import { CategoryCardContainer, CategoryCardName } from '../themes/AppThemes';

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
            <CategoryCardContainer>

                <CategoryCardName>
                    { category }
                </CategoryCardName>

            </CategoryCardContainer>

        </TouchableOpacity>
    )
}
import styled from 'styled-components/native';

//HomeScreen
export const HomeScreenTitle = styled.Text`
    margin-top: 15px;
    margin-bottom: 5px;
    text-align: center;
    font-size: 28px;
    font-weight: 700;
    letter-spacing: 0.25px;
    color: #FFFFFF;
`;

export const HomeScreenCategoryBar = styled.FlatList`
    margin-top: 12px;
    margin-bottom: 12px;
    margin-left: 10px;
    haight: 50px;
`;

//LessonCard
export const LessonCardContainer = styled.View`
    margin-horizontal: 5px;
    margin-bottom: 10px;
    border-radius: 10px;
    background-color: #60306f;
    shadow-color: #000;
    height:300px;
`;

export const LessonCardImage = styled.Image`
    width: 100%;
    height: 38%;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
`;

export const LessonCardCategory = styled.Text` 
    margin-horizontal: 10px;
    margin-top: 10px;
    margin-bottom: 5px;
    color: #fddb6f;
    font-size: 15px;
    text-transform: uppercase;
    font-weight: bold;
`;

export const LessonCardTitle = styled.Text` 
    margin-horizontal: 10px;
    margin-bottom: 5px;
    color: #FFFFFF;
    font-size: 18px;
    font-weight: bold;
`;

export const LessonCardAuthor = styled.Text` 
    margin-horizontal: 10px;
    margin-bottom: 5px;
    color: #FFFFFF;
    font-size: 13px;
`;


//LessonCard - Horizontal
export const HLessonCardContainer = styled.View`
    margin-bottom: 10px;
    border-radius: 10px;
    background-color: #60306f;
    shadow-color: #000;
    height:125px;
`;

export const HLessonCardImage = styled.Image`
    width: 30%;
    height: 107px;
    margin-vertical: 8px;
    margin-horizontal: 8px;
    border-radius: 10px;
`;

export const HLessonCardArticle = styled.Text` 
    position: absolute;
    left: 115px;
    margin-horizontal: 10px;
    margin-top: 10px;
    margin-bottom: 5px;
    color: #fddb6f;
    font-size: 15px;
    font-weight: bold;
    text-transform: uppercase;
`;

export const HLessonCardTitle = styled.Text` 
    position: absolute;
    top: 35px;
    left: 115px;
    width: 220px;
    margin-horizontal: 10px;
    margin-bottom: 5px;
    color: #FFFFFF;
    font-size: 18px;
    font-weight: bold;
`;

export const HLessonCardAuthor = styled.Text` 
    position: absolute;
    bottom: 5px;
    left: 115px;
    margin-horizontal: 10px;
    margin-bottom: 5px;
    color: #FFFFFF;
    font-size: 13px;
`;

//Categories
export const CategoryCardContainer = styled.View`
    margin-horizontal: 7px;
    margin-bottom: 7px;
    border-radius: 10px;
    background-color: #593c71;
    shadow-color: #000;
    height: 37px;
`;

export const SelectedContainer = styled.View`
    margin-horizontal: 7px;
    margin-bottom: 7px;
    border-radius: 10px;
    background-color: #b77ac4;
    shadow-color: #000;
    height: 37px;
`;

export const CategoryCardName = styled.Text`
    font-size: 18px;
    font-weight: bold;
    margin-horizontal: 10px;
    margin-vertical: 6px;
    align-self: center;
`;

//DetailScreen

export const DetailScreenBackButton = styled.View`
    width:30px;
    border-radius: 100px;
    justify-content: center;
`;

export const DetailScreenContainer = styled.View`
    flex:1;
    align-content: center;
    margin-horizontal: 20px;
    margin-top: 20px;
`;

export const DetailScreenArticle = styled.Text`
    font-size: 13px;
    text-transform: uppercase;
    color: #fddb6f;
    margin-horizontal: 10px;
    margin-top: 10px;
    margin-bottom: 5px;
`;

export const DetailScreenTitle = styled.Text`
    font-size: 30px;
    font-weight: bold;
    color: #FFFFFF;
    margin-horizontal: 10px;
    margin-vertical: 7px;
`;

export const DetailScreenText = styled.Text`
    font-size: 13px;
    color: #FFFFFF;
    margin-horizontal: 10px;
    margin-vertical: 7px;
`;

export const DetailScreenImage = styled.Image`
    width: 100%;
    height: 300px;
    border-radius: 10px;
    margin-vertical: 7px;
`;

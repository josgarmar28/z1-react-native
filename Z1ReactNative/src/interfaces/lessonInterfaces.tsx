export interface ReqResListado {
    data: Data;
}

export interface Data {
    items: Lesson[];
}

export interface Lesson {
    __typename: null | string;
    id:       string;
    title:    string;
    image:    string;
    author:   null | string;
    category: Category;
    content:  string;
}

export interface Category {
    id:    string;
    title: string//Title;
}

// export enum Title {
//     HarmReduction = "Harm Reduction",
//     Integration = "Integration",
//     Mindfulness = "Mindfulness",
//     Tripping = "Tripping",
// }

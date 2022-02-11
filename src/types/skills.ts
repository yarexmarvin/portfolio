import { ThemeTypings } from "@chakra-ui/react";
import { IconType } from "react-icons/lib";


export interface ISkills {
    skills: Skills[],
    isLoading: boolean,
    error: string | null
}

export type Skills = Skill[];

export interface Skill{
    title: string, 
    icon: IconType | null,
    type: TextType | null,
    color: ThemeTypings['colorSchemes'] | undefined,  
}


export enum TextType  {
    CODE = 'CODE',
    TAG = 'TAG',
    KBD = 'KBD',
}
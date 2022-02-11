import { Code, ListIcon, ListItem, Tag, Text } from "@chakra-ui/react"
import { FC } from "react"
import { AiOutlineCode } from "react-icons/ai"
import { Skill, Skills, TextType } from "../types/skills"


interface ISkillBlock {
    skills: Skills
}

const getFormattedSkill = (skill:Skill) => {
    switch(skill.type){
        case TextType.CODE : return <Code key={`${skill.title}`} colorScheme={skill.color}>{skill.title}{skill.icon && <ListIcon as={skill.icon} />}</Code>
        case TextType.TAG : return <Tag key={`${skill.title}`}  colorScheme={skill.color}>{skill.title}{skill.icon && <ListIcon as={skill.icon} />}</Tag>
        case TextType.KBD : return <Text as='kbd' key={`${skill.title}`}  display='inline-block' >{skill.title}{skill.icon && <ListIcon as={skill.icon} />}</Text>
        default : return <Text key={`${skill.title}`}  display='inline-block' >{skill.title}{skill.icon && <ListIcon as={skill.icon} />}</Text>
    }
}

const SkillBlock:FC<ISkillBlock> = ({skills}) => {
    return <ListItem >
        <ListIcon as={AiOutlineCode} />
        {skills.map(skill => getFormattedSkill(skill))}
    </ListItem>
}

export default SkillBlock
import { AiFillGitlab } from "react-icons/ai";
import { DiNpm } from "react-icons/di";
import { FaGitAlt } from "react-icons/fa";
import { MdHttp } from "react-icons/md";
import {
    SiApollographql,
  SiCss3,
  SiEslint,
  SiGithub,
  SiGraphql,
  SiHtml5,
  SiJavascript,
  SiJest,
  SiMobx,
  SiNextdotjs,
  SiPrettier,
  SiReact,
  SiReactrouter,
  SiRedux,
  SiReduxsaga,
  SiSass,
  SiTestinglibrary,
  SiTypescript,
  SiWebpack,
  SiYarn,
} from "react-icons/si";
import { Skill, Skills, TextType } from "../../../types/skills";

export const skills: Skills[] = [
  [
    {
      title: "HTML5",
      icon: SiHtml5,
      type: TextType.TAG,
      color: "red",
    },
    {
      title: "CSS3",
      icon: SiCss3,
      type: TextType.CODE,
      color: "cyan",
    },
  ],
  [
    {
      title: "JavaScript",
      icon: SiJavascript,
      type: TextType.CODE,
      color: "yellow",
    },
    {
      title: "TypeScript",
      icon: SiTypescript,
      type: TextType.CODE,
      color: "blue",
    },
  ],
  [
    {
      title: "React",
      icon: SiReact,
      type: TextType.CODE,
      color: "facebook",
    },
    {
      title: "React Hooks",
      icon: null,
      type: TextType.CODE,
      color: "facebook",
    },
  ],
  [
    {
      title: "Redux",
      icon: SiRedux,
      type: TextType.TAG,
      color: "purple",
    },
    {
      title: "Redux-Toolkit",
      icon: null,
      type: TextType.TAG,
      color: "purple",
    },
  ],
  [
    {
      title: "Redux-Thunk",
      icon: null,
      type: null,
      color: "purple",
    },
    {
      title: "Redux-Saga",
      icon: SiReduxsaga,
      type: TextType.CODE,
      color: "green",
    },
  ],
  [
    {
      title: "REST API",
      icon: MdHttp,
      type: null,
      color: undefined,
    },
    {
      title: "Axios",
      icon: null,
      type: null,
      color: "blue",
    },
  ],
  [
    {
      title: "MobX",
      icon: SiMobx,
      type: TextType.CODE,
      color: "orange",
    },
  ],
  [
    {
      title: "React-Router",
      icon: SiReactrouter,
      type: null,
      color: undefined,
    },
    {
      title: "React Navigation",
      icon: null,
      type: null,
      color: undefined,
    },
  ],
  [
    {
      title: "React-Query",
      icon: SiReactrouter,
      type: null,
      color: "blue",
    },
    {
      title: "RTK-Query",
      icon: null,
      type: null,
      color: "purple",
    },
  ],
  [
    {
      title: "React-Native",
      icon: null,
      type: null,
      color: "cyan",
    },
    {
      title: "Next",
      icon: SiNextdotjs,
      type: TextType.TAG,
      color: 'grey',
    },
  ],
  [
    {
      title: "VK API",
      icon: null,
      type: TextType.TAG,
      color: "blue",
    },
    {
      title: "VK Bridge",
      icon: null,
      type: null,
      color: "blue",
    },
    {
      title: "VKUI",
      icon: null,
      type: null,
      color: "blue",
    },
  ],
  [
    {
      title: "Jest",
      icon: SiJest,
      type: TextType.TAG,
      color: "whatsapp",
    },
    {
      title: "Testin-Library",
      icon: SiTestinglibrary,
      type: null,
      color: "red",
    },
  ],
  [
    {
      title: "NPM",
      icon: DiNpm,
      type: TextType.TAG,
      color: "red",
    },
    {
      title: "Yarn",
      icon: SiYarn,
      type: TextType.CODE,
      color: "cyan",
    },
  ],
  [
    {
      title: "Webpack",
      icon: SiWebpack,
      type: TextType.TAG,
      color: "cyan",
    },
  ],
  [
    {
      title: "Git",
      icon: FaGitAlt,
      type: TextType.CODE,
      color: 'orange',
    },
    {
      title: "GitHub",
      icon: SiGithub,
      type: TextType.CODE,
      color: "grey",
    },
    {
      title: "GitLab",
      icon: AiFillGitlab,
      type: TextType.CODE,
      color: "orange",
    },
  ],
  [
    {
      title: "GraphQL",
      icon: SiGraphql,
      type: TextType.TAG,
      color: "pink",
    },
    {
      title: "ApolloGraphQL",
      icon: SiApollographql,
      type: null,
      color: undefined,
    },
  ],
  [
      {
        title: "EsLint",
        icon: SiEslint,
        type: TextType.CODE,
        color: 'blue',
      },
      {
        title: "Prettier",
        icon: SiPrettier,
        type: null,
        color: undefined,
      },
  ],
  [
      {
        title: "SASS/SCSS",
        icon: SiSass,
        type: TextType.TAG,
        color: 'pink',
      },
      {
        title: "BEM",
        icon: null,
        type: null,
        color: undefined,
      },
  ]
];

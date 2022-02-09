import {
  Code,
  Divider,
  Heading,
  Icon,
  Kbd,
  List,
  ListIcon,
  ListItem,
  Text,
} from "@chakra-ui/react";
import { FC } from "react";
import { RiFullscreenLine } from "react-icons/ri";
import { BsDisplay, BsPhone, BsTabletLandscape } from "react-icons/bs";
import { Icon16LogoVk, Icon24LogoVkOutline } from "@vkontakte/icons";
import {
  SiTypescript,
  SiRedux,
  SiReact,
  SiHtml5,
  SiCss3,
  SiGithub,
  SiJavascript,
  SiReduxsaga,
  SiMobx,
  SiYarn,
  SiWebpack,
  SiJest,
  SiApollographql,
  SiGraphql,
  SiNextdotjs,
  SiPrettier,
  SiEslint,
  SiTestinglibrary,
  SiReactrouter,
  SiFigma,
  SiSass,
} from "react-icons/si";
import { AiFillGitlab, AiFillCode, AiOutlineCode } from "react-icons/ai";
import { FaGitAlt, FaSass } from "react-icons/fa";
import { FiFigma } from "react-icons/fi";
import { DiNpm } from "react-icons/di";
import { MdHttp } from "react-icons/md";

const Skills: FC = () => {
  return (
    <div className="Page-Wrapper Wrapper-Inner">
      <Heading>I am a Frontend Developer: </Heading>
      <Text>
        I turn ideas and layouts into <Code>websites</Code> &{" "}
        <Code>web applications</Code>, <br />
        embodying them into interactive <Kbd>User</Kbd> + <Kbd>Interfaces</Kbd>{" "}
        connected to the server.
      </Text>

      <div className="Skills">
        <Heading size="lg">Technologies:</Heading>
        <List className="Skills__List">
          <ListItem>
            <ListIcon as={AiFillCode} />
           for Desktop <ListIcon as={BsDisplay} /> for Tablet{" "}
            <ListIcon as={BsTabletLandscape} /> for Mobile{" "}
            <ListIcon as={BsPhone} />
          </ListItem>

          <ListItem>
            <ListIcon as={AiFillCode} />
            HTML5 <ListIcon as={SiHtml5} /> CSS3 <ListIcon as={SiCss3} />
            JavaScript(ES12) <ListIcon as={SiJavascript} /> TypeScript
            <ListIcon as={SiTypescript} />
          </ListItem>

          <ListItem>
            <ListIcon as={AiFillCode} />
            React <ListIcon as={SiReact} /> React-Router-Dom{" "}
            <ListIcon as={SiReactrouter} />
          </ListItem>
          <ListItem className="ListItem-VK">
            <ListIcon as={AiFillCode} />
            VK API <ListIcon as={Icon16LogoVk} /> VKUI VK Bridge
            <ListItem as={Icon24LogoVkOutline} />
          </ListItem>
          <ListItem>
            <ListIcon as={AiFillCode} />
            HTTP REST API Axios <ListIcon as={MdHttp} />
          </ListItem>
          <ListItem>
            <ListIcon as={AiFillCode} />
            <ListIcon as={SiRedux} />
            Redux Redux-Toolkit
          </ListItem>
          <ListItem>
            <ListIcon as={AiFillCode} />
            RTK Query Redux-Thunk Redux-Saga <ListIcon as={SiReduxsaga} />
          </ListItem>
          <ListItem>
          <ListIcon as={AiFillCode} />
            <Code colorScheme="orange">
              MobX <ListIcon as={SiMobx} />
              </Code>
          </ListItem>
          <ListItem>
            <ListIcon as={AiFillCode} />
            Jest <ListIcon as={SiJest} /> React-Testing-Library{" "}
            <ListIcon as={SiTestinglibrary} />
          </ListItem>
          <ListItem>
            <ListIcon as={AiFillCode} />
            NPM <ListIcon as={DiNpm} /> Yarn <ListIcon as={SiYarn} />
          </ListItem>
          <ListItem>
            <ListIcon as={AiFillCode} />
            <ListIcon as={SiWebpack} />
            Webpack{" "}
          </ListItem>
          <ListItem>
            <ListIcon as={AiFillCode} />
            Git <ListIcon as={FaGitAlt} /> GitHub <ListIcon as={SiGithub} />
            GitLab <ListIcon as={AiFillGitlab} />
          </ListItem>
          <ListItem>
            <ListIcon as={AiFillCode} />
            <ListIcon as={SiFigma} />
            Figma
          </ListItem>
        </List>
        <div className="Skills">
          <Heading size="md">Also familiar with:</Heading>
          <List className="Skills__List">
            <ListItem>
              {" "}
              <ListIcon as={AiOutlineCode} />
              React-Native React-Navigation{" "}
            </ListItem>
            <ListItem>
              <ListIcon as={AiOutlineCode} />
              <ListIcon as={SiApollographql} />
              Apollo Client <ListIcon as={SiGraphql} />
              GraphQL
            </ListItem>
            <ListItem>
              <ListIcon as={AiOutlineCode} />
              SASS/SCSS <ListIcon as={SiSass} /> BEM GSAP
            </ListItem>
            <ListItem>
              <ListIcon as={AiOutlineCode} />
              Next.js <ListIcon as={SiNextdotjs} /> React-Query
            </ListItem>
            <ListItem>
              <ListIcon as={AiOutlineCode} />
              Prettier <ListIcon as={SiPrettier} /> ESLint{" "}
              <ListIcon as={SiEslint} />
            </ListItem>
          </List>
        </div>
      </div>
    </div>
  );
};

export default Skills;

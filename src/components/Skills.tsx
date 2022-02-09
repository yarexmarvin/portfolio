import {
  Code,
  Divider,
  Heading,
  Icon,
  Kbd,
  List,
  ListIcon,
  ListItem,
  Tag,
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
import { GoBrowser } from "react-icons/go";
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

      <List className="Skills__Environiment">
        <ListItem>
          <Heading size="sm">
            <ListIcon as={GoBrowser} />
            for browser environment:
          </Heading>
          <Kbd>
            Desktop <ListIcon as={BsDisplay} />{" "}
          </Kbd>
          <Kbd>
            Tablet <ListIcon as={BsTabletLandscape} />
          </Kbd>
          <Kbd>
            Mobile <ListIcon as={BsPhone} />
          </Kbd>
        </ListItem>
      </List>

      <div className="Skills">
        <Heading size="lg">Technologies:</Heading>
        <List className="Skills__List">
          <ListItem>
            <ListIcon as={AiFillCode} />
            <Code colorScheme="red">
              HTML5 <ListIcon as={SiHtml5} />{" "}
            </Code>
            <Code colorScheme="twitter">
              CSS3 <ListIcon as={SiCss3} />
            </Code>
          </ListItem>

          <ListItem>
            <ListIcon as={AiFillCode} />
            <Code colorScheme="yellow">
              JavaScript <ListIcon as={SiJavascript} />
            </Code>
            <Code colorScheme="blue">
              TypeScript <ListIcon as={SiTypescript} />
            </Code>
          </ListItem>

          <ListItem>
            <ListIcon as={AiFillCode} />
            <Code colorScheme="telegram">
              React <ListIcon as={SiReact} />
            </Code>
            React-Router-Dom <ListIcon as={SiReactrouter} />
          </ListItem>
          <ListItem className="ListItem-VK">
            <ListIcon as={AiFillCode} />
            <Code bgColor="#0077ff">
              VK API <ListIcon as={Icon16LogoVk} />
            </Code>
            VKUI VK Bridge
            <ListItem as={Icon24LogoVkOutline} />
          </ListItem>
          <ListItem>
            <ListIcon as={AiFillCode} />
            REST API <ListIcon as={MdHttp} />{" "}
            <Code bgColor="#5a29e4">Axios</Code>
          </ListItem>
          <ListItem>
            <ListIcon as={AiFillCode} />
            <Code colorScheme="purple">
              <ListIcon as={SiRedux} />
              Redux
            </Code>
            Redux-Toolkit
          </ListItem>
          <ListItem>
            <ListIcon as={AiFillCode} />
            Redux-Thunk{" "}
            <Code colorScheme="rgb(134, 212, 107)">
              Redux-Saga <ListIcon as={SiReduxsaga} />
            </Code>
          </ListItem>
          <ListItem>
            <ListIcon as={AiFillCode} />
            <Code colorScheme="orange">
              MobX <ListIcon as={SiMobx} />
            </Code>
          </ListItem>
          <ListItem>
            <ListIcon as={AiFillCode} />
            <Code bgColor="rgb(21, 194, 19)" color="#FFF">
              Jest <ListIcon as={SiJest} />
            </Code>
            <Code color="red">
              Testing-Library <ListIcon as={SiTestinglibrary} />
            </Code>
          </ListItem>
          <ListItem>
            <ListIcon as={AiFillCode} />
            <Tag variant='solid' bgColor="red">
              <ListIcon as={DiNpm} /> NPM 
            </Tag>
            <Code bgColor="#2188b6">
              Yarn <ListIcon as={SiYarn} />
            </Code>
          </ListItem>
          <ListItem>
            <ListIcon as={AiFillCode} />
            <Code colorScheme="blue">
              <ListIcon as={SiWebpack} /> Webpack
            </Code>
          </ListItem>
          <ListItem>
            <ListIcon as={AiFillCode} />
            <Code color="#f14e32">
              Git <ListIcon as={FaGitAlt} />
            </Code>
            <Code color="white" colorScheme="blackAlpha">
              GitHub <ListIcon as={SiGithub} />
            </Code>
            <Tag variant='subtle' color="#f14e32">
              GitLab <ListIcon as={AiFillGitlab} />
            </Tag>
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
              <Code color="#06bcee">React-Native</Code>
              React-Navigation
            </ListItem>
            <ListItem>
              <ListIcon as={AiOutlineCode} />
              <ListIcon as={SiApollographql} />
              Apollo Client
              <Code color="#e10098">
                <ListIcon as={SiGraphql} />
                GraphQL
              </Code>
            </ListItem>
            <ListItem>
              <ListIcon as={AiOutlineCode} />
              <Code bgColor="#bf4080">
                SASS/SCSS <ListIcon as={SiSass} />
              </Code>
              BEM GSAP
            </ListItem>
            <ListItem>
              <ListIcon as={AiOutlineCode} />
              Next.js <ListIcon as={SiNextdotjs} />
              <Code bgColor="rgb(255, 65, 84)">React-Query</Code>
              RTK-Query
            </ListItem>
            <ListItem>
              <ListIcon as={AiOutlineCode} />
              <Code bgColor="#1a2b34">
                Prettier <ListIcon as={SiPrettier} />
              </Code>
              <Code bgColor="#3a33d1">
                ESLint
                <ListIcon as={SiEslint} />
              </Code>
            </ListItem>
          </List>
        </div>
      </div>
    </div>
  );
};

export default Skills;

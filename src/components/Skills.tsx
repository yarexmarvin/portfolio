import {
  Code,
  Divider,
  Heading,
  Icon,
  Image,
  Kbd,
  List,
  ListIcon,
  ListItem,
  Tag,
  Text,
  useColorModeValue,
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
import stickerCalm from "../assets/img/stickerCalm.png";
import stickerIdea from "../assets/img/stickerIdea.png";
import stickerMac from "../assets/img/stickerMac.png";
import { useAppSelector } from "../hooks/redux";
import SkillBlock from "../blocks/SkillBlock";

const Skills: FC = () => {
  const skills = useAppSelector((state) => state.skills);
  console.log(skills);
  const borderColor = useColorModeValue("#CBD5E0", "rgba(255,255,255,0.7)");
  return (
    <div className="Page-Wrapper Wrapper-Inner">
      <div className="Skills-Wrapper">
        <div className="Skills-Wrapper-Inner">
          <Heading>I am a Frontend&nbsp;Developer: </Heading>
          <Text as="kbd" className="Skills__Text">
            I turn ideas and layouts into websites web applications, embodying
            them into interactive <Kbd>User</Kbd> + <Kbd>Interfaces</Kbd>{" "}
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
        </div>
        <Image
          className="Skills__Img"
          border={`5px solid ${borderColor}`}
          boxSize={200}
          src={stickerMac}
        />
      </div>

      <Heading className="Skills__Heading" size="lg">
        What I use:
      </Heading>
      <div className="Skills">
        <List className="Skills__List">
          {skills.map((skillGroup, index) => (
            <SkillBlock key={`${index}group`} skills={skillGroup} />
          ))}
        </List>
        <div className="Skills__Imgs">
          <Image
            className="Skills__Img"
            border={`5px solid ${borderColor}`}
            boxSize={200}
            src={stickerCalm}
          />
        </div>
      </div>
    </div>
  );
};

export default Skills;

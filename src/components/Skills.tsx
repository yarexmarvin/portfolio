import {
  Heading,
  Image,
  Kbd,
  List,
  ListIcon,
  ListItem,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { FC } from "react";
import { BsDisplay, BsPhone, BsTabletLandscape } from "react-icons/bs";
import { GoBrowser } from "react-icons/go";
import stickerCalm from "../assets/img/stickerCalm.png";
import stickerCalmL from "../assets/img/stickerCalmL.png";
import stickerMac from "../assets/img/stickerMac.png";
import stickerMacL from "../assets/img/stickerMacL.png";
import { useAppSelector } from "../hooks/redux";
import SkillBlock from "../blocks/SkillBlock";

const Skills: FC = () => {
  const skills = useAppSelector((state) => state.skills);
  const stickerCalmMode = useColorModeValue(stickerCalmL, stickerCalm)
  const stickerMacMode = useColorModeValue(stickerMacL, stickerMac)
  const borderColor = useColorModeValue("#CBD5E0", "rgba(255,255,255,0.7)");
  return (
    <div className="Page-Wrapper Wrapper-Inner">
      <div className="Skills-Wrapper">
        <div className="Skills-Wrapper-Inner">
          <Heading marginBottom={2.5}>I am a Frontend Developer </Heading>
          <Text as="kbd" className="Skills__Text">
            I turn ideas and layouts into websites web&nbsp;applications, embodying
            them into interactive&nbsp;<Kbd>User</Kbd>&nbsp;+&nbsp;<Kbd>Interfaces</Kbd>
            connected to the server.
          </Text>
        </div>
        <Image
          className="Skills__Img"
          border={`5px solid ${borderColor}`}
          boxSize={200}
          src={stickerMacMode}
        />
      </div>
      <List className="Skills__Environiment">
            <ListItem>
              <Heading size="sm">
                <ListIcon as={GoBrowser} />
                for browser environment:
              </Heading>
              <Kbd>
                Desktop <ListIcon as={BsDisplay} />
              </Kbd>
              <Kbd>
                Tablet <ListIcon as={BsTabletLandscape} />
              </Kbd>
              <Kbd>
                Mobile <ListIcon as={BsPhone} />
              </Kbd>
            </ListItem>
          </List>

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
            src={stickerCalmMode}
          />
        </div>
      </div>
    </div>
  );
};

export default Skills;

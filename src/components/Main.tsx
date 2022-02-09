import {
  Code,
  Heading,
  Icon,
  Image,
  Link,
  List,
  ListIcon,
  ListItem,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { FC } from "react";
import mainImg from "../assets/img/stickerHi.png";
import { BsDisplay,BsCodeSquare } from "react-icons/bs";
import { AiFillCode,AiOutlineCode } from "react-icons/ai";
import { IoLanguageSharp } from "react-icons/io5";
import { BsPersonCircle } from "react-icons/bs";
import { BiBuilding } from "react-icons/bi";
import { HiCode} from "react-icons/hi"
import {
  SiTypescript,
  SiRedux,
  SiReact,
  SiHtml5,
  SiCss3,
  SiGithub,
} from "react-icons/si";
import { MdAlternateEmail } from "react-icons/md";

const Main: FC = () => {
  const borderColor = useColorModeValue("#CBD5E0", "rgba(255,255,255,0.7)");
  return (
    <div className="Page-Wrapper Wrapper-Inner">
      <div className="Introduction">
        <Image
          border={`5px solid ${borderColor}`}
          boxSize={200}
          src={mainImg}
        />
        <div className="Introduction__Text">
          <Heading>Hi! I'm Yarex</Heading>
          <Text className="Introduction__Occupation">frontend developer</Text>
          <List className="Introduction__Description">
            <ListItem>
              <Code colorScheme="green">
                <ListIcon as={AiOutlineCode} />
                current stack {"  "}
              </Code>
              <Icon fontSize="sm" className="Tech-Icon" as={SiTypescript} />
              <Icon className="Tech-Icon" as={SiReact} />
              <Icon className="Tech-Icon" as={SiRedux} />
              <Icon className="Tech-Icon" as={SiHtml5} />
              <Icon className="Tech-Icon" as={SiCss3} />
            </ListItem>
            <ListItem>
              <Code colorScheme="yellow">
                <ListIcon as={BsDisplay} />
                working as a software developer
              </Code>
            </ListItem>
            <ListItem>
              <Code colorScheme="red">
                <ListIcon as={BiBuilding} />
                at {"  "}
                <Link href="https://devstars.team/" isExternal>
                  DevStars.team
                </Link>
              </Code>
            </ListItem>
            <ListItem>
              <Code colorScheme={"messenger"}>
                <ListIcon as={IoLanguageSharp} />
                languages
              </Code>
              {"  "}russian 🇷🇺 , english 🇺🇸
            </ListItem>
            <ListItem>
              <Code>
                <ListIcon as={MdAlternateEmail} />
                email {"  "} 
              </Code>
              <Link href="mailto:yarexmarvin@yahoo.com" isExternal>
                yarexmarvin@yahoo.com
              </Link>
            </ListItem>
          </List>
        </div>
      </div>
    </div>
  );
};

export default Main;

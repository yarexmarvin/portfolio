import {
    Button,
  Code,
  Divider,
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
import {GrDocumentDownload} from "react-icons/gr";
import {IoDownloadOutline, IoDownloadSharp}from "react-icons/io5"

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
          <Heading className="Introduction__Header">Hi! I'm Yarex</Heading>
          <Text as="kbd" className="Introduction__Occupation">Frontend Developer</Text>
          <List className="Introduction__Description">
            <ListItem>
              <Code colorScheme="green">
                <ListIcon as={AiOutlineCode} />
                current stack {"  "}
              
              <ListIcon fontSize="sm" className="Tech-Icon" as={SiTypescript} />
              <ListIcon className="Tech-Icon" as={SiReact} />
              <ListIcon className="Tech-Icon" as={SiRedux} />
              <ListIcon className="Tech-Icon" as={SiHtml5} />
              <ListIcon className="Tech-Icon" as={SiCss3} />
              </Code>
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
              {"  "}russian 🇷🇺  english 🇺🇸
              </Code>
            </ListItem>
            <ListItem>
              <Code>
                <ListIcon as={MdAlternateEmail} />
                email {"  "} 
              <Link href="mailto:yarexmarvin@yahoo.com" isExternal>
                yarexmarvin@yahoo.com
              </Link>
              </Code>

            </ListItem>
          </List>
        </div>
      </div>

      <div className="Summary">
          <Heading size='lg' className="Summary__Heading">Summary</Heading>
          <Text as="kbd" className="Summary__Text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis amet corporis tenetur dolore nostrum voluptatum ex porro voluptatibus, molestias repellendus suscipit eius deserunt cum natus optio doloremque, reprehenderit voluptate deleniti laudantium in itaque. Non dolor obcaecati nostrum sunt possimus tempora nihil aliquid officiis tenetur laudantium dolore cum et, quas quisquam sit cupiditate similique aspernatur consequuntur excepturi hic pariatur.</Text>
      </div>

      <div className="Download-Btns">
          <Button variant='outline' colorScheme='green' rightIcon={<IoDownloadOutline/>}> Download CV</Button>
          <Button variant='ghost' colorScheme='facebook' rightIcon={<IoDownloadSharp/>} >Download Cover Letter</Button>
      </div>
    </div>
  );
};

export default Main;

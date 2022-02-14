import {
  Button,
  Code,
  Heading,
  Icon,
  Image,
  Link,
  List,
  ListIcon,
  ListItem,
  Tag,
  Text,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";
import { FC } from "react";
import mainImg from "../assets/img/stickerHi.png";
import mainImgL from "../assets/img/stickerHiL.png";
import { BsDisplay } from "react-icons/bs";
import { AiOutlineCode } from "react-icons/ai";
import { IoLanguageSharp } from "react-icons/io5";
import { BiBuilding } from "react-icons/bi";
import { FiChevronRight } from "react-icons/fi";
import {
  SiTypescript,
  SiRedux,
  SiReact,
  SiHtml5,
  SiCss3,
} from "react-icons/si";
import { MdAlternateEmail } from "react-icons/md";
import { IoDownloadOutline, IoDownloadSharp } from "react-icons/io5";
import { VscGithub } from "react-icons/vsc";

const Main: FC = () => {
  const borderColor = useColorModeValue("#CBD5E0", "rgba(255,255,255,0.7)");
  const stickerImg = useColorModeValue(mainImgL, mainImg);
  const toast = useToast();
  return (
    <div className="Page-Wrapper Wrapper-Inner">
      <div className="Introduction">
        <Image
          border={`5px solid ${borderColor}`}
          boxSize={200}
          src={stickerImg}
        />
        <div className="Introduction__Text">
          <Heading className="Introduction__Header">Hi! I'm Yarex</Heading>
          <Text as="kbd" className="Introduction__Occupation">
            Frontend Developer
          </Text>
          <List className="Introduction__Description">
            <ListItem>
              <Code colorScheme="green">
                <ListIcon as={AiOutlineCode} />
                current stack {"  "}
                <ListIcon
                  fontSize="sm"
                  className="Tech-Icon"
                  as={SiTypescript}
                />
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
                speaking
                {"  "}russian&nbsp;🇷🇺 english&nbsp;🇺🇸
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
        <Heading size="lg" className="Summary__Heading">
          Summary
        </Heading>
        <Text className="Summary__Text">
          <Icon as={FiChevronRight} />
          <Text as="strong">Responsible</Text>{" "}
          <Tag colorScheme='green'>Frontend Developer</Tag> with experience in
         <Tag>cross-platform </Tag> development of embedded applications based on{" "}
          <Tag colorScheme="yellow">modern tools</Tag> for creating interactive{" "}
          <Tag colorScheme="purple">User Interfaces</Tag>;
          <br /> <Icon as={FiChevronRight} />
          <Text as="strong">Passionate about</Text>{" "}
          <Code>solving problems</Code>, fixing{" "}
          <Tag colorScheme="red">bugs</Tag>, and translating{" "}
          <Tag colorScheme="pink">astonishing</Tag>layouts and ideas into
          finished applications.
          <br /> <Icon as={FiChevronRight} />
          <Text as="strong">Striving to be</Text> <Code colorScheme="cyan">an expert</Code> in frontend
          development. Having a positive attitude towards constructive
          criticism, I perceive it as an indispensable and{" "}
          <Tag colorScheme="orange">powerful accelerator</Tag> for the rapid
          growth of my skills.
        </Text>
      </div>

      <div className="Download-Btns">
        <Link
          href="https://drive.google.com/file/d/1qOCTTAxnlFr_FjyVAXlxt_EonJr74KAc/view?usp=sharing/"
          isExternal
          textDecoration="none"
        >
          <Button
            variant="outline"
            colorScheme="green"
            rightIcon={<IoDownloadOutline />}
          >
            Download CV
          </Button>
        </Link>
        <Link href="https://github.com/yarexmarvin/" isExternal>
          <Button variant="solid" colorScheme="gray" rightIcon={<VscGithub />}>
            GitHub
          </Button>
        </Link>
        <Button
          variant="ghost"
          colorScheme="facebook"
          rightIcon={<IoDownloadSharp />}
          onClick={() =>
            toast({
              title: "Sorry, my cover letter isn't ready yet.",
              description: "Please, try next time!",
              status: "error",
              duration: 5000,
              isClosable: true,
            })
          }
        >
          Download Cover Letter
        </Button>
       
      </div>
    </div>
  );
};

export default Main;

import {
  Code,
  Heading,
  Image,
  Link,
  List,
  ListIcon,
  ListItem,
  Tag,
  Text,
  theme,
} from "@chakra-ui/react";
import { FC } from "react";
import devstars from "../assets/img/devstars.jpeg";
import rtkit from "../assets/img/rtkit.jpeg";
import { HiLocationMarker, HiCode } from "react-icons/hi";
import { MdDateRange } from "react-icons/md";
import { BsBuilding } from "react-icons/bs";
import { GoGear } from "react-icons/go";

const Experience: FC = () => {
  return (
    <div className="Page-Wrapper Wrapper-Inner">
      <Heading>Experience</Heading>

      <div className="Experience-Wrapper">
        <div className="Experience__Inner">
          <div className="Experience__Img">
            <Link href="https://vk.com/devstars" isExternal>
              <Image borderRadius={10} src={devstars} boxSize={110} />
            </Link>
          </div>
          <div className="Experience__Description">
            <List>
              <ListItem>
                <ListIcon as={BsBuilding} />
                Company:{" "}
                <Link href="https://devstars.team/" isExternal>
                  <Tag>DevStars</Tag>
                </Link>
              </ListItem>
              <ListItem>
                <ListIcon as={HiCode} />
                Role:{" "}
                <Tag colorScheme="blue" variant="subtle">
                  Software Developer
                </Tag>
              </ListItem>
              <ListItem>
                <ListIcon as={MdDateRange} />
                Period:{" "}
                <Tag colorScheme="green" variant="outline">
                  Jul'21 - Apr'22 (10 months)
                </Tag>
              </ListItem>
              <ListItem>
                <ListIcon as={HiLocationMarker} />
                Location: <Tag variant="solid">Russia, Ulyanovsk</Tag>
              </ListItem>
            </List>
          </div>
        </div>
        <div className="Experience__Text">
          <List>
            <ListItem>
              <ListIcon as={GoGear} />
              developing embedded cross-platform applications for <Tag colorScheme='blue'>VK.com</Tag>
            </ListItem>
            <ListItem>
              <ListIcon as={GoGear} />
              using <Code colorScheme='facebook'>TypeScript</Code>, JavaScript, <Code colorScheme='linkedin'>React</Code> , <Tag colorScheme="purple" >Redux</Tag>, MobX, HTML and CSS in the development of applications
            </ListItem>
            <ListItem>
              <ListIcon as={GoGear} />
              interacting with <Code>REST API</Code> server using Axios
            </ListItem>
            <ListItem>
              <ListIcon as={GoGear} />
              working with other people's code
            </ListItem>
            <ListItem>
              <ListIcon as={GoGear} />
              fixing <Tag colorScheme={'red'}>bugs</Tag>
            </ListItem>
          </List>
        </div>
      </div>

      <div className="Experience-Wrapper">
        <div className="Experience__Inner">
          <div className="Experience__Img">
            <Link href="https://rtkit.ru/" isExternal>
              <Image borderRadius={10} src={rtkit} boxSize={110} />
            </Link>
          </div>
          <div className="Experience__Description">
            <List>
              <ListItem>
                <ListIcon as={BsBuilding} />
                Company:{" "}
                <Link href="https://rtkit.ru/" isExternal>
                  <Tag>RTK IT</Tag>
                </Link>
              </ListItem>
              <ListItem>
                <ListIcon as={HiCode} />
                Role:{" "}
                <Tag colorScheme="blue" variant="subtle">
                  Frontend Developer
                </Tag>
              </ListItem>
              <ListItem>
                <ListIcon as={MdDateRange} />
                Period:{" "}
                <Tag colorScheme="green" variant="outline">
                  Apr'22 - now
                </Tag>
              </ListItem>
              <ListItem>
                <ListIcon as={HiLocationMarker} />
                Location: <Tag variant="solid">Russia, Ulyanovsk</Tag>
              </ListItem>
            </List>
          </div>
        </div>
        <div className="Experience__Text">
          <List>
            <ListItem>
              <ListIcon as={GoGear} />
              developing features for <Tag colorScheme="purple">Rostelecom's internal product </Tag> (android app for telecommunications installation workers)
            </ListItem>
            <ListItem>
              <ListIcon as={GoGear} />
              using <Code colorScheme='facebook'>React Native</Code>, <Code colorScheme='linkedin'>React</Code> , JavaScript, <Tag colorScheme="purple">Redux</Tag>
            </ListItem>
            <ListItem>
              <ListIcon as={GoGear} />
              шnteraction with team members
            </ListItem>
            <ListItem>
              <ListIcon as={GoGear} />
              working with other people's code
            </ListItem>
            <ListItem>
              <ListIcon as={GoGear} />
              fixing <Tag colorScheme={'red'}>bugs</Tag> and maintenance
            </ListItem>
            <ListItem>
              <ListIcon as={GoGear} />
              <Code colorScheme='pink'>code refactoring</Code> 
            </ListItem>
          </List>
        </div>
      </div>
    </div>
  );
};

export default Experience;

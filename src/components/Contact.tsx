import {
  Button,
  FormControl,
  FormLabel,
  Heading,
  Image,
  Input,
  Link,
  List,
  ListItem,
  useColorModeValue,
} from "@chakra-ui/react";
import { FC } from "react";
import { FaTelegram, FaLinkedin, FaFacebookSquare } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { Icon16LogoVk } from "@vkontakte/icons";
import { VscGithub } from "react-icons/vsc";
import stickerBye from "../assets/img/stickerBye.png";
import stickerByeL from "../assets/img/stickerByeL.png";
import stickerPhone from "../assets/img/stickerPhone.png";

const Contact: FC = () => {
  const borderColor = useColorModeValue("#CBD5E0", "rgba(255,255,255,0.7)");
  const stickerByeMode = useColorModeValue(stickerByeL, stickerBye);

  return (
    <div className="Page-Wrapper Wrapper-Inner">
      <Heading>How to find me? </Heading>
      <div className="Contact-Wrapper">
        <div className="Contact-Links">
          <List className="Contact-List">
            <ListItem>
              <Link href="https://www.linkedin.com/in/yarexmarvin/" isExternal>
                <Button colorScheme="linkedin" rightIcon={<FaLinkedin />}>
                  LinkedIn
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://github.com/yarexmarvin/" isExternal>
                <Button
                  color="white"
                  bgColor="blackAlpha.700"
                  rightIcon={<VscGithub />}
                >
                  GitHub
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://t.me/yarex" isExternal>
                <Button colorScheme="telegram" rightIcon={<FaTelegram />}>
                  Telegram
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://wa.me/79278328521" isExternal>
                <Button colorScheme="whatsapp" rightIcon={<IoLogoWhatsapp />}>
                  WhatsApp
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://vk.com/yarexmarvin" isExternal>
                <Button colorScheme="twitter" rightIcon={<Icon16LogoVk />}>
                  VK
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://www.facebook.com/yarexmarvin" isExternal>
                <Button colorScheme="facebook" rightIcon={<FaFacebookSquare />}>
                  Facebook
                </Button>
              </Link>
            </ListItem>
          </List>
        </div>
        <Image
          border={`5px solid ${borderColor}`}
          boxSize={200}
          src={stickerByeMode}
        />
      </div>
    </div>
  );
};

export default Contact;

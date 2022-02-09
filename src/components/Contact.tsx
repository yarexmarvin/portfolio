import {
  Button,
  FormControl,
  FormLabel,
  Heading,
  Image,
  Input,
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
import stickerPhone from "../assets/img/stickerPhone.png";

const Contact: FC = () => {
  const borderColor = useColorModeValue("#CBD5E0", "rgba(255,255,255,0.7)");

  return (
    <div className="Page-Wrapper Wrapper-Inner">
      <Heading>How to find me? </Heading>
      <div className="Contact-Wrapper">
        <div className="Contact-Links">
          <List className="Contact-List">
            <ListItem>
              <Button colorScheme="linkedin" rightIcon={<FaLinkedin />}>
                LinkedIn
              </Button>
            </ListItem>
            <ListItem>
              <Button
                color="white"
                bgColor="blackAlpha.700"
                rightIcon={<VscGithub />}
              >
                GitHub
              </Button>
            </ListItem>
            <ListItem>
              <Button colorScheme="telegram" rightIcon={<FaTelegram />}>
                Telegram
              </Button>
            </ListItem>
            <ListItem>
              <Button colorScheme="whatsapp" rightIcon={<IoLogoWhatsapp />}>
                WhatsApp
              </Button>
            </ListItem>
            <ListItem>
              <Button colorScheme="twitter" rightIcon={<Icon16LogoVk />}>
                VK
              </Button>
            </ListItem>
            <ListItem>
              <Button colorScheme="facebook" rightIcon={<FaFacebookSquare />}>
                Facebook
              </Button>
            </ListItem>
          </List>
        </div>
        <Image
          border={`5px solid ${borderColor}`}
          boxSize={200}
          src={stickerBye}
        />
      </div>
    </div>
  );
};

export default Contact;

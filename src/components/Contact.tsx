import {
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  List,
  ListItem,
} from "@chakra-ui/react";
import { FC } from "react";
import { FaTelegram, FaLinkedin, FaFacebookSquare } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { Icon16LogoVk } from "@vkontakte/icons";
import { VscGithub } from "react-icons/vsc";

const Contact: FC = () => {
  return (
    <div className="Page-Wrapper Wrapper-Inner">
      <Heading>How to find me? </Heading>
      <div className="Contact-Wrapper">
        <div className="Contact-Links">
          <List className='Contact-List'>
            <ListItem>
              <Button colorScheme='linkedin' rightIcon={<FaLinkedin />}>LinkedIn</Button>
            </ListItem>
            <ListItem>
              <Button color='white' bgColor='blackAlpha.700' rightIcon={<VscGithub />}>GitHub</Button>
            </ListItem>
            <ListItem>
              <Button colorScheme='telegram' rightIcon={<FaTelegram />}>Telegram</Button>
            </ListItem>
            <ListItem>
              <Button colorScheme='whatsapp' rightIcon={<IoLogoWhatsapp />}>WhatsApp</Button>
            </ListItem>
            <ListItem>
              <Button  colorScheme='twitter' rightIcon={<Icon16LogoVk />}>VK</Button>
            </ListItem>
            <ListItem>
              <Button colorScheme='facebook' rightIcon={<FaFacebookSquare />}>Facebook</Button>
            </ListItem>
          </List>
        </div>
      </div>
    </div>
  );
};

export default Contact;

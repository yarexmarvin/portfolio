import {
  Button,
  FormControl,
  FormLabel,
  Heading,
  Image,
  Input,
  Link,
  LinkOverlay,
  List,
  ListItem,
  Stack,
  Text,
  Tooltip,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";
import { FC } from "react";
import { FaTelegram, FaLinkedin, FaFacebookSquare } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { Icon16LogoVk } from "@vkontakte/icons";
import { VscGithub } from "react-icons/vsc";
import stickerBye from "../assets/img/stickerBye.png";
import stickerByeL from "../assets/img/stickerByeL.png";
import stickerPhone from "../assets/img/stickerPhone.png";
import { EmailIcon } from "@chakra-ui/icons";

const Contact: FC = () => {
  const borderColor = useColorModeValue("#CBD5E0", "rgba(255,255,255,0.7)");
  const stickerByeMode = useColorModeValue(stickerByeL, stickerBye);

  const toast = useToast();

  function copyEmail() {
    let input = document.querySelector(".Contacts__Email") as HTMLInputElement;
    input.select();
    document.execCommand("copy");
    toast({
      title: "Email successfully copied",
      description: "Looking forward to hearing from you!",
      status: "success",
      duration: 2000,
      isClosable: true,
    });
  }

  return (
    <div className="Page-Wrapper Wrapper-Inner">
      <Heading>How to contact me? </Heading>
      <div className="Contact-Wrapper">
        <div className="Contact-Links">
          <List className="Contact-List">
            <ListItem>
              <Link href="https://www.linkedin.com/in/yarexmarvin/" isExternal>
                <Button
                  variant="solid"
                  colorScheme="linkedin"
                  rightIcon={<FaLinkedin />}
                >
                  LinkedIn
                </Button>
              </Link>
            </ListItem>
            <ListItem></ListItem>
            <ListItem>
              <Link href="https://t.me/yarex" isExternal>
                <Button
                  variant="outline"
                  colorScheme="telegram"
                  rightIcon={<FaTelegram />}
                >
                  Telegram
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Tooltip label="use telegram to get a reply faster ">
                <Link href="https://www.facebook.com/yarexmarvin" isExternal>
                  <Button
                    variant="ghost"
                    colorScheme="facebook"
                    rightIcon={<FaFacebookSquare />}
                  >
                    Facebook
                  </Button>
                </Link>
              </Tooltip>
            </ListItem>
          </List>
        </div>
        <Image
          border={`5px solid ${borderColor}`}
          boxSize={200}
          src={stickerByeMode}
        />
      </div>

      <Stack
        className="Contacts__EmailWrapper"
        marginTop={30}
        justifyContent="center"
        padding="0 10vw"
        width="100%"
        direction="row"
      >
        <Link href="mailto:yarexmarvin@yahoo.com">
          <Button leftIcon={<EmailIcon />} colorScheme="teal" variant="solid">
            Email
          </Button>
        </Link>

        <Input
          flexShrink={1}
          onClick={copyEmail}
          className="Contacts__Email"
          value="yarexmarvin@yahoo.com"
        />
      </Stack>
    </div>
  );
};

export default Contact;

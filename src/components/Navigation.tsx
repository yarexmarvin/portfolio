import {
  Avatar,
  background,
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  IconButton,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { FC, useState } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { ColorModeSwitcher } from "../ColorModeSwitcher";
import navImg from "../assets/img/stickerSmile.png";

const Navigation: FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const bg = useColorModeValue(
    "white",
    "linear-gradient(20deg, rgb(33, 33, 33), rgb(66, 66, 66))"
  );
  const txt = useColorModeValue("rgb(33, 33, 33)", "white");
  const bgMobMenu = useColorModeValue('white', ' rgb(66, 66, 66)');

  const navigate = useNavigate();
  return (
    <div className="Wrapper" style={{  color: txt }}>
      <div className="Navigation Wrapper-Inner">
        <HStack justifyContent="space-between">
          <NavLink className="Navigation__Links-First" to="/" replace>
            <Box display="flex">
              <Avatar
                bg="transparent"
                src={navImg}
                marginRight="0.5vh"
                size="sm"
              />
              <Link>
                <Heading letterSpacing="0.2px" size="sm">
                  Yarex Marvin
                </Heading>
              </Link>
            </Box>
          </NavLink>
          <div className="Navigation-Desk">
            <NavLink className="Navigation__Links" to="skills">
              <Button height="unset" colorScheme="gray" variant="ghost">
                Skills
              </Button>
            </NavLink>

            <NavLink className="Navigation__Links" to="experience">
              <Button height="unset" colorScheme="gray" variant="ghost">
                Experience
              </Button>
            </NavLink>

            <NavLink className="Navigation__Links" to="contact">
              <Button height="unset" colorScheme="gray" variant="ghost">
                Contact
              </Button>
            </NavLink>
          </div>
          <Box display='flex'>
            <ColorModeSwitcher justifySelf="flex-end" />

            <div className="Navigation-Mobile">
              <Menu>
                <MenuButton
                  as={IconButton}
                  aria-label="Options"
                  icon={<HamburgerIcon />}
                  variant="outline"
                />
                <MenuList background={bgMobMenu}>
                  <MenuItem onClick={() => navigate("skills")}>Skills</MenuItem>
                  <MenuItem onClick={() => navigate("experience")}>
                    Experience
                  </MenuItem>
                  <MenuItem onClick={() => navigate("contact")}>
                    Contact
                  </MenuItem>
                </MenuList>
              </Menu>
            </div>
          </Box>
        </HStack>
      </div>

      <Outlet />
    </div>
  );
};

export default Navigation;

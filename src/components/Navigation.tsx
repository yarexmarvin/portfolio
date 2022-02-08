import {
  Avatar,
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
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { FC, useState } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { ColorModeSwitcher } from "../ColorModeSwitcher";
import navImg from "../assets/img/stickerSmile.png";

const Navigation: FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const navigate = useNavigate();
  return (
    <div className="Wrapper">
      <div className="Navigation">
        <HStack justifyContent="space-between">
          <div className="Navigation-Desk">
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
            <Button
              className="Navigation__Links"
              height="unset"
              colorScheme="gray"
              variant="ghost"
            >
              <NavLink to="/skills">Skills</NavLink>
            </Button>
            <Button
              className="Navigation__Links"
              height="unset"
              colorScheme="gray"
              variant="ghost"
            >
              <NavLink to="/skills">Experience</NavLink>
            </Button>
            <Button
              className="Navigation__Links"
              height="unset"
              colorScheme="gray"
              variant="ghost"
            >
              <NavLink to="/contact">Contact</NavLink>
            </Button>
          </div>
          <div className="Navigation-Mobile">
            <Menu>
              <MenuButton
                as={IconButton}
                aria-label="Options"
                icon={<HamburgerIcon />}
                variant="outline"
              />
              <MenuList>
                <MenuItem onClick={() => navigate("skills")}>
                  Skills
                </MenuItem>
                <MenuItem  onClick={() => navigate("experience")}>
                  Experience
                </MenuItem>
                <MenuItem  onClick={() => navigate("contact")}>
                  Contact
                </MenuItem>
              </MenuList>
            </Menu>
          </div>
          <ColorModeSwitcher justifySelf="flex-end" />
        </HStack>
      </div>

      <Outlet />
    </div>
  );
};

export default Navigation;

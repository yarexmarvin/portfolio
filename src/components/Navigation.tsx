import {
  Avatar,
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Link,
  Text,
} from "@chakra-ui/react";
import { FC } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { ColorModeSwitcher } from "../ColorModeSwitcher";
import navImg from "../assets/img/stickerSmile.png";

const Navigation: FC = () => {
  return (
    <div className="Wrapper">
      <div className="Navigation">
        <HStack justifyContent="space-between">
          <Flex>
            <NavLink className="Navigation__Links-First" to="/" replace>
              <Box display="flex">
                <Avatar
                  bg="transparent"
                  src={navImg}
                  marginRight="0.5vh"
                  size="sm"
                />
                <Link>
                  <Heading letterSpacing='0.2px' size='sm'>Yarex Marvin</Heading>
                </Link>
              </Box>
            </NavLink>
            <Button className="Navigation__Links" height='unset' colorScheme="gray" variant="ghost">
              <NavLink to="/skills">
                Skills
              </NavLink>
            </Button>
            <Button className="Navigation__Links" height='unset' colorScheme="gray" variant="ghost">
              <NavLink  to="/skills">
                Experience
              </NavLink>
            </Button>
            <Button className="Navigation__Links" height='unset' colorScheme="gray" variant="ghost">
              <NavLink  to="/contact">
                Contact
              </NavLink>
            </Button>
          </Flex>
          <ColorModeSwitcher justifySelf="flex-end" />
        </HStack>
      </div>

      <Outlet />
    </div>
  );
};

export default Navigation;

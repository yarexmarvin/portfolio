import {
  Alert,
  AlertIcon,
  Box,
  Button,
  Container,
  Divider,
  Heading,
  Icon,
  Image,
  Kbd,
  Link,
  List,
  ListIcon,
  ListItem,
  Spinner,
  Stat,
  StatGroup,
  StatLabel,
  StatNumber,
  Tag,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { FC, useEffect, useState } from "react";
import { BsDisplay, BsPhone, BsTabletLandscape } from "react-icons/bs";
import { GoBrowser } from "react-icons/go";
import stickerCalm from "../assets/img/stickerCalm.png";
import stickerCalmL from "../assets/img/stickerCalmL.png";
import stickerMac from "../assets/img/stickerMac.png";
import stickerMacL from "../assets/img/stickerMacL.png";
import { useAppSelector } from "../hooks/redux";
import SkillBlock from "../blocks/SkillBlock";
import { gql, useQuery } from "@apollo/client";
import { SiCodewars, SiLeetcode } from "react-icons/si";

const Skills: FC = () => {
  const skills = useAppSelector((state) => state.skills);
  const stickerCalmMode = useColorModeValue(stickerCalmL, stickerCalm);
  const stickerMacMode = useColorModeValue(stickerMacL, stickerMac);
  const jsColor = useColorModeValue('#D69E2E', '#FAF089');
  const tsColor = useColorModeValue('#2b6cb0','#90cdf4');
  const borderColor = useColorModeValue("#CBD5E0", "rgba(255,255,255,0.7)");

  const LeetCodeSchema = gql`
    query getUserProfile($username: String!) {
      matchedUser(username: $username) {
        username
        submitStats: submitStatsGlobal {
          acSubmissionNum {
            difficulty
            count
            submissions
          }
        }
      }
    }
  `;

  const [codewars, setCodeWars] = useState<number>(0);

  const { loading, error, data } = useQuery(LeetCodeSchema, {
    variables: {
      username: "yarexmarvin",
    },
  });

  useEffect(() => {
    fetch("https://www.codewars.com/api/v1/users/yarexmarvin")
      .then((res) => res.json())
      .then((result) => setCodeWars(result.codeChallenges.totalCompleted))
      .catch(err => setCodeWars(err));
  }, []);

  return (
    <div className="Page-Wrapper Wrapper-Inner">
      <div className="Skills-Wrapper">
        <div className="Skills-Wrapper-Inner">
          <Heading marginBottom={2.5}>I am a Frontend Developer </Heading>
          <Text as="kbd" className="Skills__Text">
            I turn ideas and layouts into websites web&nbsp;applications,
            embodying them into connected to the server interactive&nbsp;
            <Kbd>User Interfaces</Kbd>
          </Text>
        </div>
        <Image
          className="Skills__Img"
          border={`5px solid ${borderColor}`}
          boxSize={200}
          src={stickerMacMode}
        />
      </div>
      <List className="Skills__Environiment">
        <ListItem>
          <Heading size="sm">
            <ListIcon as={GoBrowser} />
            for browser environment:
          </Heading>
          <Kbd>
            Desktop <ListIcon as={BsDisplay} />
          </Kbd>
          <Kbd>
            Tablet <ListIcon as={BsTabletLandscape} />
          </Kbd>
          <Kbd>
            Mobile <ListIcon as={BsPhone} />
          </Kbd>
        </ListItem>
      </List>

      <Heading className="Skills__Heading" size="lg">
        What I use:
      </Heading>
      <div className="Skills">
        <List className="Skills__List">
          {skills.map((skillGroup, index) => (
            <SkillBlock key={`${index}group`} skills={skillGroup} />
          ))}
        </List>
        <div className="Skills__Imgs">
          {/* codewars */}
          <StatGroup
            marginTop={5}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Stat
              opacity={codewars ? 1 : 0}
              className="CodeWars__inner"
              border={`5px solid ${borderColor}`}
            >
              <Image src="https://www.codewars.com/users/yarexmarvin/badges/large" />
              <StatLabel className="CodeWars__Completed">
                Total Completed Kata:{" "}
                <Tag bgColor="#bb432c" >
                  {codewars}
                </Tag>
              </StatLabel>
              <StatLabel className="CodeWars__Languages">
                {" "}
                <Tag bgColor="#bb432c" >
                  Languages:
                </Tag>{" "}
                <Text  as="kbd" fontWeight="bold" color={jsColor}>
                  JavaScript
                </Text>{" "}
                <Text fontWeight="bold" marginLeft={2} as="kbd" color={tsColor}>
                  TypeScript
                </Text>{" "}
              </StatLabel>
              <Box padding="0 2.5vw" margin="10px 0">
                <Divider />
              </Box>
              <Box padding="0.5vh 2vw">
                <Link
                  className="CodeWars__Link"
                  href="https://www.codewars.com/users/yarexmarvin"
                >
                  <Button isFullWidth className="CodeWars__Btn">
                    Codewars <Icon color="#bb432c" as={SiCodewars} />
                  </Button>
                </Link>
              </Box>
            </Stat>
            <Spinner display={codewars ? "none" : "block"} size="lg" />
          </StatGroup>

          <Image
            className="Skills__Img"
            border={`5px solid ${borderColor}`}
            boxSize={200}
            src={stickerCalmMode}
          />

          {/* leetcode */}
          <StatGroup display="flex" justifyContent="center" alignItems="center">
            <Stat
              display={data ? "block" : "none"}
              className="CodeWars__inner"
              border={`5px solid ${borderColor}`}
              padding="15px 30px"
            >
              <Box>
                <Link href="https://leetcode.com/yarexmarvin/">
                  <Button fontSize={20} colorScheme="yellow" isFullWidth>
                    Leetcode
                    <Icon margin="0 5px" as={SiLeetcode} />
                  </Button>
                </Link>
              </Box>

              <StatLabel marginTop={3} fontSize={20}>
                Problem solved
              </StatLabel>
              <StatNumber
                fontWeight={700}
                color="green.700"
                bgColor="whiteAlpha.900"
                letterSpacing={2}
              >
                {data &&
                  data.matchedUser?.submitStats?.acSubmissionNum?.[0]?.count}
              </StatNumber>
              <Container display="flex">
                <Box margin={2}>
                  <StatLabel color="green.500">Easy</StatLabel>
                  <StatNumber>
                    {data &&
                      data.matchedUser?.submitStats?.acSubmissionNum?.[1]
                        ?.count}
                  </StatNumber>
                </Box>
                <Box margin={2}>
                  <StatLabel color="orange.500">Medium</StatLabel>
                  <StatNumber>
                    {data &&
                      data.matchedUser?.submitStats?.acSubmissionNum?.[2]
                        ?.count}
                  </StatNumber>
                </Box>
                <Box margin={2}>
                  <StatLabel color="red.500">Hard</StatLabel>
                  <StatNumber>
                    {data &&
                      data.matchedUser?.submitStats?.acSubmissionNum?.[3]
                        ?.count}
                  </StatNumber>
                </Box>
              </Container>
            </Stat>
            <Spinner display={loading ? "block" : "none"} size="lg" />
            {error && (
              <Alert status="error">
                <AlertIcon />
                There was an error in recieving data from leetcode
              </Alert>
            )}
          </StatGroup>
        </div>
      </div>
    </div>
  );
};

export default Skills;

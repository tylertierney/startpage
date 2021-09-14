import "./styles.css";

import {
  Flex,
  Grid,
  GridItem,
  Icon,
  Heading,
  Text,
  Input,
  InputRightAddon,
  InputGroup,
  Button,
} from "@chakra-ui/react";

import { useEffect, useState } from "react";

import {
  AiFillRedditCircle,
  AiFillYoutube,
  AiFillGithub,
} from "react-icons/ai";
import { FaLinkedinIn, FaReact } from "react-icons/fa";
import { BsFillLightningFill } from "react-icons/bs";
import { SiMdnwebdocs } from "react-icons/si";
import { FiMail } from "react-icons/fi";
import { getJSDocDeprecatedTag } from "typescript";

function App() {
  const [quote, setQuote] = useState("");
  const [quoteAuthor, setQuoteAuthor] = useState("");

  const getTime = () => {
    let AMorPM = "AM";
    const currentTime = new Date();
    let hours = currentTime.getHours();
    if (hours > 12) {
      hours = "0" + (hours - 12);
      AMorPM = "PM";
    }
    let minutes = currentTime.getMinutes();
    if (minutes < 10) {
      minutes = "0" + minutes;
    }

    let convertedTime = hours + ":" + minutes + " " + AMorPM;
    return convertedTime;
  };

  const getDate = () => {
    let date = new Date().toDateString();
    return date.substr(0, date.length - 4);
  };

  const determineWelcomeMessage = () => {
    let hours = new Date().getHours();
    if (hours >= 3 && hours < 12) {
      return "Good Morning";
    }
    if (hours >= 12 && hours < 17) {
      return "Good Afternoon";
    }
    if (hours >= 17 || hours < 3) {
      return "Good Evening";
    }
  };

  useEffect(() => {
    setInterval(getTime, 1000);
    getQuote();
  }, []);

  const getQuote = () => {
    fetch("https://api.quotable.io/random")
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setQuote(data.content);
        setQuoteAuthor(data.author);
      })
      .catch((err) => console.log(err));
  };

  return (
    <Grid
      p="20px"
      h="100vh"
      templateRows="repeat(6, 1fr)"
      templateColumns="repeat(8, 1fr)"
      gap={4}
      maxW="100vw"
      maxH="100vh"
      background="linear-gradient(
        225deg,
        rgba(125, 125, 125, 1) 0%,
        rgba(198, 198, 198, 1) 100%
      )"
    >
      <GridItem
        rowSpan={1}
        colSpan={5}
        color="white"
        bgColor="rgb(0, 0, 0, 0.2)"
      >
        <Flex w="100%" h="100%" justify="flex-start" align="center">
          <Heading fontWeight="300" fontSize="2rem" ml="20px">
            {determineWelcomeMessage() + ", Mr. Tierney"}
          </Heading>
        </Flex>
      </GridItem>
      <GridItem
        rowSpan={1}
        colSpan={3}
        color="white"
        bgColor="rgb(0, 0, 0, 0.2)"
        userSelect="none"
      >
        <Flex w="100%" h="100%" justify="center" align="center">
          <Flex w="90%" justify="space-around" align="flex-end">
            <Heading
              fontWeight="300"
              fontSize={["12px", "24px", "32px"]}
              ml="20px"
            >
              {getDate()}
            </Heading>
            <Text>{getTime()}</Text>
          </Flex>
        </Flex>
      </GridItem>
      <GridItem rowSpan={1} colSpan={8} bgColor="rgb(0, 0, 0, 0.2)">
        <form
          target="_blank"
          action="https://www.google.com/search"
          method="GET"
          style={{ display: "flex", width: "100%", height: "100%" }}
        >
          <Flex justify="center" align="center" h="100%" w="100%">
            <InputGroup w="80%">
              <Input
                color="white"
                _focus={{
                  outline: "none",
                  border: "1px solid white",
                  borderRight: "none",
                }}
                autoComplete="off"
                type="text"
                _hover={{ border: "1px solid white", borderRight: "none" }}
                borderRight="none"
                variant="outline"
                name="q"
                fontSize="1.4rem"
                border="1px solid white"
              />
              <InputRightAddon p="0" borderLeft="none" cursor="pointer">
                <Button
                  type="submit"
                  borderLeftRadius="none"
                  borderLeft="none"
                  border="1px solid white"
                >
                  Search
                </Button>
                {/* <Text>Search</Text> */}
              </InputRightAddon>
            </InputGroup>
          </Flex>
        </form>
      </GridItem>
      <GridItem
        _hover={{ transform: "scale(1.2)" }}
        transition="0.2s ease-in-out"
        colSpan={1}
        cursor="pointer"
        className="gridItem"
      >
        <Flex
          maxH="100%"
          maxW="100%"
          h="100%"
          w="100%"
          align="center"
          justify="center"
        >
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.reddit.com"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <Icon as={AiFillRedditCircle} fontSize="4rem" />
          </a>
        </Flex>
      </GridItem>
      <GridItem
        className="gridItem"
        _hover={{ transform: "scale(1.2)" }}
        transition="0.2s ease-in-out"
        colSpan={1}
        cursor="pointer"
      >
        <Flex
          maxH="100%"
          maxW="100%"
          h="100%"
          w="100%"
          align="center"
          justify="center"
        >
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <Icon as={FaLinkedinIn} fontSize="4rem" />
          </a>
        </Flex>
      </GridItem>
      <GridItem
        className="gridItem"
        _hover={{ transform: "scale(1.2)" }}
        transition="0.2s ease-in-out"
        colSpan={1}
        cursor="pointer"
      >
        <Flex
          maxH="100%"
          maxW="100%"
          h="100%"
          w="100%"
          align="center"
          justify="center"
        >
          <a
            target="_blank"
            rel="noreferrer"
            href="https://chakra-ui.com/docs/getting-started"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <Icon as={BsFillLightningFill} fontSize="3.6rem" />
          </a>
        </Flex>
      </GridItem>
      <GridItem
        className="gridItem"
        _hover={{ transform: "scale(1.2)" }}
        transition="0.2s ease-in-out"
        colSpan={1}
        cursor="pointer"
      >
        <Flex
          maxH="100%"
          maxW="100%"
          h="100%"
          w="100%"
          align="center"
          justify="center"
        >
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.youtube.com"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <Icon as={AiFillYoutube} fontSize="4rem" />
          </a>
        </Flex>
      </GridItem>
      <GridItem
        className="gridItem"
        _hover={{ transform: "scale(1.2)" }}
        transition="0.2s ease-in-out"
        colSpan={1}
        cursor="pointer"
      >
        <Flex
          h="100%"
          w="100%"
          maxH="100%"
          maxW="100%"
          align="center"
          justify="center"
        >
          <a
            target="_blank"
            rel="noreferrer"
            href="https://developer.mozilla.org/en-US/"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <Icon as={SiMdnwebdocs} fontSize="4rem" />
          </a>
        </Flex>
      </GridItem>
      {/* <GridItem
        className="gridItem"
        _hover={{ transform: "scale(1.2)" }}
        transition="0.2s ease-in-out"
        colSpan={1}
        cursor="pointer"
      >
        <Flex h="100%" w="100%" align="center" justify="center">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.w3schools.com/cssref/"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <Text textAlign="center" fontWeight="600" fontSize="2rem">
              W3
            </Text>
            <Text fontWeight="400" p="0" m="0" fontSize="0.8rem">
              SCHOOLS
            </Text>
          </a>
        </Flex>
      </GridItem> */}
      <GridItem
        className="gridItem"
        _hover={{ transform: "scale(1.2)" }}
        transition="0.2s ease-in-out"
        colSpan={1}
        cursor="pointer"
      >
        <Flex h="100%" w="100%" align="center" justify="center">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://mail.yahoo.com/d/folders/1"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <Icon as={FiMail} fontSize="3rem" />
          </a>
        </Flex>
      </GridItem>
      <GridItem
        className="gridItem"
        _hover={{ transform: "scale(1.2)" }}
        transition="0.2s ease-in-out"
        colSpan={1}
        cursor="pointer"
      >
        <Flex h="100%" w="100%" align="center" justify="center">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <Icon as={AiFillGithub} fontSize="3rem" />
          </a>
        </Flex>
      </GridItem>
      <GridItem
        className="gridItem"
        _hover={{ transform: "scale(1.2)" }}
        transition="0.2s ease-in-out"
        colSpan={1}
        cursor="pointer"
      >
        <Flex h="100%" w="100%" align="center" justify="center">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://react-icons.github.io/react-icons/"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <Icon as={FaReact} fontSize="3rem" />
          </a>
        </Flex>
      </GridItem>

      <GridItem
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        colSpan={8}
        bgColor="rgb(0, 0, 0, 0.2)"
        color="white"
      >
        <Flex
          direction="column"
          w="90%"
          h="100%"
          justify="center"
          align="center"
          maxW="90%"
        >
          <Text textAlign="center" fontSize="1.1rem">
            "{quote}"
          </Text>
          <Text fontSize="0.9rem">- {quoteAuthor}"</Text>
        </Flex>
      </GridItem>
    </Grid>
  );
}

export default App;

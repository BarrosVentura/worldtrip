import { Box, Flex, Text, useBreakpointValue } from "@chakra-ui/react";
import type { NextPage } from "next";
import {
  Airplane,
  Building,
  Cocktail,
  Earth,
  Museum,
  Surf,
} from "../assets/Icons";
import { ContinentSwiper } from "../components/ContinentSwiper";
import { Header } from "../components/Header";
import { TravelType } from "../components/TravelType";

const Home: NextPage = () => {
  const showPlane = useBreakpointValue({
    base: false,
    lg: true,
  });
  const isSmall = useBreakpointValue({
    base: true,
    md: false,
  });
  return (
    <Box>
      <Header />
      <Box
        backgroundImage="url('/images/Background.png')"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
      >
        <Flex
          justifyContent="space-between"
          alignItems="center"
          gap={200}
          maxW={1160}
          px={[6, 4, 4, 4, 0]}
          w="100%"
          margin="auto"
        >
          <Box py={20}>
            <Text
              fontWeight="medium"
              fontSize="4xl"
              color="gray.50"
              maxW={showPlane ? 426 : "100%"}
            >
              5 Continentes, infinitas possibilidades.
            </Text>
            <Text
              fontSize="larger"
              color="gray.200"
              maxW={showPlane ? 426 : "100%"}
              pt={5}
            >
              Chegou a hora de tirar do papel a viagem que você sempre sonhou.
            </Text>
          </Box>
          {showPlane && <Airplane mb="-24" />}
        </Flex>
      </Box>
      <Flex
        py={20}
        maxW={1160}
        w="100%"
        px={[6, 4, 4, 4, 0]}
        margin="auto"
        justifyContent={isSmall ? "space-evenly" : "space-between"}
        gap={isSmall ? 6 : 0}
        flexWrap="wrap"
        position="relative"
        _after={{
          content: `""`,
          position: "absolute",
          width: "90px",
          height: "2px",
          bottom: 0,
          bg: "gray.800",
          left: "50%",
          transform: "translate(-50%,0)",
        }}
      >
        <TravelType subtitle="vida noturna">
          <Cocktail />
        </TravelType>
        <TravelType subtitle="praia">
          <Surf />
        </TravelType>
        <TravelType subtitle="moderno">
          <Building />
        </TravelType>
        <TravelType subtitle="clássico">
          <Museum />
        </TravelType>
        <TravelType subtitle="e mais...">
          <Earth />
        </TravelType>
      </Flex>
      <Flex
        px={36}
        py={14}
        flexDir="column"
        justifyContent="center"
        alignItems="center"
        text-align="center"
      >
        <Text
          fontWeight={500}
          fontSize={isSmall ? "3xl" : "4xl"}
          textAlign="center"
        >
          Vamos nessa?
        </Text>
        <Text
          fontWeight={500}
          fontSize={isSmall ? "3xl" : "4xl"}
          textAlign="center"
        >
          Então escolha seu continente
        </Text>
      </Flex>
      <Box
        maxW={1240}
        w="100%"
        h={450}
        margin="auto"
        mb={40}
        px={[2, 4, 4, 4, 0]}
      >
        <ContinentSwiper />
      </Box>
    </Box>
  );
};

export default Home;

import { Box, Flex, Stack, Text } from "@chakra-ui/react";
import type { NextPage } from "next";
import {
  Airplane,
  Building,
  Cocktail,
  Earth,
  Logo,
  Museum,
  Surf,
} from "../assets/Icons";
import { Header } from "../components/Header";
import { TravelType } from "../components/TravelType";

const Home: NextPage = () => {
  return (
    <Box>
      <Header />
      <Flex
        backgroundImage="url('/images/Background.png')"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
        justifyContent="space-between"
        alignItems="center"
        gap={200}
        px={36}
      >
        <Box py={20}>
          <Text fontWeight="medium" fontSize="4xl" color="gray.50" maxW={426}>
            5 Continentes, infinitas possibilidades.
          </Text>
          <Text fontSize="larger" color="gray.200" maxW={524} pt={5}>
            Chegou a hora de tirar do papel a viagem que você sempre sonhou.
          </Text>
        </Box>
        <Airplane mb="-24" />
      </Flex>
      <Flex
        px={36}
        py={20}
        justifyContent="space-between"
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
    </Box>
  );
};

export default Home;

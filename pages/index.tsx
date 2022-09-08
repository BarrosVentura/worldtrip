import { Box, Flex, Stack, Text } from "@chakra-ui/react";
import type { NextPage } from "next";
import { Airplane, Logo } from "../assets/Icons";
import { Header } from "../components/Header";

const Home: NextPage = () => {
  return (
    <Box>
      <Header />
      <Flex
        backgroundImage="url('/images/Background.png')"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
        justifyContent="center"
        alignItems="center"
        gap={200}
        px={36}
      >
        <Box py={20}>
          <Text fontWeight="medium" fontSize="4xl" color="gray.50" maxW={426}>
            5 Continentes, infinitas possibilidades.
          </Text>
          <Text fontSize="larger" color="gray.200" maxW={524}>
            Chegou a hora de tirar do papel a viagem que você sempre sonhou.
          </Text>
        </Box>
        <Airplane mb="-24" />
      </Flex>
    </Box>
  );
};

export default Home;

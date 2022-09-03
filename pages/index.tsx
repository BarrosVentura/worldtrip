import { Box, Flex, Stack, Text } from "@chakra-ui/react";
import type { NextPage } from "next";
import { Airplane, Logo } from "../assets/Icons";
import { Header } from "../components/Header";

const Home: NextPage = () => {
  return (
    <Box>
      <Header />
      <Flex>
        <Box>
          <Text fontWeight="medium" fontSize="4xl">
            5 Continentes, infinitas possibilidades.
          </Text>
          <Text fontSize="larger">
            Chegou a hora de tirar do papel a viagem que você sempre sonhou.
          </Text>
        </Box>
        <Airplane />
      </Flex>
    </Box>
  );
};

export default Home;

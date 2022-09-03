import { Flex } from "@chakra-ui/react";
import { Logo } from "../../assets/Icons";

export function Header() {
  return (
    <Flex as="header" w="100%" justifyContent="center" py="7">
      <Logo />
    </Flex>
  );
}

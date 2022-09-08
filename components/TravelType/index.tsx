import { Flex, Text } from "@chakra-ui/react";

interface TravelTypeProps {
  children: React.ReactNode;
  subtitle: string;
}

export function TravelType({ children, subtitle }: TravelTypeProps) {
  return (
    <Flex flexDir="column" gap={6} justifyContent="center" alignItems="center">
      {children}
      <Text fontWeight={600} fontSize="2xl" color="gray.800">
        {subtitle}
      </Text>
    </Flex>
  );
}

import { Flex, Text, useBreakpointValue } from "@chakra-ui/react";

interface TravelTypeProps {
  children: React.ReactNode;
  subtitle: string;
}

export function TravelType({ children, subtitle }: TravelTypeProps) {
  const showIcon = useBreakpointValue({
    base: false,
    md: true,
  });
  return (
    <Flex flexDir="column" gap={6} justifyContent="center" alignItems="center">
      {showIcon && children}
      <Text
        display="flex"
        alignItems="center"
        fontWeight={600}
        fontSize="2xl"
        color="gray.800"
        _before={
          !showIcon && {
            content: `""`,
            display: "inline-block",
            h: 2,
            w: 2,
            mr: 2,
            backgroundColor: "yellow.500",
            borderRadius: "50%",
          }
        }
      >
        {subtitle}
      </Text>
    </Flex>
  );
}

import { Box, Flex, Text, Tooltip } from "@chakra-ui/react";
import { Info } from "../../assets/Icons";

interface NumberHighlightProps {
  number: number;
  subtitle: string;
  label?: number;
}

export function NumberHighlight({
  number,
  subtitle,
  label,
}: NumberHighlightProps) {
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      flexDir="column"
      lineHeight="shorter"
    >
      <Text fontSize="5xl" fontWeight={600} color="yellow.400">
        {number}
      </Text>
      <Flex justifyContent="center" alignItems="center" gap={2}>
        <Text fontSize="2xl" fontWeight={600} color="gray.800" lineHeight="1">
          {subtitle}
        </Text>
        {label && (
          <Tooltip
            display="inline-block"
            label={`${label} cidades nas lista dos +100 visitados`}
            color="gray.50"
          >
            <Box>
              <Info h={4} w={4} />
            </Box>
          </Tooltip>
        )}
      </Flex>
    </Flex>
  );
}

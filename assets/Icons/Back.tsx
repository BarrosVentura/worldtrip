import { chakra, ChakraProps } from "@chakra-ui/react";

interface BackProps extends ChakraProps {
  onClick: () => void;
}

export function Back({ onClick, ...rest }: BackProps) {
  return (
    <chakra.svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
      {...rest}
    >
      <path
        d="M10 12L6 8L10 4"
        stroke="#47585B"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </chakra.svg>
  );
}

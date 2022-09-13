import { chakra, ChakraProps } from "@chakra-ui/react";

export function Next(props: ChakraProps) {
  return (
    <chakra.svg
      width="60"
      height="60"
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M22.5 45L37.5 30L22.5 15"
        stroke="#FFBA08"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </chakra.svg>
  );
}

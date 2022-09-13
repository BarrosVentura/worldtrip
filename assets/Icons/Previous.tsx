import { chakra, ChakraProps } from "@chakra-ui/react";

export function Previous(props: ChakraProps) {
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
        d="M37.5 45L22.5 30L37.5 15"
        stroke="#FFBA08"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </chakra.svg>
  );
}

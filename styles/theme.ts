import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  fonts: {
    heading: "Poppins",
    body: "Poppins",
  },
  textStyles: {
    secondary: {
      fontFamily: "Barlow",
    },
  },
  colors: {
    gray: {
      50: "#F5F8FA",
      200: "#DADADA",
      800: "#47585B",
    },
    yellow: {
      400: "#FFBA08",
    },
  },
});

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
      100: "##F5F8FA",
      200: "#DADADA",
      300: "#999999",
      800: "#47585B",
    },
    yellow: {
      400: "#FFBA08",
    },
  },
  styles: {
    global: {
      body: {
        bg: "gray.100",
      },
    },
  },
});

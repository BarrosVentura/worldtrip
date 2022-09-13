import { Flex, Grid, GridItem } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { Back, Logo } from "../../assets/Icons";

export function Header() {
  const router = useRouter();
  const { pathname } = router;
  const isContinent = pathname !== "/";

  return (
    <Grid
      as="header"
      w="100%"
      gridTemplateColumns="1fr 1fr"
      justifyContent="center"
      alignItems="center"
      py="7"
    >
      {isContinent && (
        <GridItem gridRow="1" gridColumnStart="1">
          <Back
            h={12}
            w={12}
            ml={30}
            onClick={() => router.back()}
            cursor="pointer"
            _hover={{
              filter: "auto",
              brightness: "50%",
            }}
          />
        </GridItem>
      )}
      <GridItem
        gridColumnStart="1"
        gridColumnEnd="span 2"
        gridRow="1"
        justifySelf="center"
      >
        <Logo />
      </GridItem>
    </Grid>
  );
}

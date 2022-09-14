import { Box, Flex, Grid, HStack, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { NumberHighlight } from "../../components/NumberHighlight";

interface ContinentState {
  name: string;
  subtitle: string;
  background: string;
  link: string;
  description: string;
  numberOfCountries: number;
  numberOfCities: number;
  numberOfLanguages: number;
  numberOFTopCities: number;
  cities: {
    city: string;
    country: string;
    flag: string;
  }[];
}

export default function Continent() {
  const router = useRouter();
  const { slug } = router.query;
  const [pageContent, setPageContent] = useState<ContinentState>(undefined);
  useEffect(() => {
    async function getContinent() {
      try {
        const response = await fetch(
          `http://localhost:3333/continents?link=${slug}`
        );
        const data: ContinentState[] = await response.json();
        setPageContent(data.pop());
      } catch (error) {
        console.log(error);
      }
    }
    getContinent();
  }, [slug]);

  if (!pageContent) {
    return <div>Carregando...</div>;
  }

  return (
    <Box>
      <Header />
      <Box
        backgroundImage={`url('${pageContent.background}')`}
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
        h={500}
        w="100%"
        mb={20}
      >
        <Flex w="100%" h="100%" maxW={1140} margin="auto" alignItems="flex-end">
          <Text fontSize="5xl" fontWeight="semibold" color="gray.50" mb={16}>
            {pageContent.name}
          </Text>
        </Flex>
      </Box>
      <Grid
        w="100%"
        h="100%"
        maxW={1140}
        margin="auto"
        gridTemplateColumns="1fr 1fr"
        gap={70}
      >
        <Box>
          <Text fontSize="2xl" color="gray.800">
            {pageContent.description}
          </Text>
        </Box>
        <HStack justifyContent="space-between">
          <NumberHighlight
            number={pageContent.numberOfCountries}
            subtitle="países"
          />
          <NumberHighlight
            number={pageContent.numberOfLanguages}
            subtitle="línguas"
          />
          <NumberHighlight
            number={pageContent.numberOfCities}
            subtitle="cidades +100"
            label={pageContent.numberOFTopCities}
          />
        </HStack>
      </Grid>
    </Box>
  );
}

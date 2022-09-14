import {
  Box,
  Flex,
  Grid,
  GridItem,
  HStack,
  Image,
  Text,
} from "@chakra-ui/react";
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
          <Text
            as="h1"
            fontSize="5xl"
            fontWeight="semibold"
            color="gray.50"
            mb={16}
          >
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
        mb={20}
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
      <Box w="100%" h="100%" maxW={1140} margin="auto" mb={16}>
        <Text
          as="h2"
          fontSize="4xl"
          fontWeight="medium"
          color="gray.800"
          mb={16}
        >
          Cidades +100
        </Text>
        <Grid gridTemplateColumns="1fr 1fr 1fr 1fr" gap={12}>
          {pageContent.cities.map((item) => (
            <GridItem key={item.city}>
              <Image
                src={pageContent.background}
                alt=""
                borderTopLeftRadius={4}
                borderTopRightRadius={4}
              />
              <Flex
                p={6}
                border="1px solid"
                borderColor="yellow.400"
                borderRadius={4}
                justifyContent="space-between"
                alignItems="center"
              >
                <Flex flexDir="column" gap={3}>
                  <Text fontSize="larger" color="gray.800">
                    {item.city}
                  </Text>
                  <Text fontSize="medium" color="gray.300">
                    {item.country}
                  </Text>
                </Flex>
                <Box>
                  <Image
                    w={7}
                    h={7}
                    borderRadius="50%"
                    src={item.flag}
                    alt=""
                  />
                </Box>
              </Flex>
            </GridItem>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { useEffect, useState } from "react";
import { chakra, Flex, Text } from "@chakra-ui/react";
import { useNavigationButton } from "./NavigationButton";

interface ContinentsState {
  name: string;
  subtitle: string;
  background: string;
}

const ChakraSwiper = chakra(Swiper);

export function ContinentSwiper() {
  const [continents, setContinents] = useState<ContinentsState[]>([]);
  const { SlideNextButton, SlidePrevButton, SwiperPagination } =
    useNavigationButton();

  useEffect(() => {
    async function getContinents() {
      const response = await fetch("http://localhost:3333/continents");
      const data = await response.json();
      setContinents(data);
    }
    getContinents();
  }, []);

  return (
    <ChakraSwiper modules={[Navigation, Pagination]} h="100%" w="100%">
      {continents.map(({ name, background, subtitle }) => (
        <SwiperSlide key={name} data-hash={name}>
          <Flex
            backgroundImage={`url(${background})`}
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            justifyContent="center"
            alignItems="center"
            flexDir="column"
            gap={4}
            w="100%"
            height="100%"
          >
            <Text color="gray.50" fontWeight={700} fontSize="5xl">
              {name}
            </Text>
            <Text color="white" fontWeight={700} fontSize="2xl">
              {subtitle}
            </Text>
          </Flex>
        </SwiperSlide>
      ))}
      <SwiperPagination />
      <SlideNextButton />
      <SlidePrevButton />
    </ChakraSwiper>
  );
}

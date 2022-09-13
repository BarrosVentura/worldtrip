import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { useEffect, useState } from "react";
import {
  chakra,
  Flex,
  Text,
  useBreakpointValue,
  Link as ChakraLink,
} from "@chakra-ui/react";
import { useNavigationButton } from "./NavigationButton";
import Link from "next/link";

interface ContinentsState {
  name: string;
  subtitle: string;
  background: string;
  link: string;
}

const ChakraSwiper = chakra(Swiper);

export function ContinentSwiper() {
  const isSmall = useBreakpointValue({
    base: true,
    md: false,
  });
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
      {continents.map(({ name, background, subtitle, link }) => (
        <SwiperSlide key={name} data-hash={name}>
          <Link href={`continent/${link}`} passHref>
            <ChakraLink
              _hover={{
                textDecoration: "none",
              }}
            >
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
                <Text
                  color="gray.50"
                  fontWeight={700}
                  fontSize={isSmall ? "3xl" : "5xl"}
                  textAlign="center"
                >
                  {name}
                </Text>
                <Text
                  color="white"
                  fontWeight={700}
                  fontSize={isSmall ? "md" : "2xl"}
                  px={isSmall && "60px"}
                  textAlign="center"
                >
                  {subtitle}
                </Text>
              </Flex>
            </ChakraLink>
          </Link>
        </SwiperSlide>
      ))}
      <SwiperPagination />
      <SlideNextButton />
      <SlidePrevButton />
    </ChakraSwiper>
  );
}

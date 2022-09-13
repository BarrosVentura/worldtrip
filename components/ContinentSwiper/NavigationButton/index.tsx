import { Button, ChakraProps } from "@chakra-ui/react";
import { ReactElement } from "react";
import { useSwiper } from "swiper/react";
import { Next, Previous } from "../../../assets/Icons";

interface ChakraSwiperNavigationProps extends ChakraProps {
  onClick: () => void;
  children: ReactElement;
  className: string;
}

export function ChakraSwiperNavigation({
  onClick,
  children,
  className,
}: ChakraSwiperNavigationProps) {
  return (
    <Button
      className={className}
      position="absolute"
      background="transparent"
      _after={{
        display: "none",
      }}
      _active={{
        background: "none",
        filter: "auto",
        brightness: "60%",
      }}
      _hover={{
        background: "none",
        filter: "auto",
        brightness: "80%",
      }}
      h={100}
      w={100}
      onClick={onClick}
    >
      {children}
    </Button>
  );
}

export function SlideNextButton(props: ChakraProps) {
  const swiper = useSwiper();

  return (
    <ChakraSwiperNavigation
      className="swiper-button-next"
      onClick={() => swiper.slideNext()}
      {...props}
    >
      <Next />
    </ChakraSwiperNavigation>
  );
}

export function SlidePrevButton(props: ChakraProps) {
  const swiper = useSwiper();

  return (
    <ChakraSwiperNavigation
      className="swiper-button-prev"
      onClick={() => swiper.slidePrev()}
      {...props}
    >
      <Previous />
    </ChakraSwiperNavigation>
  );
}

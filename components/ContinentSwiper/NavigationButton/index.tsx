import { Box, Button, ChakraProps } from "@chakra-ui/react";
import { ReactElement, useState } from "react";
import { useSwiper } from "swiper/react";
import { Next, Previous } from "../../../assets/Icons";

interface ChakraSwiperNavigationProps extends ChakraProps {
  onClick: () => void;
  children: ReactElement;
  className: string;
  isDisabled: boolean;
}

export function ChakraSwiperNavigation({
  onClick,
  children,
  className,
  isDisabled,
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
      isDisabled={isDisabled}
      _disabled={{
        filter: "grayscale(90%)",
        cursor: "not-allowed",
        _hover: {
          filter: "grayscale(90%)",
        },
      }}
      onClick={onClick}
    >
      {children}
    </Button>
  );
}

export function useNavigationButton() {
  const [paginationPosition, setPaginationPosition] = useState(0);

  function SlideNextButton(props: ChakraProps) {
    const swiper = useSwiper();
    function handdleClick() {
      swiper.slideNext();
      setPaginationPosition(swiper.activeIndex);
    }

    return (
      <ChakraSwiperNavigation
        className="swiper-button-next"
        onClick={() => handdleClick()}
        isDisabled={swiper.isEnd}
        {...props}
      >
        <Next />
      </ChakraSwiperNavigation>
    );
  }

  function SlidePrevButton(props: ChakraProps) {
    const swiper = useSwiper();
    function handdleClick() {
      swiper.slidePrev();
      setPaginationPosition(swiper.activeIndex);
    }

    return (
      <ChakraSwiperNavigation
        className="swiper-button-prev"
        onClick={() => handdleClick()}
        isDisabled={swiper.isBeginning}
        {...props}
      >
        <Previous />
      </ChakraSwiperNavigation>
    );
  }

  function SwiperPagination() {
    const swiper = useSwiper();
    const slides = swiper.slides.map((item) => item);

    function handleClick(position: number) {
      swiper.slideTo(position);
      setPaginationPosition(position);
    }

    return (
      <div className="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal">
        {slides.map((slide, index) => (
          <Box
            key={`swiper-pagination-${index}`}
            className={`swiper-pagination-bullet ${
              index === paginationPosition
                ? "swiper-pagination-bullet-active"
                : ""
            }`}
            backgroundColor={
              index === paginationPosition ? "yellow.500" : "gray.300"
            }
            opacity="1"
            h={4}
            w={4}
            onClick={() => handleClick(index)}
          ></Box>
        ))}
      </div>
    );
  }

  return { SlideNextButton, SlidePrevButton, SwiperPagination };
}

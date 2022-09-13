import { Button, ChakraProps } from "@chakra-ui/react";
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
  const [nextDisabled, setNextDisabled] = useState(false);
  const [prevDisabled, setPrevDisabled] = useState(false);

  function SlideNextButton(props: ChakraProps) {
    const swiper = useSwiper();
    function handdleClick() {
      if (swiper.isEnd) setNextDisabled(true);
      if (prevDisabled) setPrevDisabled(false);
      swiper.slideNext();
    }

    return (
      <ChakraSwiperNavigation
        className="swiper-button-next"
        onClick={() => handdleClick()}
        isDisabled={nextDisabled}
        {...props}
      >
        <Next />
      </ChakraSwiperNavigation>
    );
  }

  function SlidePrevButton(props: ChakraProps) {
    const swiper = useSwiper();
    function handdleClick() {
      if (swiper.isBeginning) setPrevDisabled(true);
      if (nextDisabled) setNextDisabled(false);
      swiper.slidePrev();
    }

    return (
      <ChakraSwiperNavigation
        className="swiper-button-prev"
        onClick={() => handdleClick()}
        isDisabled={prevDisabled}
        {...props}
      >
        <Previous />
      </ChakraSwiperNavigation>
    );
  }

  return { SlideNextButton, SlidePrevButton };
}

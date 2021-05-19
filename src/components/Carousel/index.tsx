import { Children, CSSProperties } from "react";
import { Box, SimpleGrid, Image, Flex, Stack } from "@chakra-ui/react";
import { Carousel } from "react-responsive-carousel";

export default function CarouselComponent() {
    const indicatorStyles: CSSProperties = {
        background: "#F1FFFC",
        width: 16,
        height: 16,
        borderRadius: 8,
        display: "inline-block",
        margin: "0 8px",
      };
      const arrowStyles: CSSProperties = {
        position: "absolute",
        zIndex: 2,
        top: "calc(50% - 15px)",
        width: 30,
        height: 30,
        cursor: "pointer",
      };

    return(

        <Flex direction="column" h={["250px","430"]} mt="80px">
        <SimpleGrid h={145} align="center">
          <Stack spacing="14">
            <Carousel
              width="100%"
              dynamicHeight
              infiniteLoop
              autoPlay
              interval={3000}
              renderArrowPrev={(onClickHandler, hasPrev, label) =>
                hasPrev && (
                  <button
                    type="button"
                    onClick={onClickHandler}
                    title={label}
                    style={{ ...arrowStyles, left: 15 }}
                  >
                    <Image src="./images/arrowLeft.svg" alt="Arrow Left" />
                  </button>
                )
              }
              renderArrowNext={(onClickHandler, hasNext, label) =>
                hasNext && (
                  <button
                    type="button"
                    onClick={onClickHandler}
                    title={label}
                    style={{ ...arrowStyles, right: 15 }}
                  >
                    <Image src="./images/arrowRight.svg" alt="Arrow Right" color="#52C1FF"/>
                  </button>
                )
              }
              renderIndicator={(onClickHandler, isSelected, index, label) => {
                if (isSelected) {
                  return (
                    <li
                      style={{ ...indicatorStyles, background: "#52C1FF" }}
                      aria-label={`Selected: ${label} ${index + 1}`}
                      title={`Selected: ${label} ${index + 1}`}
                    />
                  );
                }
                return (
                  <li
                    style={indicatorStyles}
                    onClick={onClickHandler}
                    onKeyDown={onClickHandler}
                    value={index}
                    key={index}
                    role="button"
                    tabIndex={0}
                    title={`${label} ${index + 1}`}
                    aria-label={`${label} ${index + 1}`}
                  />
                );
              }}
            >
              <Box>
                <Image src="/images/image1.jpg" boxSize={["250px", "430px"]} />
              </Box>
              <Box>
                <Image src="/images/image2.jpg" boxSize={["250px", "430px"]} />
              </Box>
              <Box>
                <Image src="/images/image3.jpg" boxSize={["250px", "430px"]} />
              </Box>
            </Carousel>
          </Stack>
        </SimpleGrid>
      </Flex>

    );
}
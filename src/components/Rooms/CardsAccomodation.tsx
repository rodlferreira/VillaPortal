import { Flex, Box, Text } from "@chakra-ui/react";
import { CarouselComponent } from "./CarouselComponent";

export function CardsAccomodation() {
  return (
    <Flex align="center" bgColor="#D7D7D7" w="95%" mt="20%">
      <Flex w={["50%","36%"]} bgColor="blue">
        <CarouselComponent />
      </Flex>
      <Box>
        <Text>Testando</Text>
      </Box>
    </Flex>
  );
}

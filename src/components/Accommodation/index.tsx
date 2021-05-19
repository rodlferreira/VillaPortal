import {
  Flex,
  Text,
  Box,
  Image,
  SimpleGrid,
  FormControl,
  Button,
  HStack,
  useBreakpointValue,
} from "@chakra-ui/react";

export default function Accomodation() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });
  return (
    <Flex align="center" justify="center" direction="column">
      {isWideVersion && (
        <>
          <Box mt="250" alignItems="center" alignContent="center">
            <Text
              fontSize={["", "36px"]}
              color="#FEC200"
              fontFamily="Averia Libre"
              mb="60px"
            >
              A pousada
            </Text>
          </Box>
          <Flex>
            <SimpleGrid>
              <HStack>
                <Box mt="10px">
                  <Flex
                    direction="column"
                    align="center"
                    mr="-10"
                    justify="center"
                  >
                    <Flex
                      w={["50px", "101px"]}
                      h={["50px", "101px"]}
                      bg="linear-gradient(180deg, rgba(90, 146, 255, 0.87) 0%, #086BB3 100%);"
                      borderRadius="30px"
                      align="center"
                      justify="center"
                      mt="90px"
                    >
                      <Image src="/images/Breakfast.svg" alt="Breakfast" />
                    </Flex>
                    <Text
                      mt="20px"
                      color="#8A99A8"
                      fontFamily="Averia Libre"
                      fontSize="20px"
                    >
                      Café da manhã grátis.
                    </Text>

                    <Text w="180px" textAlign="center" color="#CBCDCF">
                      O melhor café da manhã da região
                    </Text>
                  </Flex>
                </Box>
                <Flex>
                  <Image
                    src="/images/Line.svg"
                    alt="Breakfast"
                    alignItems="center"
                    mt="0px"
                  />
                </Flex>

                {/* begin icon wifi */}
                <Box alignContent="center">
                  <Flex
                    direction="column"
                    align="center"
                    justify="center"
                    ml="-20px"
                    mr="-15px"
                  >
                    <Flex
                      w="139px"
                      h="139px"
                      bg="linear-gradient(180deg, rgba(255, 219, 90, 0.87) 0%, #DEB72E 100%)"
                      borderRadius="30px"
                      align="center"
                      justify="center"
                      mt="70px"
                    >
                      <Box mt="20px">
                        <Image src="/images/Wifi.svg" alt="Breakfast" />
                      </Box>
                    </Flex>
                    <Box justify="center">
                      <Text
                        mt="20px"
                        color="#8A99A8"
                        fontFamily="Averia Libre"
                        fontSize="20px"
                      >
                        Wifi grátis.
                      </Text>
                    </Box>
                    {/* finish icon wifi */}
                    <Box mt="3px">
                      <Text w="180px" textAlign="center" color="#CBCDCF">
                        Acesse suas redes socias a vontade
                      </Text>
                    </Box>
                  </Flex>
                </Box>
                <Flex>
                  <Image src="/images/Line.svg" alt="Breakfast"/>
                </Flex>
                
                <Flex
                  w="101px"
                  h="101px"
                  bg="linear-gradient(180deg, rgba(90, 146, 255, 0.87) 0%, #086BB3 100%);"
                  borderRadius="30px"
                  align="center"
                  justify="center"
                >
                  <Box>
                    <Image src="/images/ServiceRoom.svg" alt="Breakfast" />
                  </Box>
                </Flex>

                <Flex>
                  <Box
                    direction="column"
                    align="center"
                    ml="-40"
                    justify="center"
                    mt="182px"
                  >
                    <Text
                      mt="40px"
                      color="#8A99A8"
                      fontFamily="Averia Libre"
                      fontSize="20px"
                    >
                      Café da manhã grátis.
                    </Text>
                    <Text w="180px" textAlign="center" color="#CBCDCF">
                      O melhor café da manhã da região
                    </Text>
                  </Box>
                </Flex>
              </HStack>
            </SimpleGrid>
          </Flex>
        </>
      )}
      {!isWideVersion && (
        <>
        <Box alignItems="center" alignContent="center">
        <Text
          fontSize="36"
          color="#FEC200"
          fontFamily="Averia Libre"
          mb="60px"
        >
          A pousada
        </Text>
      </Box>
        <Box align="center justify="center>
          <SimpleGrid direction="column">
            <Box mt="-90">
              <Flex direction="column" align="center" ml="15" justify="center">
                <Flex
                  w="90px"
                  h="90px"
                  bg="linear-gradient(180deg, rgba(90, 146, 255, 0.87) 0%, #086BB3 100%);"
                  borderRadius="30px"
                  align="center"
                  justify="center"
                  mt="90px"
                >
                  <Image src="/images/Breakfast.svg" alt="Breakfast" />
                </Flex>
                <Text
                  mt="20px"
                  color="#8A99A8"
                  fontFamily="Averia Libre"
                  fontSize="20px"
                >
                  Café da manhã grátis.
                </Text>

                <Text w="180px" textAlign="center" color="#CBCDCF">
                  O melhor café da manhã da região
                </Text>
              </Flex>
            </Box>
            
            {/* begin icon wifi */}
            <Box alignContent="center">
              <Flex
                direction="column"
                align="center"
                justify="center"
              >
                <Flex
                  w="120px"
                  h="120px"
                  bg="linear-gradient(180deg, rgba(255, 219, 90, 0.87) 0%, #DEB72E 100%)"
                  borderRadius="30px"
                  align="center"
                  justify="center"
                  mt="70px"
                >
                  <Box mt="20px">
                    <Image src="/images/Wifi.svg" alt="Breakfast" />
                  </Box>
                </Flex>
                <Box justify="center">
                  <Text
                    mt="20px"
                    color="#8A99A8"
                    fontFamily="Averia Libre"
                    fontSize="20px"
                  >
                    Wifi grátis.
                  </Text>
                </Box>
                {/* finish icon wifi */}
                <Box 
                  mt="3px" 
                  mb="20%"
                >
                  <Text
                    w="180px"
                    textAlign="center"
                    color="#CBCDCF"
                  >
                    Acesse suas redes socias a vontade
                    
                  </Text>
                </Box>
              </Flex>
            </Box>
            
            <Box align="center" justify="center">
            <Flex
              w="90px"
              h="90px"
              bg="linear-gradient(180deg, rgba(90, 146, 255, 0.87) 0%, #086BB3 100%);"
              borderRadius="30px"
              align="center"
              justify="center"
            >
              <Box>
                <Image src="/images/ServiceRoom.svg" alt="Breakfast" />
              </Box>
            </Flex>

            <Flex>
              <Box
                direction="column"
                align="center"
                justify="center"
                mt="20px"
              >
                <Text
                  color="#8A99A8"
                  fontFamily="Averia Libre"
                  fontSize="20px"
                  textAlign="center" 
                  
                  
                >
                  Café da manhã grátis.
                </Text>
                <Text 
                  w="180px"
                  textAlign="center" 
                  color="#CBCDCF"
                  align="center"
                  justify="center"
                >
                  O melhor café da manhã da região

                </Text>
              </Box>
            </Flex>
            </Box>
          </SimpleGrid>
        </Box>
        </>
      )}
    </Flex>
    
  );
}

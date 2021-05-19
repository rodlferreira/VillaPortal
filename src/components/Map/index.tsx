import { AspectRatio,
         Box, 
         Flex, 
         Grid, 
         Text,
         Stack, 
         useBreakpointValue,
}from "@chakra-ui/react";

import React from "react";


export function Map() {
    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true,
      });
    return(
        <Flex align="center" justify="center" direction="column">
        {isWideVersion && (
            <Grid 
            mt="450px" 
            content="center" 
            bg="#F6E05E" 
            borderRadius="50px" 
            width="90%" 
            height="400px" 
            align="center" 
            alignContent="center" 
            marginLeft="70px"
            position="absolute"
        >
            <Box 
                width="430px" 
                marginLeft="30px"
            >
            <AspectRatio ratio={4/3}>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.656477198578!2d-35.22142795030782!3d-9.00372249518004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7008bbfa21beb2b%3A0xe17c9b8db24d35e8!2sPOUSADA%20VILLA%20PORTAL!5e0!3m2!1spt-BR!2sbr!4v1621389038676!5m2!1spt-BR!2sbr"
                />
            </AspectRatio>

            <Grid 
                align="center" 
                marginLeft="470px"
                position="absolute" 
                mt="-320px" 
                width="10%"
            >
                <Flex align="center">
                    <Stack>

                        <Text
                            color="#FFFFFF"
                            marginBottom="10px"
                            fontSize="4xl"
                         >
                             Localização
                         </Text>

                    </Stack>
                </Flex>
            </Grid>

            <Grid
                align="center"
                marginLeft="470px" 
                position="absolute" 
                mt="-220px" 
                width="10%"
             >
                <Flex align="center">
                    <Stack>
                        <Text 
                          color="#FFFFFF" 
                          marginBottom="10px" 
                        >
                            Av. Cândido Portinari
                        </Text>

                        <Text
                         color="#FFFFFF"
                        >
                            Maragogi - AL
                        </Text>

                        <Text
                         color="#FFFFFF"
                        >
                            57955-000
                        </Text>

                    </Stack>
                </Flex>
            </Grid>
            <Box 
                bg="#E3B100" 
                position="absolute" 
                width="1" 
                height="250px" 
                marginLeft="800px" 
                mt="-280px"
            >
                <Text color="#E3B100">.</Text>
            </Box>

            <Grid 
                align="center"
                right="160px" 
                position="absolute" 
                mt="-320px" 
                width="10%"
            >
                <Flex align="center">
                    <Stack>
                        <Text
                         color="#FFFFFF" 
                         marginBottom="10px" 
                         fontSize="4xl"
                         >
                             Contato
                         </Text>
                    </Stack>
                </Flex>
            </Grid>

            <Grid 
                align="center" 
                right="150px" 
                position="absolute" 
                mt="-220px" 
                width="10%"
            >
                <Flex align="center">
                    <Stack>
                        <Text
                         color="#FFFFFF" 
                         marginBottom="10px" 
                        >
                            Celular: +55 (82) 988712203
                        </Text>

                        <Text
                         color="#FFFFFF"
                        >
                            Fixo: +55 (82) 3333-5555
                        </Text>

                    </Stack>
                </Flex>
            </Grid>
            </Box>
        </Grid>
        )}

        {/* mobile */}

        {!isWideVersion && (
            <>
            <Box align="center" justify="center">
             <Flex align="center" justify="center" direction="column">
            <Grid 
            mt="290px" 
            content="center" 
            bg="#F6E05E" 
            borderRadius="50px" 
            width="320px" 
            height="260px" 
            align="center" 
            alignContent="center" 
            justify="center"
            // marginLeft="70px"
            position="absolute"
            >
            <Box 
                width="40%" 
                // marginLeft="10px"
            >
            <AspectRatio ratio={0.1/0.1}>
                <iframe
                   src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.656477198578!2d-35.22142795030782!3d-9.00372249518004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7008bbfa21beb2b%3A0xe17c9b8db24d35e8!2sPOUSADA%20VILLA%20PORTAL!5e0!3m2!1spt-BR!2sbr!4v1621389038676!5m2!1spt-BR!2sbr"

                />
            </AspectRatio>
            
            <Box>
            <Grid 
                align="center" 
                marginLeft="130px"
                position="absolute" 
                mt="-180px" 
                width="10%"
                justify="center"
            >
                <Flex>
                    <Stack>

                        <Text
                            color="#FFFFFF"
                            // marginBottom="10px"
                            fontSize="md"
                            align="center"
                            justify="center"
                            textAlign="center"
                         >
                             Localização
                         </Text>

                    </Stack>
                </Flex>
            </Grid>
            </Box>

            <Grid
                // align="center"
                marginLeft="150px" 
                position="absolute" 
                mt="-150px" 
                width="10%"
                fontSize="12"
             >
                <Flex>
                    <Stack>
                        <Text 
                          color="#FFFFFF" 
                          marginBottom="1px" 
                        >
                            Av. Cândido Portinari
                        </Text>

                        <Text
                         color="#FFFFFF"
                        >
                            Maragogi - AL
                        </Text>

                        <Text
                         color="#FFFFFF"
                        >
                            57955-000
                        </Text>

                    </Stack>
                </Flex>
            </Grid>
            <Box 
                bg="#E3B100" 
                position="absolute" 
                width="1" 
                height="150px" 
                marginLeft="226px" 
                mt="-170px"
            >
                <Text color="#E3B100">.</Text>
            </Box>

            <Grid 
                // align="center"
                right="40px" 
                position="absolute" 
                mt="-180px" 
                width="10%"
            >
                <Flex>
                    <Stack>
                        <Text 
                         color="#FFFFFF" 
                        //  marginBottom="10px" 
                         fontSize="md"
                         >
                             Contato
                         </Text>
                    </Stack>
                </Flex>
            </Grid>

            <Grid 
                // align="center" 
                right="40px" 
                position="absolute" 
                mt="-150px" 
                width="10%"
                fontSize="xs"
            >
                <Flex>
                    <Stack>
                        <Text
                         color="#FFFFFF" 
                         marginBottom="10px" 
                        >
                            Celular: +55 (82) 988712203
                        </Text>

                        <Text
                         color="#FFFFFF"
                        >
                            Fixo: +55 (82) 3333-5555
                        </Text>

                    </Stack>
                </Flex>
            </Grid>
            </Box>
        </Grid>
        </Flex>
        </Box>
        </>
        )}
        </Flex>
    );
}
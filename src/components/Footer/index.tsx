import {
    Flex,
    Text,
    Box,
    Image,
    SimpleGrid,
    Stack,
    useBreakpointValue,
    HStack,
    Grid,
  } from "@chakra-ui/react";
import React from "react";

import { Button, ButtonGroup } from "@chakra-ui/react"


export default function Footer() {

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });
    return (

      <Flex align="center" justify="center" direction="column">
      {isWideVersion && (

      <Grid bg="#4E4B4B" width="100%" height="100%" mt="330px">
         <Flex margin="15px" marginTop="150px" marginLeft="60px">
           <Image src="/images/LOGOTIPO VILLA PORTAL- FOOTER.svg" alt="Logo" />
         </Flex>
        
         <Flex marginLeft="60px" marginTop="50px" marginBottom="60px">
           <HStack>

           <Button bg="#F6E05E" height="38px" width="38px" borderRadius="8px" size="xs">
             <Image src="/images/facebook.svg" alt="Logo" />
           </Button>  

           <Button bg="#F6E05E" height="38px" width="38px" borderRadius="8px" size="xs">
             <Image src="/images/instagram.svg" alt="Logo" />
           </Button>   

           <Button bg="#F6E05E" height="38px" width="38px" borderRadius="8px" size="xs">
             <Image src="/images/youtube.svg" alt="Logo" />
           </Button> 
         
           </HStack> 
           </Flex>


           
               <ButtonGroup spacing="6" right="100px" position="absolute" marginTop="170px">
                 <Button colorScheme="#FFFFFF" color="#FFFFFF" variant="link">
                   Termo de uso
                 </Button>

                 <Button colorScheme="#FFFFFF" color="#FFFFFF" variant="link">
                    Direitos autorais
                 </Button>

                 <Button colorScheme="#FFFFFF" color="#FFFFFF" variant="link">
                   Politica de privacidade
                 </Button>
                 </ButtonGroup>
      </Grid>
      
      )}


              {/* mobile */}


        {!isWideVersion && (
          <>
          <Box>
          <Grid bg="#4E4B4B" width="100vw" height="300px" mt="170px">
         <Flex marginTop="120px" marginLeft="10px">
           <Image src="/images/LOGOTIPO VILLA PORTAL- FOOTER.svg" alt="Logo" />
         </Flex>
        
         <Flex marginLeft="20px" marginTop="50px" marginBottom="60px" direction="row">
           <HStack>

           <Button bg="#F6E05E" height="38px" width="38px" borderRadius="8px" size="xs">
             <Image src="/images/facebook.svg" alt="Logo" />
           </Button>  

           <Button bg="#F6E05E" height="38px" width="38px" borderRadius="8px" size="xs">
             <Image src="/images/instagram.svg" alt="Logo" />
           </Button>   

           <Button bg="#F6E05E" height="38px" width="38px" borderRadius="8px" size="xs">
             <Image src="/images/youtube.svg" alt="Logo" />
           </Button> 
         
           </HStack> 
           </Flex>


               <ButtonGroup spacing="4" right="20px" position="absolute" marginTop="280px">
                 <Button colorScheme="#FFFFFF" color="#FFFFFF" variant="link" size="xs">
                   Termo de uso
                 </Button>

                 <Button colorScheme="#FFFFFF" color="#FFFFFF" variant="link" size="xs">
                    Direitos autorais
                 </Button>

                 <Button colorScheme="#FFFFFF" color="#FFFFFF" variant="link" size="xs">
                   Politica de privacidade
                 </Button>
                 </ButtonGroup>
                  </Grid>
                  </Box>
          </>
        )}
       </Flex>

    );
}
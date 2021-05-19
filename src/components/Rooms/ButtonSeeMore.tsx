import { Button, Flex, ButtonGroup } from "@chakra-ui/react";
import Link from 'next/link';

export function ButtonSeeMore() {
    
    return(
        <Flex>
            <Link href="/seeMore/">
            <Button colorScheme="yellow" color="#FFFFFF" borderRadius="15px">Ver mais...</Button>
            </Link>
        </Flex>
    );
}


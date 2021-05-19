import {
  Flex,
  Text,
  Box,
  Image,
  SimpleGrid,
  FormControl,
  Button,
  useBreakpointValue,
} from "@chakra-ui/react";
import AllRights from "../../components/AllRights";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { Accomodation } from "../../components/Rooms";




export default function SeeMore() {
  return (
    <> 
         <Header />
         <Accomodation />
         <Footer />     
         <AllRights />
         
    </>
  );
}
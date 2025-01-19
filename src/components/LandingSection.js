import React from "react";
import { Avatar, Heading, VStack,Image,} from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import Photo from "../images/DavidGSQ.jpg";


const greeting = "Hello, I am David!";
const bio1 = "A frontend developer/UX Designer";
const bio2 = "specialised in React";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
   
 <VStack>
 <Image
  borderRadius='full'
  boxSize='150px'
  src={Photo}
  alt='DG'
/>
  
  
  
      <p>{greeting}</p>
      <Heading>{bio1}</Heading>
      <Heading>{bio2}</Heading>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;

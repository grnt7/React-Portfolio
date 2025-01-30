import React from "react";
import { Avatar, Heading, HStack, VStack,Image, Text} from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import Photo from "../images/DavidGSQ.jpg";


const greeting = "Hello, I am David!";
const bio1 = "A Front-end developer/UX Designer";
const bio2 = "specialised in React";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    display="flex"
    flexWrap="wrap"
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
   
 <VStack align="center" spacing={{ base: 4, md: 6 }} // Responsive spacing
      p={{ base: 4, md: 6 }} // Responsive padding
    >
 <Image
  borderRadius='full'
  boxSize='200px'
  src={Photo}
  alt='DG'
/>
  

  
<Text
        fontSize={{ base: "lg", md: "xl" }}
        textAlign="center"
        maxW={{ base: "90%", md: "80%" }} // Control max width for readability
      >
        {greeting}
      </Text>
      <HStack w="100%"  // Full width on all screens
        justifyContent="center" // Center the headings horizontally
      >
      <Heading
        as="h2"
        size={{ base: "md", md: "lg" }}
        textAlign="center"  // Center the text
        maxW={{ base: "90%", md: "80%" }} // Responsive max width
        noOfLines={3} // Add noOfLines for long text
      >
        {bio1}
      </Heading>
      </HStack>
      <HStack
       w="100%"  // Full width on all screens
       justifyContent="center" // Center the headings horizontally
     >
      <Heading
        as="h2"
        size={{ base: "md", md: "lg" }}
        textAlign="center" // Center the text
        maxW={{ base: "90%", md: "80%" }} // Responsive max width
        noOfLines={3} // Add noOfLines for long text
      >
        {bio2}
      </Heading>
      </HStack>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;

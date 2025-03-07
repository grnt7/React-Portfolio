import {  Box,Flex, HStack, Heading, Image, Text, VStack, Link, Spacer} from "@chakra-ui/react";
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";


const Card = ({ title, description, imageSrc, link, pdfPath1}) => {
  return (
	<Flex direction="column"  w="100%" bg="white" color="black" borderRadius="lg" overflow="hidden" boxShadow="md" _hover={{ boxShadow: "lg", textDecoration: "none" }}> {/* Changed to Flex, added overflow */}
	<Box  overflow="hidden" w="100%">
	<Image src={imageSrc} alt={title}  objectFit="cover" w="100%" h="100%"  aspectRatio ="2/2"loading="lazy" scale="auto" />
	</Box>
	<Flex direction="column" flexGrow={1} px={4} py={2} overflow="hidden"> {/* Text content container */}
	<Box align="start" > {/* Added flexGrow and overflow */}
		
	  <Heading as="h3" size="md"> {/* Added noOfLines */}
		{title}
	  </Heading>
	 
	  <Text  fontSize="sm" word-wrap="break-word" overflow="hidden"> {/* Added overflow */}
		{description} 
	  </Text>
	</Box>
	<Spacer/>
	<HStack  w="100%" >
	  <div> 
		{pdfPath1 && (
		  <a href={pdfPath1} download>
			Download PDF 1
		  </a>
		)}
	  </div>

	  <Text fontSize="sm">
	  {link} 
 		See More  

		
	  </Text>

	  
	 
	</HStack>
  </Flex>
  </Flex>
);
};

export default Card;
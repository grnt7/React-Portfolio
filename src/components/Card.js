import {  HStack, Heading, Image, Text, VStack, } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";


const Card = ({ title, description, imageSrc, link, pdfPath1}) => {
  return (
		<VStack
			w='100%'

			bg='white'
			color='black'
			borderRadius='lg'
			overflow='hidden'
			boxShadow='md'
			align='stretch'
			spacing={4}
			_hover={{
				boxShadow: 'lg',
				textDecoration: 'none',
			}}>
			<Image h="590px" w="590px"
				src={imageSrc} 
				alt={title}
				
			/>
			<VStack
				align='start'
				px={4}
				py={2}>
				<Heading
					as='h3'
					size='md'>
					{title}
				</Heading>
				<Text fontSize='sm'>{description} </Text>
			</VStack>
			<HStack
				
				px={4}
				pb={4}
				justify='space-between'
				
				w='20%'>
					 <div> 
          {pdfPath1 && ( 
            <a href={pdfPath1} download> 
              Download PDF 1 
            </a>
          )}
		 
		  </div>
					
				<Text fontSize='sm'>{link}See More</Text>
				
				<FontAwesomeIcon
					icon={faArrowRight}
					size='1x'
					
				/>
			</HStack>
		</VStack>
	);
};

export default Card;
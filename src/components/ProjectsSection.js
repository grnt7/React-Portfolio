import React from 'react';

import FullScreenSection from './FullScreenSection';
import { Box, Grid, Flex, Heading, Link,  useBreakpointValue } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons'
import Card from './Card';


const projects = [
	{
		title: 'React App and Website',
		description:
			'Table Booking website that is fully functional, created in React as Capstone project completed in Meta Front-End Developer course.',
		getImageSrc: () => require('../images/Frame 1 (2) copy.jpg'),
		link: (
			<Link href="https://little-lemon-booking-capstone.netlify.app/" isExternal target="_blank" rel="noopener noreferrer">
			  <ExternalLinkIcon mx='2px' />
			</Link>
		  ),
		
  },
	
	{
		title: 'Dog Walking App',
		description:
			'UX Design Project with full case study created within Google UX Design professional course 🔥️',
		getImageSrc: () => require('../images/iPhone 14 Pro Mockup-Recovered.jpg'),
		link:(
		<Link href="https://docs.google.com/presentation/d/e/2PACX-1vSA5FI8jpBOk-UhOrHp15AkuB-N1hPRkT3tJaGC7p6rBfXPwu1dUmPbzzlQZANu4J3VvfczSLT2ujOd/pub?start=false&loop=false&delayms=3000" isExternal target="_blank" rel="noopener noreferrer">
			  <ExternalLinkIcon mx='2px' />
			</Link>
		  ),
		
		 
	},
	
	{
		title: 'Photo Gallery',
		description:
			'CSS Flexbox Photo Gallery of Cats. Project created as part of Freecodecamp Responsive Design Course.',
		getImageSrc: () => require('../images/CATSGALLERY.jpeg'),
		link: (
			<Link href="https://www.freecodecamp.org/learn/2022/responsive-web-design/learn-css-flexbox-by-building-a-photo-gallery/step-2" isExternal target="_blank" rel="noopener noreferrer">
			  <ExternalLinkIcon mx='2px' />
			</Link>
		  ),
	},
	{
		title: 'Typography',
		description:
			'Learn CSS Grid. HTML and CSS Typography project created within Freecodecamp responsive website design course.',
		getImageSrc: () => require('../images/CSSgrid MagazineReducedscale 2.jpg'),
		link: (
			<Link href="https://www.freecodecamp.org/learn/full-stack-developer/workshop-magazine/step-79" isExternal target="_blank" rel="noopener noreferrer">
			 <ExternalLinkIcon mx='2px' />
			</Link>
		  ),
	},
];

const ProjectsSection = () => {
	return (

<FullScreenSection
backgroundColor='#14532d'
isDarkBackground
p={8}
alignItems='flex-start'
spacing={8}
>
<Heading as='h1' id='projects-section'>
  Featured Projects
</Heading>
<Box display={{ base: 'flex', md: 'grid' }} 
flexWrap="wrap" 
justifyContent="center" 
w="full"
maxW="container.lg">
  {/* Use useBreakpointValue for responsive layout */}
  {useBreakpointValue({
	base: (
	  <Flex flexWrap="wrap" justifyContent="center" gap={4} >{/*Added Gap */}
		{/* Render cards in Flex layout for mobile */}
		{projects.map((project) => (
		  <Card
			key={project.title}
			title={project.title}
			description={project.description}
			imageSrc={project.getImageSrc()}
			
			link={project.link}
		  />
		))}
	  </Flex>
	),
	md:(
	  <Grid
	  templateColumns={{ md: 'repeat(2,1fr)' }} gap={6}
		
		
	  >
		{/* Render cards in Grid layout for medium and larger screens */}
		{projects.map((project) => (
		  <Card
			key={project.title}
			title={project.title}
			description={project.description}
			imageSrc={project.getImageSrc()}
			
			link={project.link}
		  />
		))}
	  </Grid>
	),
  })}
</Box>
</FullScreenSection>
);
};

export default ProjectsSection;

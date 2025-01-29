import React from 'react';
import FullScreenSection from './FullScreenSection';
import { Box, Heading } from '@chakra-ui/react';
import Card from './Card';


const projects = [
	{
		title: 'React Website',
		description:
			'Little Lemon Restaurant Table Booking website that is fully functional, created in React as Capstone project completed in Meta Front-End Developer course.',
		getImageSrc: () => require('../images/Frame 1 (2).jpg'),
	},
	{
		title: 'Dog Walking App',
		description:
			'UX Design Project with full case study created within Google UX Design professional course 🔥️',
		getImageSrc: () => require('../images/iPhone 14 Pro Mockup.png'),
	},
	{
		title: 'Photo Gallery',
		description:
			'CSS Flexbox Photo Gallery of Cats. Project created as part of Freecodecamp Responsive Website Design Course.',
		getImageSrc: () => require('../images/CATSGALLERY.jpeg'),
	},
	{
		title: 'Typography',
		description:
			'Learn CSS Grid. HTML and CSS Typography project created within Freecodecamp responsive website design course.',
		getImageSrc: () => require('../images/CSSgrid Magazine.jpg'),
	},
];

const ProjectsSection = () => {
	return (
		<FullScreenSection
			backgroundColor='#14532d'
			isDarkBackground
			p={8}
			alignItems='flex-start'
			spacing={8}>
			<Heading
				as='h1'
				id='projects-section'>
				Featured Projects
			</Heading>
			<Box 
				display='grid'
				gridTemplateColumns='repeat(2,minmax(0,1fr))'
				gridGap={8}>
				{projects.map((project) => (
					<Card
						key={project.title}
						title={project.title}
						description={project.description}
						imageSrc={project.getImageSrc()}
					/>
				))}
			</Box>
		</FullScreenSection>
	);
};

export default ProjectsSection;
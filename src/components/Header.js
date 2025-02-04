import React, { useEffect, useRef,  } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack, useBreakpointValue} from "@chakra-ui/react";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: da.grant7@outlook.com",
  },
  {
    icon: faGithub,
    url: "https://github.com",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com",
  },
  {
    icon: faMedium,
    url: "https://medium.com",
  },
  {
    icon: faStackOverflow,
    url: "https://stackoverflow.com",
  },
];

const Header = () => {

 
    const isSmallerScreen = useBreakpointValue({ base: true, md: false });
 
  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      translateY={0}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
      zIndex={100}
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
          flexDirection={isSmallerScreen ? "column" : "row"} // Stack on smaller screens
          spacing={isSmallerScreen ? 4 : 8} // Adjust spacing
        >
          <HStack
            spacing={8}
            justifyContent={isSmallerScreen ? "center" : "flex-start"} // Align left on larger
            w={isSmallerScreen ? "full" : "auto"} // Full width on smaller screens
          >
            {socials.map((social) => (
              <a href={social.url} key={social.icon}>
                <FontAwesomeIcon icon={social.icon} size="2x" />
              </a>
            ))}
          </HStack>

          <HStack
            spacing={8}
            justifyContent={isSmallerScreen ? "center" : "flex-end"} // Align right on larger
            w={isSmallerScreen ? "full" : "auto"} // Full width on smaller screens
          >
            <a href="#projects" onClick={handleClick("projects")}>
              Projects
            </a>
            <a href="#contactme" onClick={handleClick("contactme")}>
              Contact Me
            </a>
          </HStack>
        </HStack>
      </Box>
    </Box>
  );
};

export default Header;

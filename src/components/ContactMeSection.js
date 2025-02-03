//Okay, let's completely remove formik and set up your form to work directly with Netlify forms. This will help us isolate whether the issue is with formik or the Netlify setup itself.



import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Select,
  Textarea,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import { useAlertContext } from "../context/alertContext";

const LandingSection = () => {
  const { onOpen } = useAlertContext();
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    type: "hireMe",
    comment: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
    setErrors({ ...errors, [event.target.name]: "" }); // Clear error on change
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    let newErrors = {};
    if (!formData.firstName) {
      newErrors.firstName = "Required";
    }
    if (!formData.email || !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
      newErrors.email = "Invalid email address";
    }
    if (!formData.comment) {
      newErrors.comment = "Required";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {  // No errors, proceed with submission
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "contact", ...formData }),
      })
        .then(() => {
          onOpen("success", "Message sent successfully!");
          setFormData({ firstName: "", email: "", type: "hireMe", comment: "" }); // Reset form
          setErrors({}); // Clear any previous errors
        })
        .catch((error) => {
          onOpen("error", "Failed to send message.");
          console.error("Error:", error);
        });
    }
  };

  const encode = (data) => {
    return Object.keys(data)
      .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
  };

  return (
    <FullScreenSection
      isDarkBackground
      backgroundColor="#512DA8"
      py={16}
      spacing={8}
    >
      <VStack
        display="flex"
        flexWrap="wrap"
        justifyContent="center"
        p={32}
        alignItems="flex-start"
        w={useBreakpointValue({ base: "full", md: "1024px" })}
        py={useBreakpointValue({ base: "16", md: "32" })}
      >
        <Heading as="h1" id="contactme-section">
          Contact me
        </Heading>
        <Box p={6} rounded="md" w="100%">
        <form action="https://api.web3forms.com/submit" method="POST">
          
          <input type="hidden" name="apikey" value="fb1cfe82-5f46-4e3d-bf19-3a4dd9888307"></input>
          <VStack spacing={4}>
            <FormControl isInvalid={!!errors.firstName}>
              <FormLabel htmlFor="firstName">Name</FormLabel>
              <Input
                id="firstName"
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
              />
              <FormErrorMessage>{errors.Name}</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={!!errors.email}>
              <FormLabel htmlFor="email">Email Address</FormLabel>
              <Input
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              <FormErrorMessage>{errors.email}</FormErrorMessage>
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="type">Type of enquiry</FormLabel>
              <Select id="type" name="type" value={formData.type} onChange={handleChange}>
                <option value="hireMe">Freelance project proposal</option>
                <option value="openSource">Open source consultancy session</option>
                <option value="other">Other</option>
              </Select>
            </FormControl>
            <FormControl isInvalid={!!errors.comment}>
              <FormLabel htmlFor="comment">Your message</FormLabel>
              <Textarea
                id="comment"
                name="comment"
                value={formData.comment}
                onChange={handleChange}
                height={250}
              />
              <FormErrorMessage>{errors.comment}</FormErrorMessage>
            </FormControl>
            <Button type="submit" colorScheme="purple" width={useBreakpointValue({ base: 'full', md: 'auto' })}>
              Submit
            </Button>
          </VStack>
        </form>
      </Box>
      </VStack>
    </FullScreenSection>
  );
};

export default LandingSection;
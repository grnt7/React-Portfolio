import React, { useEffect } from "react";
import { useFormik } from "formik";
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
import * as Yup from "yup";
import FullScreenSection from "./FullScreenSection";
import { useAlertContext } from "../context/alertContext";

const LandingSection = () => {
  const { onOpen } = useAlertContext();

  const formik = useFormik({
    initialValues: {
      firstName: "",
      email: "",
      type: "hireMe",
      comment: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      comment: Yup.string()
        .min(25, "Must be at least 25 characters")
        .required("Required"),
    }),
    onSubmit: (values, { resetForm }) => {  // Key change here
      fetch("/", {  // POST to the root of your site
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "contact", ...values }), // Encode form data
      })
        .then(() => {
          onOpen("success", "Message sent successfully!");
          resetForm(); // Clear the form after successful submission
        })
        .catch((error) => {
          onOpen("error", "Failed to send message.");
          console.error("Error:", error);
        });
    },
  });

  useEffect(() => {
    if (formik.submitCount > 0 && !formik.isValid) { // Check for errors after submit attempt
        onOpen("error", "Please correct the form errors.")
    }
}, [formik.errors, formik.submitCount, formik.isValid, onOpen]);


  const encode = (data) => { // Helper function to encode form data
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
          <form name="contact" method="POST" data-netlify="true" onSubmit={formik.handleSubmit}> {/* Use formik's handleSubmit */}
            <input type="hidden" name="form-name" value="contact" />
            <VStack spacing={4}>
              <FormControl isInvalid={!!formik.errors.firstName && formik.touched.firstName}>
                <FormLabel htmlFor="name">Name</FormLabel>
                <Input
                  id="name"
                  type="text" // Corrected type to "text"
                  name="firstName" // Important: Match name to formik's values
                  {...formik.getFieldProps("firstName")}
                />
                <FormErrorMessage>{formik.errors.firstName}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={!!formik.errors.email && formik.touched.email}>
                <FormLabel htmlFor="email">Email Address</FormLabel>
                <Input
                  id="email"
                  type="email"
                  name="email" // Important: Match name to formik's values
                  {...formik.getFieldProps("email")}
                />
                <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="type">Type of enquiry</FormLabel>
                <Select id="type" name="type" {...formik.getFieldProps("type")}> {/* Use formik's select handling */}
                  <option value="hireMe">Freelance project proposal</option>
                  <option value="openSource">Open source consultancy session</option>
                  <option value="other">Other</option>
                </Select>
              </FormControl>
              <FormControl isInvalid={!!formik.errors.comment && formik.touched.comment}>
                <FormLabel htmlFor="message">Your message</FormLabel>
                <Textarea
                  id="message"
                  name="comment" // Important: Match name to formik's values
                  height={250}
                  {...formik.getFieldProps("comment")}
                />
                <FormErrorMessage>{formik.errors.comment}</FormErrorMessage>
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
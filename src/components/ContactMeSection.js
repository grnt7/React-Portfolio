import React, {useEffect} from "react";
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
  useBreakpointValue
} from "@chakra-ui/react";
import * as Yup from 'yup';
import FullScreenSection from "./FullScreenSection";
import useSubmit from "../hooks/useSubmit";
import {useAlertContext} from "../context/alertContext";

const LandingSection = () => {
  const {isLoading, response, submit} = useSubmit();
  const { onOpen } = useAlertContext();
//Add the proper configuration to the useFormik hook, passing an object with 3 properties: initialValues, onSubmit and validationSchema.
  const formik = useFormik({
    initialValues: {
      firstName: "",
      email: "",
      type: "hireMe",
      comment: "",
    },
   
//The onSubmit function should perform an API call by using the submit helper from useSubmit hook. Inspect the useSubmit custom hook to see the arguments the submit function expects.
//The validationSchema should be a Yup schema that validates the form fields. The validation rules are as follows:

validationSchema: Yup.object({
  firstName: Yup.string().required("Required"), 
  email: Yup.string().email("Invalid email address").required("Required"), 
  comment: Yup.string() 
    .min(25, "Must be at least 25 characters") 
    .required("Required"), 
}),
});
   // e) **Show an alert when the form is submitted successfully**.
   useEffect(() => { 
    if (response) { 
      onOpen(response.type, response.message); 
      if (response.type === 'success') { 
        formik.resetForm(); 
      } 
    } 
  }, [response]);

   //add w3forms addition api here
   
  
  return (
    <FullScreenSection
      isDarkBackground
      backgroundColor="#512DA8"
      py={16}
      spacing={8}
    >
      <VStack  display="flex" flexWrap="wrap" justifyContent="center"  p={32} alignItems="flex-start"  w={useBreakpointValue({ base: 'full', md: '1024px' })} // Adjust max-width on medium screens
        p={useBreakpointValue({ base: '16', md: '32' })} // Adjust padding on medium screens
      >
        <Heading as="h1" id="contactme-section">
          Contact me
        </Heading>
        <Box p={6} rounded="md" w="100%"> 
          <form name="contact" method="POST" data-netlify="true" onSubmit="onSubmit">
            <input type= "hidden" name="form-name" value="contact"/>
            <VStack spacing={4}>
              <FormControl isInvalid={!!formik.errors.firstName && formik.touched.firstName}>
                <FormLabel htmlFor="name">Name</FormLabel>
                <Input
                  id="firstName"
                  type="text"
                   name="name"
                
                 {...formik.getFieldProps('firstName')}/>
                <FormErrorMessage>{formik.errors.firstName}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={!!formik.errors.email && formik.touched.email}>
                <FormLabel htmlFor="email" name="email">Email Address</FormLabel>
                <Input
                  id="email"
                  name="email"
                  type="email  {...formik.getFieldProps('email')}"
                />
                <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="type">Type of enquiry</FormLabel>
                <Select id="type" name="type">
                  <option value="hireMe">Freelance project proposal</option>
                  <option value="openSource">
                    Open source consultancy session
                  </option>
                  <option value="other">Other</option>
                </Select>
              </FormControl>
              <FormControl isInvalid={!!formik.errors.comment && formik.touched.comment}>
                <FormLabel htmlFor="message">Your message</FormLabel>
                <Textarea
                name="message"
                  id="comment"
                type="text"
                  height={250}
                {...formik.getFieldProps("comment")}/>
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

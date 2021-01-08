import React from "react";
import { Heading, Image, Flex, Stack, Box } from "@chakra-ui/react";
const Hero = () => {
  return (
    <Flex justifyContent="space-around" alignItems="center" mt={8} mb={12}>
      <Stack spacing={4}>
        <Heading size="md" display="block" fontSize="lg" fontWeight={300}>
          INNOVATIVE SOLUTION FOR SOURCING CANDIDATES
        </Heading>
        <Heading size="2xl">
          Help us find the missing puzzle, get rewarded properly.
        </Heading>
      </Stack>
      <Stack spacing={2} maxWidth="800px">
        <Box boxShadow="dark-lg">
          <Image src="https://i.ytimg.com/vi/uTrgNwUtIJk/maxresdefault.jpg" />
        </Box>
      </Stack>
    </Flex>
  );
};

export default Hero;

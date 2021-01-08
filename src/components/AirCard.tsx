import React from "react";
import { Text, Image, Badge, Box } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";

const AirCard = () => {
  return (
    <Box
      bg="#ffffff"
      borderRadius="lg"
      width="sm"
      minHeight="sm"
      border="1px solid lightgrey"
      overflow="hidden"
    >
      <Box>
        <Image
          size="100px"
          fallbackSrc="https://via.placeholder.com/150"
          src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
          width="100%"
          height="auto"
        />
      </Box>
      <Box p={5} pb={8}>
        <Box
          display="flex"
          justifyContent="flex-start"
          alignItems="flex-start"
          mb={1}
          flexDirection="row"
        >
          <Badge
            variant="subtle"
            colorScheme="teal"
            mr={2}
            borderRadius="lg"
            pl={2}
            pr={2}
          >
            NEW
          </Badge>
          <Text color="gray.500" fontSize="xs">
            3 BEDS • 2 BATHS
          </Text>
        </Box>
        <Text fontWeight="bold" fontSize="xl">
          Modern home in city center
        </Text>
        <Text fontSize="sm" mb={3}>
          $119/night
        </Text>
        
      </Box>
    </Box>
  );
};

export default AirCard;

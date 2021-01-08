import React from "react";
import {
  Stack,
  Container,
  Flex,
  Text,
  Link,
  Button,
  Divider,
} from "@chakra-ui/react";
import { CopyIcon } from "@chakra-ui/icons";

const Header = () => (
  <React.Fragment>
    <Container maxWidth="200ch" mt={2}>
      <Flex justifyContent="space-between" p={2} alignItems="center">
        <Stack spacing={2} isInline justifyContent="center" alignItems="center">
          <CopyIcon />
          <Text>Brand Name</Text>
        </Stack>
        <Stack spacing={16} isInline alignItems="center">
          <Stack
            spacing={8}
            isInline
            alignItems="center"
            justifyContent="center"
          >
            <Link>Home</Link>
            <Link>About Us</Link>
            <Link>How It Works</Link>
          </Stack>
          <Stack spacing={3} isInline>
            <Button variant="solid" size="md">
              Log In
            </Button>
            <Button variant="solid" size="md">
              Sign Up
            </Button>
          </Stack>
        </Stack>
      </Flex>
    </Container>
    <Divider />
  </React.Fragment>
);

export default Header;

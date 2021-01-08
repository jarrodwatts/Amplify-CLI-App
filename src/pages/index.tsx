import React from "react";
import { GetStaticProps } from "next";
import {
  ChakraProvider,
  Stack,
  Avatar,
  AvatarBadge,
  Icon,
  Flex,
  Text,
  Button,
  Link,
  Heading,
  Image,
  HStack,
  Divider,
  Box,
  Container,
  Center,
  Square,
} from "@chakra-ui/react";
import { LinkIcon } from "@chakra-ui/icons";
import { DarkModeSwitch } from "../components/DarkModeSwitch";
import Header from "../components/Header";
import Hero from "../components/Hero";
import AirCard from "../components/AirCard";

// We'll need to import the queries.ts file to fetch the todos
import { listTodos } from "../graphql/queries";
// We'll need to import the types of those GQL queries from API.ts - maybe?
import { ListTodosQuery } from "../API";
// We'll need to import Amplify, the API, and a graphqlOperation from aws amplify
import Amplify, { API, graphqlOperation } from "aws-amplify";
// Import our configuration file for AWS from local file
import awsconfig from "../aws-exports";
// Call .configure on the Amplify import with our imported local file.
Amplify.configure(awsconfig);

// Create a Todo Type based on the auto generated ListTodosQuery.
// We are ommitting the __typename and todoList value from the .items[0]
// Where items is an array of items
// We can say [0] because we don't need the values. we just need the types
type Todo = Omit<
  ListTodosQuery["listTodos"]["items"][0],
  "__typename" | "todoList"
>;

const createTodo = async (todo: Todo) => {
  await API.graphql(graphqlOperation(createTodo, { input: todo }));
};

const updateTodo = async (todoId: String, todoName: String) => {
  await API.graphql(
    graphqlOperation(updateTodo, {
      input: { id: todoId, name: todoName },
    })
  );
};

const deleteTodo = async (todoId: String) => {
  await API.graphql(graphqlOperation(deleteTodo, { input: { id: todoId } }));
};

function Index({ todos }: { todos: Todo[] }) {
  console.log("Todos:", todos);
  return (
    <ChakraProvider resetCSS>
      <Container maxWidth="100%" backgroundColor="blackAlpha.100" pt={2} pb={2}>
        <Container maxWidth="160ch" mt={2} mb={2}>
          <Hero />
        </Container>
      </Container>
      <Divider />
      <Container maxWidth="160ch" mt={2} mb={2}>
        <Hero />
      </Container>
    </ChakraProvider>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  // Make a call to the graphQL API here to get all todos from a todolist
  // The todo list will be 'global'
  const result = (await API.graphql(graphqlOperation(listTodos))) as {
    data: ListTodosQuery;
    errors: any[];
  };

  // If there's no errors return the todos as an array of
  if (!result.errors) {
    return {
      props: {
        todos: result.data.listTodos.items,
      },
    };
  }

  return {
    props: {
      todos: [],
    },
  };
};

export default Index;

import React from "react";
import { GetStaticProps } from "next";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Divider from "@material-ui/core/Divider";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Image from "next/image";
import LandingPageCard from "../components/LandingPageCard";

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

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.secondary,
    },
  })
);

function Index({ todos }: { todos: Todo[] }) {
  const classes = useStyles();
  console.log("Todos:", todos);
  return (
    <Container maxWidth="lg">
      <div className={classes.root} style={{ marginTop: "32px" }}>
        {/* Hero Section */}
        <Grid container spacing={3}>
          <Grid item xs={12} sm={8}>
            <Typography variant="h2" gutterBottom>
              Building Engineering Teams of the Future
            </Typography>
            <Typography variant="body1" gutterBottom>
              __BRANDNAME__ uses machine learning to recommend optimal engineers
              for every business.
            </Typography>
            <Typography variant="body1" gutterBottom>
              It is an innovative way of building agile software engineering
              teams that get things done.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Image
              src="https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
              alt="Picture of the author"
              width={500}
              height={500}
            />
          </Grid>
        </Grid>

        {/* Engineer Section */}
        <Divider
          style={{ width: "100%", marginTop: "16px", marginBottom: "16px" }}
        />
        <Grid container spacing={3}>
          <Grid item xs={12} sm={8}>
            <Typography variant="h3" gutterBottom>
              Finding Engineers their Dream Role
            </Typography>
            <Typography variant="button" gutterBottom>
              How we help engineers:
            </Typography>
          </Grid>
          <Grid container item xs={12} spacing={3} justify="center">
            <Grid item xs={12} sm={6} md={3}>
              <LandingPageCard />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <LandingPageCard />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <LandingPageCard />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <LandingPageCard />
            </Grid>
          </Grid>
        </Grid>

        {/* Business Section */}
        <Divider
          style={{ width: "100%", marginTop: "32px", marginBottom: "16px" }}
        />
        <Grid container spacing={3}>
          <Grid item xs={12} sm={8}>
            <Typography variant="h3" gutterBottom>
              Finding Engineers their Dream Role
            </Typography>
            <Typography variant="button" gutterBottom>
              How we help engineers:
            </Typography>
          </Grid>
          <Grid container item xs={12} spacing={3} justify="center">
            <Grid item xs={12} sm={6} md={3}>
              <LandingPageCard />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <LandingPageCard />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <LandingPageCard />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <LandingPageCard />
            </Grid>
          </Grid>
        </Grid>
      </div>
    </Container>
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

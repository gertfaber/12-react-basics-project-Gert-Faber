// import { Center, Heading, Text, Grid, Image } from "@chakra-ui/react";
import { data } from "../utils/data";
import { MealCard } from "./MealCard.jsx";
// import { TextInput } from "./ui/TextInput";
import { useState } from "react";

import {
  Center,
  Heading,
  Text,
  Grid,
  Image,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Stack,
  Divider,
  ButtonGroup,
  Button,
  Box,
  Input,
  Flex,
} from "@chakra-ui/react";

export const RecipeListPage = ({ clickFn }) => {
  const meals = data.hits;
  // const meals = data.hits.slice(0, 4);
  // console.log(meals[0].recipe.label.toLowerCase());

  const [searchField, setSearchField] = useState("");
  // console.log("asdfgadfg");

  const handleChange = (event) => {
    setSearchField(event.target.value);
    console.log("TEXT input");
  };

  const matchedMeals = meals.filter((meal) => {
    return meal.recipe.label.toLowerCase().includes(searchField.toLowerCase());
  });

  return (
    <>
      <Box flexDir="column">
        <Center flexDir="column">
          {/* <Heading marginRight="auto" wrap="wrap" paddingBottom="4"> */}
          <Heading paddingBottom="4">Winc Recepe Checker</Heading>

          {/* <Box marginRight="auto" paddingBottom="4"> */}
          <Box paddingBottom="4">
            <Input
              p="2"
              bg="white"
              type="text"
              padding="10px"
              placeholder="Search meals"
              // changeFn={handleChange}
              onChange={handleChange}
              // width="200px"
            />
          </Box>
        </Center>
        {/* <YourComponent>
          {matchedMeals.map((meal) => (
            <MealCard key={meal.label} meal={meal.recipe} clickFn={clickFn} />
          ))}
        </YourComponent> */}

        {/* <Flex gap="2" wrap="wrap">
          {matchedMeals.map((meal) => (
            <MealCard key={meal.label} meal={meal.recipe} clickFn={clickFn} />
          ))}
        </Flex> */}

        {/* <Grid templateColumns="repeat(4, 1fr)" gap="2"> */}
        <Grid
          templateColumns={{
            base: "1fr",
            sm: "repeat(2, 1fr)",
            md: "repeat(3, 1fr)",
            lg: "repeat(4, 1fr)",
            xl: "repeat(5, 1fr)",
            "2xl": "repeat(5, 1fr)",
          }}
          gap="2"
        >
          {matchedMeals.map((meal) => (
            <MealCard key={meal.label} meal={meal.recipe} clickFn={clickFn} />
          ))}
        </Grid>
      </Box>
    </>
  );
};

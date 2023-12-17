import { RecipeListPage } from "./pages/RecipeListPage";
import { useState } from "react";
import { RecipeChoice } from "./pages/RecipeChoice.jsx";
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
  Flex,
  HStack,
} from "@chakra-ui/react";

// recepes = data.hits;

export const App = () => {
  const [useMeal, setUserMeal] = useState();
  {
    console.log("==============================================");
  }
  return (
    <Box backgroundColor="blue.500" minHeight="100vh" padding="4" w="100%">
      {useMeal ? (
        <RecipeChoice meal={useMeal} clickFn={setUserMeal} />
      ) : (
        <>
          {/* <h1>{greeting}</h1> */}
          <RecipeListPage clickFn={setUserMeal} />
        </>
      )}
    </Box>
  );

  // <RecipeListPage />;
};

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

export const RecipeChoice = ({ meal, clickFn }) => {
  // console.log(meal.mealType[0].toUpperCase());
  // console.log("TEST");
  //   const ingredients = meal.ingredients;
  console.log(meal);
  const energy = Math.round(meal.totalNutrients.ENERC_KCAL.quantity);
  const protein = Math.round(meal.totalNutrients.PROCNT.quantity);
  const fat = Math.round(meal.totalNutrients.FAT.quantity);
  const carbs = Math.round(meal.totalNutrients.CHOCDF.quantity);
  const cholesterol = Math.round(meal.totalNutrients.CHOLE.quantity);
  const sodium = Math.round(meal.totalNutrients.NA.quantity);

  return (
    <Box
      key={meal.label}
      padding="4"
      width="100%"
      // border="1px solid"
      borderColor="gray.300"
    >
      <Button
        border="1px solid"
        bg="white"
        margin="1"
        onClick={() => clickFn()}
        marginBottom="2"
      >
        go back to main menu
      </Button>
      <Card bg="gray.200" color="gray.800">
        <CardBody>
          <Image
            src={meal.image}
            alt="Green double couch with wooden legs"
            borderRadius="lg"
            // h={300}
            h="400px"
            w={"100%"}
            objectFit="cover"
          />

          <Grid
            templateColumns={{
              base: "1fr",

              md: "repeat(2, 1fr)",
            }}
            gap={4}
          >
            {/* <Flex> */}
            <Box textAlign="left" p={4}>
              <Text padding="1">{meal.mealType[0].toUpperCase()}</Text>

              <Heading fontSize="30" padding="1">
                {meal.label}
              </Heading>

              <Text padding="1">
                Total cooking time: {meal.totalTime} Minutes
              </Text>

              <Text padding="1">Servings: {meal.yield}</Text>

              <Heading fontSize="18px" padding="1" marginTop="2">
                Ingredients:
              </Heading>
              {meal.ingredients.map((ingredient) => (
                <Text padding="1">- {ingredient.text}</Text>
              ))}

              {/* const protein = Math.round(meal.totalNutrients.PROCNT.quantity);
  const fat = Math.round(meal.totalNutrients.FAT.quantity);
  const carbs = Math.round(meal.totalNutrients.CHOCDF.quantity);
  const cholesterol = Math.round(meal.totalNutrients.CHOLE.quantity);
  const sodium = Math.round(meal.totalNutrients.NA.quantity); */}
            </Box>

            <Box textAlign="left" p={4}>
              <Heading fontSize="18px" padding="1" marginTop="2">
                Health Labels:
              </Heading>
              {/* <Grid templateColumns="repeat(4, 1fr)" gap={2}>
                {meal.healthLabels.map((healthLabel, index) => (
                  <Text
                    fontSize={14}
                    bg="purple.200"
                    key={index}
                    borderRadius="md"
                    padding="1"
                  >
                    {healthLabel.toUpperCase()}{" "}
                  </Text>
                ))}
              </Grid> */}

              <Flex wrap="wrap">
                {meal.healthLabels.map((healthLabel, index) => (
                  <Text
                    fontSize={14}
                    bg="purple.200"
                    key={index}
                    borderRadius="md"
                    padding="1"
                    margin={1}
                  >
                    {healthLabel.toUpperCase()}{" "}
                  </Text>
                ))}
              </Flex>

              <Heading fontSize="18px" padding="1" marginTop="2">
                Diet:
              </Heading>
              <Flex wrap="wrap">
                {meal.dietLabels.map((diet, index) => (
                  <Text
                    fontSize={14}
                    bg="green.200"
                    key={index}
                    borderRadius="md"
                    padding="1"
                    margin={1}
                  >
                    {diet.toUpperCase()}{" "}
                  </Text>
                ))}
              </Flex>

              <Heading fontSize="18px" padding="1" marginTop="2">
                Cautions:
              </Heading>
              <Flex wrap="wrap">
                {meal.cautions.map((caution, index) => (
                  <Text
                    fontSize={14}
                    bg="red.200"
                    key={index}
                    borderRadius="md"
                    padding="1"
                    margin={1}
                  >
                    {caution.toUpperCase()}{" "}
                  </Text>
                ))}
              </Flex>

              <Heading fontSize="18px" padding="1" marginTop="2">
                Nutrients:
              </Heading>
              <Text padding="1">- Energy: {energy + " kcal"}</Text>
              <Text padding="1">- Protein: {protein + " g"}</Text>
              <Text padding="1">- Fat: {fat + " g"}</Text>
              <Text padding="1">- Carbs: {carbs + " g"}</Text>
              <Text padding="1">- Cholesterol: {cholesterol + " mg"}</Text>
              <Text padding="1">- Sodium: {sodium + " mg"}</Text>
            </Box>
            {/* </Flex> */}
          </Grid>
        </CardBody>
      </Card>
    </Box>
  );

  // );
};

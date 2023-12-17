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
} from "@chakra-ui/react";

export const MealCard = ({ meal, clickFn }) => {
  // console.log(meal);

  // console.log(meal.healthLabels);
  const vegLabels = meal.healthLabels.filter((label) => label.includes("Veg"));
  // console.log(vegLabels);

  return (
    <Card
      bg="gray.100"
      // maxW="sm"
      // width="100%"
      // width="200px"
      // size="md"
      // borderRadius="lg"
      // h="100px"
      // objectFit="cover"
      // bg="blue.100"
    >
      <CardBody
        // size="md"
        textAlign="center"
        borderRadius="lg"
        // width="200px"
        // border="1px solid"
      >
        <Image
          src={meal.image}
          alt="Green double couch with wooden legs"
          borderRadius="lg"
          // h={300}
          w={"100%"}
          h="200px"
          objectFit="cover"
        />
        <Text size="md" color="grey">
          {meal.mealType[0].toUpperCase()}
        </Text>

        <Heading size="md">{meal.label}</Heading>
        <Flex gap={2} justify={"center"} paddingTop="1" paddingBottom="1">
          {vegLabels.map((healthLabel, index) => (
            <Text
              fontSize={12}
              bg="purple.200"
              key={index}
              borderRadius="md"
              padding="1"
            >
              {healthLabel.toUpperCase()}{" "}
            </Text>
          ))}
        </Flex>

        <Flex gap={2} justify={"center"} paddingTop="1" paddingBottom="1">
          {meal.dietLabels.map((healthLabel, index) => (
            <Text
              fontSize={12}
              bg="green.200"
              key={index}
              borderRadius="md"
              padding="1"
            >
              {healthLabel.toUpperCase()}{" "}
            </Text>
          ))}
        </Flex>

        <Text>
          Dish:{" "}
          <Text as="span" fontWeight="bold">
            {meal.dishType[0].charAt(0).toUpperCase() +
              meal.dishType[0].slice(1)}
          </Text>
        </Text>

        <Text>Cautions:</Text>

        <Flex fontSize={12} gap={2} justify={"center"}>
          {meal.cautions.map((healthLabel, index) => (
            <Text bg="red.200" key={index} borderRadius="md" padding="1">
              {healthLabel.toUpperCase()}{" "}
            </Text>
          ))}
        </Flex>
      </CardBody>

      <Button
        border="1px solid"
        bg="white"
        margin="1"
        onClick={() => clickFn(meal)}
      >
        Select Meal
      </Button>
    </Card>
  );

  // );
};

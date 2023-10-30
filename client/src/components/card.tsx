import {
  Card,
  CardBody,
  Image,
  Stack,
  VStack,
  Flex,
  GridItem,
  Heading,
  Text,
  Divider,
  CardFooter,
  Button,
} from "@chakra-ui/react";
import { capitalizeFirstLetter } from "../utis";
import { INewsCardProps } from "../interfaces";

function NewsCard({ data }: INewsCardProps) {
  return (
    <GridItem>
      <Card maxW="sm" maxH="full" minH="2xl">
        <CardBody>
          <Image
            w="400px"
            h="300px"
            src={data.multimedia[0].url}
            alt="Green double couch with wooden legs"
            borderRadius="lg"
          />
          <Stack mt="6" spacing="3">
            <Heading size="md">{data.title}</Heading>
            <VStack mt="4">
              <Text fontWeight="black">
                {capitalizeFirstLetter(data.subsection)}
              </Text>
              <Text textAlign="start">{data.abstract}</Text>
              <Text color="gray.400" textAlign="start" w="full">
                {data.byline}
              </Text>
            </VStack>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <Flex justifyContent="center" w="full">
            <Button
              as="a"
              href={data.url}
              target="_blank"
              variant="solid"
              colorScheme="blue"
            >
              Read More
            </Button>
          </Flex>
        </CardFooter>
      </Card>
    </GridItem>
  );
}

export default NewsCard;

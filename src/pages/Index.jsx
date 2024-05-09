import React, { useState } from "react";
import { Box, Button, Container, Flex, Image, Stack, Text, VStack, Input, useToast } from "@chakra-ui/react";
import { FaHeart, FaTimes } from "react-icons/fa";

const users = [
  {
    id: 1,
    name: "Alex",
    age: 25,
    hobbies: ["Reading", "Gaming", "Hiking"],
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMHlvdW5nJTIwbWFufGVufDB8fHx8MTcxNTI1NTYxMXww&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: 2,
    name: "Sam",
    age: 30,
    hobbies: ["Cooking", "Traveling", "Photography"],
    image: "https://images.unsplash.com/photo-1613477757159-7fbb73011611?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMHlvdW5nJTIwd29tYW58ZW58MHx8fHwxNzE1MjU1NjEyfDA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: 3,
    name: "Jordan",
    age: 28,
    hobbies: ["Biking", "Gaming", "Art"],
    image: "https://images.unsplash.com/photo-1521566652839-697aa473761a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMHlvdW5nJTIwcGVyc29ufGVufDB8fHx8MTcxNTI1NTYxM3ww&ixlib=rb-4.0.3&q=80&w=1080",
  },
];

const Index = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const toast = useToast();

  const handleSwipe = (like) => {
    if (like) {
      toast({
        title: "Liked!",
        description: `You liked ${users[currentIndex].name}`,
        status: "success",
        duration: 2000,
        isClosable: true,
      });
    } else {
      toast({
        title: "Disliked",
        description: `You disliked ${users[currentIndex].name}`,
        status: "error",
        duration: 2000,
        isClosable: true,
      });
    }

    // Move to the next profile
    setCurrentIndex((prevIndex) => (prevIndex + 1) % users.length);
  };

  return (
    <Container maxW="container.md" py={8}>
      <VStack spacing={8}>
        {users.length > 0 && currentIndex < users.length ? (
          <Box w="full" p={4} borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Image src={users[currentIndex].image} alt={users[currentIndex].name} boxSize="300px" objectFit="cover" />
            <Text fontSize="2xl" mt={2}>
              {users[currentIndex].name}, {users[currentIndex].age}
            </Text>
            <Text>Hobbies: {users[currentIndex].hobbies.join(", ")}</Text>
          </Box>
        ) : (
          <Text>No more profiles!</Text>
        )}
        <Flex gap={4}>
          <Button colorScheme="red" leftIcon={<FaTimes />} onClick={() => handleSwipe(false)}>
            Dislike
          </Button>
          <Button colorScheme="green" leftIcon={<FaHeart />} onClick={() => handleSwipe(true)}>
            Like
          </Button>
        </Flex>
      </VStack>
    </Container>
  );
};

export default Index;

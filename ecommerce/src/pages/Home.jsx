import React from "react";
import { Box, Flex, Heading, SimpleGrid, Spinner } from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getData } from "./../redux/action";
import Products from "../components/Products";

const Home = () => {
  const data = useSelector((state) => state.data);
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.isLoading);
  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);

  if (isLoading) {
    return (
      <Flex m={"150px auto"} align={"center"} flexDirection="column">
        <Spinner size="xl" color="blue" />
        <Heading mt="10px" color={"blue"}>
          Loading...
        </Heading>
      </Flex>
    );
  }

  return (
    <SimpleGrid
      columns={{ base: 1, md: 2, lg: 4 }}
      width={{ base: "90%", md: "85%", lg: "80%" }}
      placeItems="center"
      m={"40px auto"}
      spacing="5"
    >
      {data.length &&
        data.map((item) => {
          return <Products item={item} key={item.id} />;
        })}
    </SimpleGrid>
  );
};

export default Home;

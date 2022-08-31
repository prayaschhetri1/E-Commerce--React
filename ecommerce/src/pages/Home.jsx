import React from "react";
import {
  Box,
  Flex,
  Heading,
  Input,
  Select,
  SimpleGrid,
  Spinner,
  Text,
} from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getData } from "./../redux/action";
import Products from "../components/Products";
import { useState } from "react";
import axios from "axios";

const Home = () => {
  const data = useSelector((state) => state.data);
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.isLoading);
  const [loading,setLoading] = useState(false)
  const [mainData, setMainData] = useState([]);

  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);

  useEffect(() => {
    setMainData(data);
  }, [data]);
  // Sort By Price
  const handleSort = (value) => {
    setLoading(true)

    if (value === "htl") {
      axios
        .get(
          `https://json-server1122.herokuapp.com/prods?_sort=price&_order=desc`
        )
        .then((res) => {
          setMainData(res.data);
          setLoading(false)
        })
        .catch((e) => {
          console.warn(e);
          setLoading(false)

        });
    } else if (value === "lth") {
      axios
        .get(
          `https://json-server1122.herokuapp.com/prods?_sort=price&_order=asc`
        )
        .then((res) => {
          setMainData(res.data);
          setLoading(false)
        })
        .catch((e) => {
          console.warn(e);
          setLoading(false)
        });
    } else {
      dispatch(getData());
      setLoading(false)
    }
  };

  // Filter By Category
  const handleFilter = (e) => {
    setLoading(true)
    e.preventDefault();
    let value = e.target.value;
    if (value !== "all") {
      axios
        .get(`https://json-server1122.herokuapp.com/prods?q=${value}`)
        .then((res) => {
          setMainData(res.data);
          setLoading(false)
        })
        .catch((e) => {
          console.warn(e);
          setLoading(false)
        });
    } else {
      dispatch(getData());
      setLoading(false)
    }
  };

  // Search Functionality
  const handleSearch = (e) => {
    e.preventDefault();
    let value = e.target.value;
    axios
      .get(`https://json-server1122.herokuapp.com/prods?q=${value}`)
      .then((res) => {
        setMainData(res.data);
      })
      .catch((e) => {
        console.warn(e);
      });
  };

  if (isLoading || loading) {
    return (
      <Flex m={"250px auto"} align={"center"} flexDirection="column">
        <Spinner size="xl" color="blue" />
        <Heading mt="10px" color={"blue"}>
          Loading...
        </Heading>
      </Flex>
    );
  }

  return (
    <>
      <Flex align={"center"} mt="120px" justify={"center"} direction="column">
        <Flex
          width={{ base: "80%", md: "60%", lg: "40%" }}
          gap={"10px"}
          m="auto"
        >
          <Select onChange={(e) => handleSort(e.target.value)}>
            <option value="all">Sort By Price</option>
            <option value="htl">High to Low</option>
            <option value="lth">Low to High</option>
          </Select>
          <Select onChange={(e) => handleFilter(e)}>
            <option value="all">Filter By Category</option>
            <option value="jwellary">jwellary</option>
            <option value="Shoes">Shoes</option>
            <option value="Jacket">Jacket</option>
          </Select>
        </Flex>
        <Flex width={{ base: "80%", md: "60%", lg: "40%" }} m={"30px auto"}>
          <Input
            type="text"
            onChange={(e) => {
              handleSearch(e);
            }}
            border="none"
            borderRadius={"0px"}
            outline="none"
            borderBottom={"1px solid black"}
            placeholder="Search Patient..."
          />
        </Flex>
      </Flex>
      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 3 }}
        width={{ base: "90%", md: "85%", lg: "80%" }}
        placeItems="center"
        margin={"50px auto"}
        spacing="5"
      >
        {mainData.length &&
          mainData.map((item) => {
            return <Products item={item} key={item.id} />;
          })}
      </SimpleGrid>
      {mainData.length === 0 && (
        <Text
          color={"teal"}
          fontWeight="700"
          fontSize="22px"
          textAlign={"center"}
        >
          Nothing To Show..
        </Text>
      )}
    </>
  );
};

export default Home;

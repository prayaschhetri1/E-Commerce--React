import React from "react";
import { Box, Flex, Image, Heading, Text, Button } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { postCartData } from "../redux/action";

const Products = ({ item }) => {
  // Add data functionality
  const dispatch = useDispatch();
  const handleAdd = (item) => {
    const payload = {
      title: item.title,
      image: item.image,
      rating: item.rating,
      price: item.price,
      category: item.category,
    };
    dispatch(postCartData(payload));
  };

  return (
    <Flex
      className="single-box"
      flexDirection={"column"}
      align={"center"}
      boxShadow="rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px"
      p="2px 0px 0px 5px"
      minHeight={"500px"}
      px={"1"}
      borderRadius="9px"
      gap="10px"
    >
      <Image
        borderTopRadius={"9px"}
        width={"260px"}
        height="260px"
        src={item.image}
        alt="pat-image"
      />
      <Text fontSize={"27px"} fontWeight="700">
        {item.title}
      </Text>
      <Text fontWeight={"700"} fontSize="21px">
        {item.category}
      </Text>
      <Text fontWeight={"700"}>Rating: {item.rating}</Text>
      <Text fontWeight={"700"}>MRP : {item.price}</Text>

      <Button
        bg={"black"}
        p="20px 25px"
        className="btn"
        color={"white"}
        _hover={{}}
        onClick={() => handleAdd(item)}
      >
        ADD TO CART
      </Button>
    </Flex>
  );
};

export default Products;

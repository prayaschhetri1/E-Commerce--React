import React, { useState } from "react";
import { Flex, Image, Text, Button } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { postCartData } from "../redux/action";

const Products = ({ item }) => {
  // Add data functionality
  const [isAdded, setIsAdded] = useState(false);

  const dispatch = useDispatch();
  const handleAdd = (item) => {
    const payload = {
      title: item.title,
      image: item.image,
      rating: item.rating,
      price: item.price,
      category: item.category,
      qty: 1,
    };
    if (!isAdded) {
      dispatch(postCartData(payload));
      alert("Item added to the cart😍");
      setIsAdded(true);
    } else {
      alert("Already Added your item ☺️");
    }
  };

  return (
    <Flex
      className="single-box"
      flexDirection={"column"}
      align={"left"}
      boxShadow="rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px"
      p="2px 0px 3px 5px"
      minHeight={"490px"}
      px={"1"}
      borderRadius="9px"
      gap="10px"
    >
      <Image
        borderTopRadius={"9px"}
        width={"360px"}
        height="340px"
        src={item.image}
        alt="pat-image"
      />
      <Flex direction={"column"} align="center" gap={"7px"}>
        <Text fontSize={"21px"} fontWeight="700" align={"center"}>
          {item.title}
        </Text>
        <Text fontWeight={"700"} fontSize="19px">
          {item.category}
        </Text>
        <Text fontWeight={"700"}>MRP : ₹ {item.price}</Text>
      </Flex>
      <Button
        bg={isAdded ? "blue" : "black"}
        p="20px 25px"
        className="btn"
        color={"white"}
        _hover={{}}
        onClick={() => handleAdd(item)}
      >
        {isAdded ? "ADDED" : "ADD TO CART"}
      </Button>
    </Flex>
  );
};

export default Products;

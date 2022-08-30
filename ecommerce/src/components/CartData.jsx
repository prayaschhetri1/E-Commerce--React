import React from "react";
import {
  Box,
  Flex,
  Image,
  Heading,
  Text,
  Button,
  Alert,
  AlertIcon,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { deleteCartData, postCartData } from "../redux/action";
import { DeleteIcon } from "@chakra-ui/icons";
import { getCartData } from "./../redux/action";
import { useState } from "react";

const CartData = ({ item }) => {
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteCartData(id));
  };
  return (
    <>
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
          gap="15px"
          bg={"red"}
          p="20px 20px"
          className="delete_btn"
          color={"black"}
          fontWeight="700"
          _hover={{}}
          onClick={() => handleDelete(item.id)}
        >
          <DeleteIcon></DeleteIcon>
          REMOVE FROM CART
        </Button>
      </Flex>
    </>
  );
};

export default CartData;

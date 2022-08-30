import React, { useEffect } from "react";
import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  SimpleGrid,
  Spinner,
} from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getCartData } from "../redux/action";
import Products from "../components/Products";
import CartData from "./../components/CartData";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const data = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.isLoading);
  useEffect(() => {
    dispatch(getCartData());
  }, [dispatch]);

  const navigate = useNavigate();
  const handleRedirect = () => {
    navigate("/");
  };

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
    <>
      {data.length === 0 ? (
        <Flex direction={"column"}
        justify="center"
        align={"center"}
        mt="40px"
        >
          <Heading color={"teal"}>
            YOUR CART IS EMPTY ☹
          </Heading>
          <Flex
            m="auto"
            justify={"center"}
          >
            <Image
              width={{base:"350",md:"450",lg:"700px"}}
              src="https://img.freepik.com/free-vector/no-data-concept-illustration_114360-2506.jpg?t=st=1655804193~exp=1655804793~hmac=a2ee60811649b0b2a67a5fb8438f27c0204534d05867745c9550cfefc9882fd1&w=996"
              alt=""
            />
          </Flex>
          <Button color={"white"} bg="blue" p="25px 40px" fontWeight={"700"} onClick={handleRedirect}>ADD SOMETHING IN CART</Button>
        </Flex>
      ) : (
        <>
          <Flex
            m="20px"
            border="1px solid grey"
            width={"300px"}
            p="10px 20px"
            align="center"
            justify={"center"}
            fontWeight="700"
            fontSize={"25px"}
            borderRadius={"5px"}
          >
            Total Item : {data.length}
          </Flex>
          <SimpleGrid
            columns={{ base: 1, md: 2, lg: 4 }}
            width={{ base: "90%", md: "85%", lg: "80%" }}
            placeItems="center"
            placeSelf={"center"}
            m={"40px auto"}
            spacing="5"
          >
            {data.length &&
              data.map((item) => {
                return <CartData item={item} key={item.id} />;
              })}
          </SimpleGrid>
        </>
      )}
    </>
  );
};

export default Cart;

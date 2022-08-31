import React, { useEffect, useState } from "react";
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
  const [total, setTotal] = useState();
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.isLoading);
  useEffect(() => {
    dispatch(getCartData());
  }, [dispatch]);

  const navigate = useNavigate();
  const handleRedirect = () => {
    navigate("/");
  };

  useEffect(() => {
    const total = data.reduce((alem, item) => {
      return alem + (item.price * item.qty);
    }, 0);
    // console.log(total)
    setTotal(total);
  }, [total, data]);

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
        <Flex direction={"column"} justify="center" align={"center"} mt="100px">
          <Heading color={"teal"}>YOUR CART IS EMPTY ☹</Heading>
          <Flex m="auto" justify={"center"}>
            <Image
              width={{ base: "350", md: "450", lg: "700px" }}
              src="https://img.freepik.com/free-vector/no-data-concept-illustration_114360-2506.jpg?t=st=1655804193~exp=1655804793~hmac=a2ee60811649b0b2a67a5fb8438f27c0204534d05867745c9550cfefc9882fd1&w=996"
              alt=""
            />
          </Flex>
          <Button
            color={"white"}
            bg="blue"
            p="25px 40px"
            fontWeight={"700"}
            onClick={handleRedirect}
          >
            ADD SOMETHING IN CART
          </Button>
        </Flex>
      ) : (
        <>
          <Flex
            direction={"column"}
            columns={{ base: 1, md: 2, lg: 4 }}
            width={{ base: "90%", md: "75%", lg: "50%" }}
            m={"120px auto"}
            gap="15px"
          >
            <Flex justifyContent={"space-between"}>
              <Flex
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
              <Flex
                border="1px solid grey"
                width={"300px"}
                p="10px 20px"
                align="center"
                justify={"center"}
                fontWeight="700"
                fontSize={"25px"}
                borderRadius={"5px"}
              >
                Total Price : ₹ {total}
              </Flex>
            </Flex>
            {data.length &&
              data.map((item) => {
                return <CartData item={item} key={item.id} />;
              })}
          </Flex>
        </>
      )}
    </>
  );
};

export default Cart;

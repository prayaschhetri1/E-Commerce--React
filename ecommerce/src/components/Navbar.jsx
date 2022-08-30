import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <Box
      bg={"rgb(18, 18, 18)"}
      padding="17px 0px 17px 0px"
      minWidth={"70%"}
      boxShadow="rgba(225, 221, 221, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px"
    >
      <Flex justify={"space-between"} align="center" px="40px">
        <Flex gap={{ base: "24px", md: "38px", lg: "55" }} align={"center"}>
          <Heading fontSize={"24px"} color={"rgb(88, 178, 252)"}>
            HapPyShOp
          </Heading>

          <Flex className="home">
            <NavLink
              to={"/"}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "5px",
              }}
            >
              <Text>HOME</Text>
            </NavLink>
          </Flex>
        </Flex>
        <Flex className="links">
          <NavLink
            to={"/cart"}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "5px",
            }}
          >
            <i className="fa-solid fa-cart-arrow-down"></i>
            <Text>CART</Text>
          </NavLink>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;

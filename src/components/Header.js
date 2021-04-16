import { useState } from "react";
import { Flex, Text, Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import Hero from "./Hero";

const MenuItem = ({ children, isLast, to = "/" }) => {
  return (
    <Link to={to}>
      <Text
        mb={{ base: isLast ? 0 : 8, sm: 0 }}
        mr={{ base: 0, sm: isLast ? 0 : 8 }}
        display="block"
        px={3}
        py={1}
        transition="all 0.2s"
        borderRadius="md"
        _hover={{ bg: "purple.500", color: "white" }}
      >
        {children}
      </Text>
    </Link>
  );
};

const Header = (props) => {
  const [show, setShow] = useState(false);
  const toggleMenu = () => setShow(!show);

  return (
    <Flex
      mb={6}
      p={4}
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      bg="purple.300"
    >
      <Box w="200px">
        <Text fontSize="lg" fontWeight="bold">
          Design Xperts
        </Text>
      </Box>

      <Box display={{ base: "block", md: "none" }} onClick={toggleMenu}>
        {show ? <CloseIcon /> : <HamburgerIcon />}
      </Box>

      <Box
        display={{ base: show ? "block" : "none", md: "block" }}
        flexBasis={{ base: "100%", md: "auto" }}
      >
        <Flex
          align="center"
          justify={["center", "space-between", "flex-end", "flex-end"]}
          direction={["column", "row", "row", "row"]}
          pt={[4, 4, 0, 0]}
        >
          <MenuItem to="/">Home</MenuItem>
          <MenuItem to="/services">Services</MenuItem>
          <MenuItem to="/clients">Clients</MenuItem>
          <MenuItem to="/aboutus">About Us</MenuItem>
          <MenuItem to="/search" isLast>
            Search
          </MenuItem>
        </Flex>
      </Box>
    </Flex>
  );
};

export default Header;

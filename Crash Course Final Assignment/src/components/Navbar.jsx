import { HStack } from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";
import { Link as ChakraLink } from "@chakra-ui/react";

function Navbar() {
  const links = [
    {
      to: "/home",
      label: "HOME",
    },
    {
      to: "/about",
      label: "ABOUT",
    },
    {
      to: "/contact",
      label: "CONTACT",
    },
    {
      to: "/tickets",
      label: "TICKETS",
    },
    {
      to: "/",
      label: "LOGIN",
    },
    { to: "/logout", label: "LOGOUT" },
  ];

  return (
    <HStack
      justify={"space-around"}
      bg="red.200"
      width="Xl"
      height="75px"
      fontSize="25px"
      color="white.500"
    >
      {links.map((link) => (
        <ChakraLink as={ReactRouterLink} to={link.to} key={link.to}>
          {link.label}
        </ChakraLink>
      ))}
    </HStack>
  );
}
export default Navbar;

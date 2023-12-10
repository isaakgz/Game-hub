import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/game (1).svg";
import ColormodeSwith from "./ColormodeSwith";

function NavBar() {
  return (
    <HStack justifyContent={"space-between"} padding={"10px"}>
      <Image src={logo} boxSize={"60px"} />
      <ColormodeSwith />
    </HStack>
  );
}

export default NavBar;

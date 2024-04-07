import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/game (1).svg";
import ColormodeSwith from "./ColormodeSwith";
import SearchInput from "./SearchInput";


function NavBar() {
  return (
    <HStack padding={"10px"}>
      <Image src={logo} boxSize={"60px"} />
      <SearchInput />
      <ColormodeSwith />
    </HStack>
  );
}

export default NavBar;

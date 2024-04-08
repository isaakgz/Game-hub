import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/game (1).svg";
import ColormodeSwith from "./ColormodeSwith";
import SearchInput from "./SearchInput";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <HStack padding={"10px"}>
      <Link to="/">
        <Image src={logo} boxSize={"60px"} />
      </Link>
      <SearchInput />
      <ColormodeSwith />
    </HStack>
  );
}

export default NavBar;

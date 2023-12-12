import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/game (1).svg";
import ColormodeSwith from "./ColormodeSwith";
import SearchInput from "./SearchInput";

interface props {
  onSearch : (serachText: string)=>void
}
function NavBar({onSearch}:props) {
  return (
    <HStack padding={"10px"}>
      <Image src={logo} boxSize={"60px"} />
      <SearchInput onSearch={onSearch}/>
      <ColormodeSwith />
    </HStack>
  );
}

export default NavBar;

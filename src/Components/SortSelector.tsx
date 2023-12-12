import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";


function SortSelector() {
  return (
    
        <Menu>
          <MenuButton as={Button} rightIcon={<BsChevronDown />}>
            {" "}
          ordrr by re
          </MenuButton>
          <MenuList>
            <MenuItem>isaak</MenuItem>
            <MenuItem>isaak</MenuItem>
            <MenuItem>isaak</MenuItem>
          </MenuList>
        </Menu>
      );
  
}

export default SortSelector
import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import useGameQueryStore from "../store/gameQueryStore";


function SortSelector() {

 const sortOrder =  useGameQueryStore(s => s.gameQuery.sortOrder);
 const setSortOrder = useGameQueryStore(s => s.setSortOrder)
    
  const sortedOrder = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date Added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release Date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Avarage Rating" },
  ];
  const currentSortOrder = (sortedOrder.find(order=>order.value === sortOrder))
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {" "}
        Order by : {currentSortOrder?.label || "Relevance"}
      </MenuButton>
      <MenuList>
        {sortedOrder.map((order) => (
          <MenuItem onClick={()=>setSortOrder(order.value)} key={order.value} value={order.value}>
            {order.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}

export default SortSelector;

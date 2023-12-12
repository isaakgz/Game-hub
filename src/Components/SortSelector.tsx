import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";


interface props{
    onSelectOrder:(sortOrder:string)=>void
    sortOrder:string;
}
function SortSelector({onSelectOrder, sortOrder}:props) {
    
  const soertedOrder = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date Added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release Date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Avarage Rating" },
  ];
  const currentSortOrder = (soertedOrder.find(order=>order.value === sortOrder))
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {" "}
        Order by : {currentSortOrder?.label || "Relevance"}
      </MenuButton>
      <MenuList>
        {soertedOrder.map((order) => (
          <MenuItem onClick={()=>onSelectOrder(order.value)} key={order.value} value={order.value}>
            {order.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}

export default SortSelector;

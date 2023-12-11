import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";
interface Props {
  children: ReactNode;
}

function GameCardContainer({ children }: Props) {
  return (
    <Box
      width={{
        lg: "300px",
        xl: "280px",
      }}
      borderRadius={10}
      overflow={"hidden"}
    >
      {children}
    </Box>
  );
}

export default GameCardContainer;

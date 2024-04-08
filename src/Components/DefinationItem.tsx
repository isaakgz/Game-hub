import { Box, Heading } from "@chakra-ui/react";
import { ReactNode } from "react";

interface DefinationItemProps {
  term: string;
  children: ReactNode | ReactNode[];
}
function DefinationItem({ children, term }: DefinationItemProps) {
  return (
    <>
      <Box marginY={5}>
        <Heading as="dt" fontSize="md" color="gray.600">
          {term}
        </Heading>
        <dd>{children}</dd>
      </Box>
    </>
  );
}

export default DefinationItem;

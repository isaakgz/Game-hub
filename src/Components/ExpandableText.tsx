import { Button, Text } from "@chakra-ui/react";
import { useState } from "react";
interface ExpandableProps {
  children: string;
}

function ExpandableText({ children }: ExpandableProps) {
  const [expanded, setExpnaded] = useState(false);

  if (!children) return null;

  
  const limit = 300;
  if (children.length <= 300) {
    return <Text>{children}</Text>;
  }

  const summery = expanded ? children : children.substring(0, limit) + "...";

  return (
    <Text>
      {summery}
      <Button
        onClick={() => setExpnaded(!expanded)}
        fontWeight="bold"
        colorScheme="yellow"
        size="xs"
        marginLeft={1}
      >
        {expanded ? "Show less" : "Read More"}
      </Button>
    </Text>
  );
}

export default ExpandableText;

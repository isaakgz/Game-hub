import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Box,
} from "@chakra-ui/react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import NavBar from "../Components/NavBar";

function ErrorPage() {
  const error = useRouteError();
  return (
    <>
    <NavBar />
      <Box padding={5}>
          <Alert status="error">
            <AlertIcon />
            <AlertTitle>Oops there is a problem...!</AlertTitle>
            <AlertDescription>
              {!isRouteErrorResponse(error)
                ? "unexpected problem happened"
                : "The Page does not exist"}
            </AlertDescription>
          </Alert>
      </Box>
    </>
  );
}

export default ErrorPage;

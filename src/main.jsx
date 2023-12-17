// import { ChakraProvider, Box } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";

import { ChakraProvider, extendTheme } from "@chakra-ui/react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider>
      {/* {console.log("==============================================")}
      <Box backgroundColor="blue.100" minHeight="100vh" padding="4" w="100%"> */}
      <App />
      {/* </Box> */}
    </ChakraProvider>
  </React.StrictMode>
);

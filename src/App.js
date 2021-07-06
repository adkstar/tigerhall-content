import React from "react";
import { Button, Stack } from "@chakra-ui/react";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Stack direction="row" spacing={4}>
          <Button colorScheme="teal" variant="solid">
            Email
          </Button>
          <Button colorScheme="teal" variant="outline">
            Call us
          </Button>
        </Stack>
      </header>
    </div>
  );
}

export default App;

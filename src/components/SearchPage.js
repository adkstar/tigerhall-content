import {
  Box,
  Container,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import React from "react";
import SearchResultItemCard from "./SearchResultItemCard";

export default function SearchPage() {
  return (
    <Container bg="brand.darkTeal" height="100vh">
      <Box maxW="400" p="10">
        <SearchBox />
        <SearchResultItemCard />
      </Box>
    </Container>
  );
}

function SearchBox() {
  return (
    <FormControl id="search">
      <FormLabel color="white">Search</FormLabel>
      <Input
        fontSize="16"
        color="white"
        borderWidth="0"
        bg="brand.primary"
        placeholder="Type any keyword"
      />
    </FormControl>
  );
}

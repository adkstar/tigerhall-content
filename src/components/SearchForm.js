import { FormControl, FormLabel, Input } from "@chakra-ui/react";
import React from "react";

import PropTypes from "prop-types";

SearchForm.propTypes = {
  debouncedChangeHandler: PropTypes.func,
};

export default function SearchForm({ debouncedChangeHandler }) {
  return (
    <FormControl id="search">
      <FormLabel color="white">Search</FormLabel>
      <Input
        onChange={debouncedChangeHandler}
        fontSize="16"
        color="white"
        borderWidth="0"
        bg="brand.primary"
        placeholder="Type any keyword"
      />
    </FormControl>
  );
}

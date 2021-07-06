import React from "react";
import { Box, Image, Flex, Text } from "@chakra-ui/react";

export default function SearchResultItemCard() {
  return (
    <Box borderRadius="lg" my="4" overflow="hidden" borderWidth="1px">
      <Image src="https://bit.ly/2k1H1t6" />
      <Box p="3" bg="white">
        <Flex align="baseline" mt={2}>
          <Text
            textTransform="uppercase"
            fontSize="sm"
            fontWeight="semibold"
            color="brand.secondary"
          >
            Widen My World
          </Text>
        </Flex>
        <Text mt={2} fontSize="xl" fontWeight="semibold" lineHeight="short">
          Mindsets to Lead Business Transformation
        </Text>
        <Text mt={1}>Pierre Robinet</Text>
        <Text>MD, SEA</Text>
        <Text color="brand.secondary" fontSize="sm" fontWeight="semibold">
          Ogilvy Consulting
        </Text>
      </Box>
    </Box>
  );
}

import React from "react";
import { Box, Text } from "@chakra-ui/react";
import PropTypes from "prop-types";
import PodcastImage from "./PodcastImage";

SearchResultItemCard.propTypes = {
  podcast: PropTypes.any,
};

export default function SearchResultItemCard({ podcast }) {
  // If there are more than one category, just concatenate them with comma
  const category = podcast.categories
    ?.map((category) => category.name)
    .join(", ");

  // since experts is array, there can be more than 1 expert.
  // but in this can we can just take the first expert
  const expert = podcast.experts?.length > 0 ? podcast.experts[0] : null;

  return (
    <Box
      border="none"
      as="article"
      borderRadius="lg"
      my="4"
      overflow="hidden"
      borderWidth="1px"
    >
      {/* <Image src="https://bit.ly/2k1H1t6" /> */}
      <PodcastImage src={podcast.image?.uri} />
      <Box p="3" bg="white">
        <Text
          as="strong"
          textTransform="uppercase"
          fontSize="sm"
          fontWeight="semibold"
          lineHeight="4"
          color="brand.secondary"
        >
          {category}
        </Text>
        <Text mt={2} fontSize="md" fontWeight="bold" lineHeight="short">
          {podcast.name}
        </Text>
        <Text
          fontWeight="bold"
          mt={1}
        >{`${expert.firstName} ${expert.lastName}`}</Text>
        <Text
          fontSize="xs"
          textTransform="uppercase"
          color="black"
          fontWeight="semibold"
        >
          {expert.title}
        </Text>
        <Text color="brand.secondary" fontSize="sm" fontWeight="semibold">
          {expert.company}
        </Text>
      </Box>
    </Box>
  );
}

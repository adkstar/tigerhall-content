import { Box, Container, Text, Center } from "@chakra-ui/react";
import React, { useState, useMemo, useEffect } from "react";
import SearchResultItemCard from "./SearchResultItemCard";
import { gql, useQuery } from "@apollo/client";
import PodcastSkeleton from "./PodcastSkeleton";
import SearchForm from "./SearchForm";
import debounce from "lodash.debounce";
import { DEBOUNCE_TIME } from "../constants/global";

// moved this outside to prevent its creation on rerender
const PODCASTS = gql`
  {
    contentCards(filter: { limit: 20, keywords: "", types: [PODCAST] }) {
      edges {
        ... on Podcast {
          name
          image {
            ...Image
          }
          categories {
            ...Category
          }
          experts {
            ...Expert
          }
        }
      }
    }
  }

  fragment Image on Image {
    uri
  }

  fragment Category on Category {
    name
  }

  fragment Expert on Expert {
    firstName
    lastName
    title
    company
  }
`;

export default function SearchPage() {
  // local states
  const [query, setQuery] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [filtering, setFiltering] = useState(false);

  const changeHandler = (event) => {
    setQuery(event.target.value);
  };

  // use useMemo to cache the output
  // set debounce to 300ms
  const debouncedChangeHandler = useMemo(() => {
    return debounce(changeHandler, DEBOUNCE_TIME);
  }, []);

  // make a call to gql endpoint
  const { loading, error, data } = useQuery(PODCASTS);

  // Instead of overriding data, we create filteredData and copy data to it
  // so that we can filter the original data with query
  useEffect(() => {
    setFilteredData(data?.contentCards?.edges);
  }, [data]);

  // make client side search on input change
  // Added 1 sec delay to show loading while filtering
  useEffect(() => {
    setFiltering(true);
    setTimeout(() => {
      if (query !== "") {
        setFilteredData(
          data?.contentCards?.edges?.filter((podcast) => {
            return podcast?.name.toLowerCase().includes(query.toLowerCase());
          })
        );
      } else setFilteredData(data?.contentCards?.edges);

      setFiltering(false);
    }, 1000);
  }, [query, setQuery]);

  return (
    <Container bg="brand.darkTeal" height="100%" minHeight="100vh">
      <Box maxW="400" p="10" mx="auto">
        <SearchForm debouncedChangeHandler={debouncedChangeHandler} />

        {error && (
          <Center my="5">
            <Text
              as="strong"
              textTransform="uppercase"
              fontSize="sm"
              fontWeight="semibold"
              lineHeight="4"
              color="red"
            >
              Error loading podcasts
            </Text>
          </Center>
        )}

        {(loading || filtering) &&
          Array(5)
            .fill(null)
            .map((_, i) => <PodcastSkeleton key={i} />)}

        {!loading &&
          filteredData?.length > 0 &&
          filteredData.map((podcast, index) => (
            <SearchResultItemCard key={index} podcast={podcast} />
          ))}

        {query !== "" && filteredData?.length === 0 && (
          <Center my="5">
            <Text as="strong" fontWeight="semibold" lineHeight="4" color="red">
              There are no matches for your query
            </Text>
          </Center>
        )}
      </Box>
    </Container>
  );
}

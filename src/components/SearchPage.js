import {
  Box,
  Container,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Skeleton,
  Text,
} from "@chakra-ui/react";
import React from "react";
import SearchResultItemCard from "./SearchResultItemCard";
import { gql, useQuery } from "@apollo/client";

export default function SearchPage() {
  const EXCHANGE_RATES = gql`
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

  const { loading, error, data } = useQuery(EXCHANGE_RATES);

  //   if (loading) return <p>Loading...</p>;
  //   if (error) return <p>Error :(</p>;

  console.log("data");
  console.log(data);

  return (
    <Container bg="brand.darkTeal" height="100%">
      <Box maxW="400" p="10">
        <SearchBox />

        {error && (
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
        )}

        {loading &&
          Array(5)
            .fill(null)
            .map((item, i) => (
              <Box
                key={i}
                as="article"
                borderRadius="lg"
                my="4"
                overflow="hidden"
                borderWidth="1px"
                borderSize="0"
                bg="white"
              >
                <Stack>
                  <Skeleton height="150px" />
                  <Box p="5">
                    <Skeleton height="20px" />
                    <Skeleton height="40px" my="2" />
                    <Skeleton height="20px" />
                  </Box>
                </Stack>
              </Box>
            ))}

        {!loading &&
          data.contentCards?.edges?.length > 0 &&
          data.contentCards.edges.map((podcast, index) => (
            <SearchResultItemCard key={index} podcast={podcast} />
          ))}
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

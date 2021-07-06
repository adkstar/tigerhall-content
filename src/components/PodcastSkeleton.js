import React from "react";
import { Box, Stack, Skeleton } from "@chakra-ui/react";

export default function PodcastSkeleton() {
  return (
    <Box
      borderRadius="lg"
      my="4"
      overflow="hidden"
      borderWidth="1px"
      border="none"
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
  );
}

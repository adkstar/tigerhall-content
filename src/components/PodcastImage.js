import React from "react";
import { Image } from "@chakra-ui/react";
import PropTypes from "prop-types";

PodcastImage.propTypes = {
  src: PropTypes.string,
};

const IMAGE_URL = "https://static.tigerhall.com";
const IMAGE_SIZE = "250X";

export default function PodcastImage({ src }) {
  // I'm not sure if I have to make the image size fixed or flexible
  const splittedUrl = src.split(IMAGE_URL);
  const correctedPath = `${IMAGE_URL}/resize/${IMAGE_SIZE}${splittedUrl[1]}`;

  return <Image src={correctedPath} />;
}

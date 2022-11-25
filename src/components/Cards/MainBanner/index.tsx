import { Box, Text } from "@chakra-ui/react";

const MainBanner: React.FC = () => {
  return (
    <>
      <Box
        bgImage={"url('/assets/image/background-movies.png')"}
        h={"50vh"}
        bgRepeat={"no-repeat"}
        bgSize={"cover"}
      >
        <Text as={"h1"} variant={"titleLg"}>
          DEVFLIX
        </Text>
      </Box>
    </>
  );
};

export default MainBanner;

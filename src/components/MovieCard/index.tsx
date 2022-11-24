import { Card, CardBody, Image, Text } from "@chakra-ui/react";

interface IProps {
  title: string;
}

const MovieCard: React.FC<IProps> = (props) => {
  return (
    <>
      <Card maxW={{ base: "100%", sm: "180px" }}>
        <Image
          borderRadius="lg"
          src="https://image.tmdb.org/t/p/w500/9z256FFPDsL7kSVJ9oyLELaN1ph.jpg"
          alt="Movie"
        />
        <Text>{props.title}</Text>
      </Card>
    </>
  );
};
export default MovieCard;

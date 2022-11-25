import { Link, Text, GridItem } from "@chakra-ui/react";
import { Link as ReactLink } from "react-router-dom";
import ImageCard from "./ImageCard";

interface IProps {
  id: string;
  title: string;
  imageUrl: string;
}

const MovieCard: React.FC<IProps> = (props) => {
  return (
    <>
      <GridItem display="flex" flexDirection="column" alignItems="center">
        <Link as={ReactLink} to={`/details/${props.id}`}>
          <ImageCard imageUrl={props.imageUrl} />
        </Link>
        <Text variant={"titleSm"}>{props.title}</Text>
      </GridItem>
    </>
  );
};
export default MovieCard;

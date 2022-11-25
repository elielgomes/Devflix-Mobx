import { List, Box } from "@chakra-ui/react";
import TagsInfos from "../Tags/TagsInfos";
import TagsGenres from "../Tags/TagsGenres";

interface IProps {
  runtime: number;
  voteAverage: number;
  genres: { id: string; name: string }[];
}

const TagsGroup: React.FC<IProps> = (props) => {
  return (
    <>
      <TagsInfos voteAverage={props.voteAverage} runtime={props.runtime} />
      <Box>
        <List display="flex" columnGap="10px" rowGap="20px" flexWrap="wrap">
          {props?.genres.map((genre) => {
            return <TagsGenres key={genre.id} genre={genre.name} />;
          })}
        </List>
      </Box>
    </>
  );
};
export default TagsGroup;

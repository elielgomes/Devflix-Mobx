import { Tag, TagLabel, ListItem } from "@chakra-ui/react";

interface IProps {
  genre: string;
}

const TagsGenres: React.FC<IProps> = (props) => {
  return (
    <>
      <ListItem>
        <Tag>
          <TagLabel>{props.genre}</TagLabel>
        </Tag>
      </ListItem>
    </>
  );
};

export default TagsGenres;

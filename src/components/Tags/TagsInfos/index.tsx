import { Tag, TagLabel, TagLeftIcon } from "@chakra-ui/react";
import { FaStar } from "react-icons/fa";
import { BsHourglassSplit } from "react-icons/bs";

interface IProps {
  runtime: number;
  voteAverage: number;
}

const TagsInfos: React.FC<IProps> = (props) => {
  return (
    <>
      <Tag py={"10px"} px={"5px"}>
        <TagLeftIcon boxSize="16px" as={FaStar} />
        <TagLabel fontSize={"16px"}>{props.voteAverage}</TagLabel>
      </Tag>

      <Tag py={"10px"} px={"5px"}>
        <TagLeftIcon boxSize="16px" as={BsHourglassSplit} />
        <TagLabel fontSize={"16px"}>{props.runtime} min</TagLabel>
      </Tag>
    </>
  );
};

export default TagsInfos;

import { Image } from "@chakra-ui/react";
import { transitions } from "../../../../theme";

interface IProps {
  imageUrl: string;
}

const ImageCard: React.FC<IProps> = (props) => {
  return (
    <>
      <Image
        src={`${props.imageUrl}`}
        alt="Movie"
        w={"180px"}
        borderRadius="10px"
        transition={transitions.default}
        _hover={{ transform: "scale(1.05)" }}
      />
    </>
  );
};
export default ImageCard;

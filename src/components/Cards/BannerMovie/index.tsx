import { Image } from "@chakra-ui/react";

interface IProps {
  imageUrl: string;
}

const BannerMovie: React.FC<IProps> = (props) => {
  return (
    <>
      <Image
        src={`${props.imageUrl}`}
        alt="Movie"
        w={"300px"}
        borderRadius="10px"
      />
    </>
  );
};
export default BannerMovie;

import { Text } from "@chakra-ui/react";
import TagsGroup from "../../components/TagsGroup";

const Teste = () => {
  let arr = [
    { id: "a", name: "asdasd" },
    { id: "a", name: "asdasd" },
    { id: "a", name: "asdasd" },
    { id: "a", name: "asdasd" },
    { id: "a", name: "asdasd" },
    { id: "a", name: "asdasd" },
  ];
  return (
    <>
      <Text variant={"titleLg"}>DEVFLIX</Text>
      <TagsGroup voteAverage={7.987} runtime={179} genres={arr} />
    </>
  );
};

export default Teste;

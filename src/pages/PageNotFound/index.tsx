import { Link as ReactLink } from "react-router-dom";
import {
  Container,
  Text,
  Button,
  Link,
  Tag,
  Image,
  Box,
  Flex
} from "@chakra-ui/react";

const PageNotFound: React.FC = () => {
  return (
    <>
      <Container minH={"100vh"} py={"100px"} display={"flex"} alignItems={"center"} justifyContent={"center"} flexDirection={"column"}>
        <Text variant={"titleMd"} color={"primary.50"}>
          Ooops...
        </Text>
        <Text variant={"titleMd"}>Página não encontrada!</Text>
        <Image src={"/assets/image/404.png"} />
        <Flex justifyContent={"center"} align={"center"} flexDirection={"column"} gap={"20px"}>
          <Text fontSize={"30px"}>
            PEGUE SUA PIPOCA E ASSISTA OS{" "}
            <Text
              as={"strong"}
              fontSize={"30px"}
              fontWeight={"normal"}
              color={"primary.50"}
            >
              {" "}
              MELHORES
            </Text>{" "}
            FILMES
          </Text>
          <Link as={ReactLink} to={"/"}>
            <Button variant={"default"}>Assistir</Button>
          </Link>
        </Flex>
      </Container>
    </>
  );
};

export default PageNotFound;

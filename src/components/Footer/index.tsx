import { Box, Container, Image, List, ListItem, Text } from "@chakra-ui/react";

const Footer: React.FC = () => {
  const footerList = [
    "Perguntas frequentes",
    "Formas de assistir",
    "Só na Devflix",
    "Central de Ajuda",
    "Termos de Uso",
    "Entre em contato",
    "Privacidade",
    "Avisos legais",
  ];

  return (
    <>
      <Box bgColor={"secondary.200"} maxH={"450px"}>
        <Container maxW={"1500px"} pt={"40px"}>
          <Box>
            <Image src={"/assets/image/DEVFLIX-brand-sm.png"} />
          </Box>
          <List>
            {footerList.map((item) => (
              <ListItem key={item} cursor={"pointer"}>
                <Text
                  as={"span"}
                  color={"secondary.100"}
                  _hover={{ color: "secondary.50" }}
                >
                  {item}
                </Text>
              </ListItem>
            ))}
          </List>
          <Text>© Devflix Brasil</Text>
        </Container>
      </Box>
    </>
  );
};
export default Footer;

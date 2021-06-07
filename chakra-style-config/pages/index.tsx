import { Button } from "@chakra-ui/button";
import { Box, Container, Text } from "@chakra-ui/layout";

export default function Home() {
  return (
    <Container mx="10" mt="10">
      <Box>
        <Button bg="red" color="white" mt="1">
          Button red
        </Button>
      </Box>
    </Container>
  );
}

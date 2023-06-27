import { VStack, HStack, Heading, Text } from "@chakra-ui/react";
import contactSvg from "../assets/contact.svg";
import { Envelope, WhatsappLogo } from "phosphor-react";

export default function Contact() {
  return (
    <VStack
      alignItems="center"
      justifyContent="center"
      w="100%"
      h="calc(100vh)"
      bg="#FFBE0B"
    >
      <HStack spacing="28">
        <VStack alignItems="start" spacing={5}>
          <Heading
            fontWeight="400"
            color="#913AFF"
            w="xlg"
            fontSize="4rem"
            fontFamily="Inter"
          >
            QUER ENTRAR EM <Text fontWeight="700">CONTATO?</Text>
          </Heading>
          <VStack alignItems='start'>
            <HStack>
              <WhatsappLogo color="#3A86FF" size="35px" />
              <Text color="#FF006E" fontWeight="bold" fontSize="lg">
                +55 (22) 998797263
              </Text>
            </HStack>
            <HStack>
              <Envelope color="#3A86FF" size="35px" />
              <Text color="#FF006E" fontWeight="bold" fontSize="lg">
                andbmarques@gmail.com
              </Text>
            </HStack>
          </VStack>
        </VStack>
        <img src={contactSvg} />
      </HStack>
    </VStack>
  );
}

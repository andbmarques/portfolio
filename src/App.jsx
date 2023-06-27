import { VStack, HStack, Image, Heading, Text, Icon } from "@chakra-ui/react";
import { LinkedinLogo, GithubLogo, FileText } from "phosphor-react";
import avatar from "./assets/avatar.svg";
import Contact from "./components/contact";
import Stacks from "./components/stacks";
import {
  Fullpage,
  FullPageSections,
  FullpageSection,
} from "@ap.cx/react-fullpage";
import Projects from "./components/projects";

function App() {
  return (
    <Fullpage>
      <VStack
        sx={{
          "::-webkit-scrollbar": {
            display: "none",
          },
        }}
      >
        <FullPageSections>
          <FullpageSection>
            <VStack
              alignItems="center"
              justifyContent="center"
              w="100%"
              h="calc(100vh)"
              bg="#FFBE0B"
            >
              <HStack spacing="3rem">
                <Image src={avatar} w="19em" />
                <VStack spacing="0" alignItems="start">
                  <HStack justifyContent="space-between" w="90%">
                    <Heading
                      fontFamily="Inter"
                      fontWeight="700"
                      bgGradient="linear(to-l, #913AFF, #FF006E)"
                      bgClip="text"
                      fontSize="3.5rem"
                      margin="0"
                    >
                      FRONT-END
                    </Heading>
                    <HStack>
                      <a
                        href="https://www.linkedin.com/in/andbmarques/"
                        target="blank"
                      >
                        <Icon
                          as={LinkedinLogo}
                          fontSize="2rem"
                          color="#FF006E"
                          cursor="pointer"
                          _hover={{ opacity: 0.5 }}
                        />
                      </a>
                      <a href="https://github.com/andbmarques" target="blank">
                        <Icon
                          as={GithubLogo}
                          fontSize="2rem"
                          color="#FF006E"
                          cursor="pointer"
                          _hover={{ opacity: 0.5 }}
                        />
                      </a>
                      <a href="" target="blank">
                        <Icon
                          as={FileText}
                          fontSize="2rem"
                          color="#FF006E"
                          cursor="pointer"
                          _hover={{ opacity: 0.5 }}
                        />
                      </a>
                    </HStack>
                  </HStack>
                  <Heading
                    fontFamily="Inter"
                    fontWeight="400"
                    color="white"
                    fontSize="6rem"
                    margin="0"
                    mt="-5"
                  >
                    DEVELOPER
                  </Heading>
                  <Text
                    textAlign="right"
                    flexWrap="wrap"
                    w="80"
                    alignSelf="end"
                    color="#3A86FF"
                    fontWeight="700"
                  >
                    Olá! Eu sou o Anderson, tenho 21 anos e estudo dev. web há 3
                    anos. Confira meus projetos abaixo!
                  </Text>
                </VStack>
              </HStack>
            </VStack>
          </FullpageSection>
          <FullpageSection>
            <Stacks />
          </FullpageSection>
          <FullpageSection>
            <Projects />
          </FullpageSection>
          <FullpageSection>
            <Contact />
          </FullpageSection>
        </FullPageSections>
      </VStack>
    </Fullpage>
  );
}

export default App;

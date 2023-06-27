import { VStack, HStack, Heading, Text } from "@chakra-ui/react";
import StackIcon from "./stackIcon";
import { AndroidLogo, Atom, Coffee, FileJs, Leaf, Train, Triangle, WindowsLogo,  } from "phosphor-react";

export default function Stacks() {
  return (
    <VStack alignItems="start" p="10" w="100%" h="calc(100vh)" bg="white">
      <HStack
        px="3"
        alignItems="center"
        justifyContent="center"
        borderLeft="5px solid #FFBE0B"
      >
        <Heading bgGradient="linear(to-l, #913AFF, #FF006E)" bgClip="text">
          Stacks
        </Heading>
      </HStack>
      <VStack justifyContent='center' h='calc(70vh)' alignItems="center" w="100%">
        <Heading size="lg" color="#3A86FF">
          TOP 3 TECNOLOGIAS:
        </Heading>
        <HStack mt='5' spacing='10'>
            <StackIcon Icon={Triangle} title='NextJS' />
            <StackIcon primary Icon={Atom} title='ReactJS' />
            <StackIcon Icon={AndroidLogo} title='React-Native' />
        </HStack>
        <Heading mt='10' size="lg" color="#913AFF">
          TAMBÉM TRABALHO COM:
        </Heading>
        <HStack mt='5' spacing='10'>
            <StackIcon variant Icon={WindowsLogo} title='ElectronJS' />
            <StackIcon variant Icon={FileJs} title='NodeJS' />
            <StackIcon variant Icon={Coffee} title='Express' />
            <StackIcon variant Icon={Leaf} title='Mongoose' />
        </HStack>
      </VStack>
    </VStack>
  );
}

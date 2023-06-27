import { VStack, Heading, HStack, Text, Button } from "@chakra-ui/react";
import projectlist from "../projectlist";
import {
  Check,
  Clock,
  GithubLogo,
  Globe,
  ListBullets,
  Star,
} from "phosphor-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

export default function Projects() {
  return (
    <VStack alignItems="start" p="10" w="100%" h="calc(100vh)" bg="white">
      <HStack
        px="3"
        alignItems="center"
        justifyContent="center"
        borderRight="5px solid #FFBE0B"
        alignSelf="end"
      >
        <Heading bgGradient="linear(to-l, #913AFF, #FF006E)" bgClip="text">
          Projetos
        </Heading>
      </HStack>
      <VStack
        justifyContent="center"
        h="calc(70vh)"
        alignItems="start"
        w="100%"
        spacing="10"
        
      >
        <VStack mt='5' alignItems="start">
          <HStack mb="2" color="#3A86FF">
            <Star size={32} weight="fill" />
            <Heading size="lg">Top Projetos</Heading>
          </HStack>
          <HStack spacing="5">
            {projectlist &&
              projectlist
                .filter((item) => item.topProject)
                .map((item, index) => {
                  return (
                    <VStack
                      alignItems="center"
                      justifyContent="space-between"
                      w="md"
                      h="2xs"
                      borderRadius="2xl"
                      p="5"
                      border="2px solid #ff006f63"
                      key={index}
                    >
                      <HStack w="100%" justifyContent="space-between">
                        <Heading color="#FF006E" size="md">
                          {item.title}
                        </Heading>
                        {item.isFinished ? (
                          <HStack>
                            <Check weight="fill" color="#005212" />
                            <Text color="#005212">Finalizado</Text>
                          </HStack>
                        ) : (
                          <HStack>
                            <Clock weight="fill" color="#8338EC" />
                            <Text color="#8338EC">Em desenvolvimento</Text>
                          </HStack>
                        )}
                      </HStack>
                      <HStack w="100%">
                        {item.stack &&
                          item.stack.map((item, index) => {
                            return (
                              <div key={index}>
                                <Text
                                  bg="#FFBE0B"
                                  px="2"
                                  py="0.5"
                                  borderRadius="md"
                                  color="#8338EC"
                                >
                                  {item}
                                </Text>
                              </div>
                            );
                          })}
                      </HStack>
                      <Text flexWrap="wrap">{item.desc}</Text>
                      <HStack alignSelf="end">
                        <Button
                          color="white"
                          leftIcon={<GithubLogo weight="fill" />}
                          bgColor="#913AFF"
                          as={"a"}
                          href={item.repoLink}
                          target="blank"
                        >
                          Repositório
                        </Button>
                        <Button
                          color="white"
                          leftIcon={<Globe weight="fill" />}
                          bgColor="#FF006E"
                          as={"a"}
                          href={item.deployLink}
                          target="blank"
                        >
                          Deploy
                        </Button>
                      </HStack>
                    </VStack>
                  );
                })}
          </HStack>
        </VStack>
        <VStack mt='-5' alignItems="start">
          <HStack mb="2" color="#FF006E">
            <ListBullets size={18} weight="fill" />
            <Heading size="sm">Outros Projetos</Heading>
          </HStack>
          <HStack w='calc(95vw)' alignItems='center' >
            <Swiper style={{ paddingBottom: '2rem' }} centeredSlides observer slidesPerView={3} modules={[ Pagination ]} pagination={{ clickable: true }} spaceBetween={-115} direction='horizontal'>
              {projectlist &&
                projectlist
                  .filter((item) => !item.topProject)
                  .map((item, index) => {
                    return (
                      <SwiperSlide key={index}>
                        <VStack
                          alignItems="center"
                          justifyContent="space-between"
                          w="md"
                          h="2xs"
                          borderRadius="2xl"
                          p="5"
                          border="2px solid #ff006f63"
                        >
                          <HStack w="100%" justifyContent="space-between">
                            <Heading color="#FF006E" size="md">
                              {item.title}
                            </Heading>
                            {item.isFinished ? (
                              <HStack>
                                <Check weight="fill" color="#005212" />
                                <Text color="#005212">Finalizado</Text>
                              </HStack>
                            ) : (
                              <HStack>
                                <Clock weight="fill" color="#8338EC" />
                                <Text color="#8338EC">Em desenvolvimento</Text>
                              </HStack>
                            )}
                          </HStack>
                          <HStack w="100%">
                            {item.stack &&
                              item.stack.map((item, index) => {
                                return (
                                  <div key={index}>
                                    <Text
                                      bg="#FFBE0B"
                                      px="2"
                                      py="0.5"
                                      borderRadius="md"
                                      color="#8338EC"
                                    >
                                      {item}
                                    </Text>
                                  </div>
                                );
                              })}
                          </HStack>
                          <Text flexWrap="wrap">{item.desc}</Text>
                          <HStack alignSelf="end">
                            <Button
                              color="white"
                              leftIcon={<GithubLogo weight="fill" />}
                              bgColor="#913AFF"
                              as={"a"}
                              href={item.repoLink}
                              target="blank"
                            >
                              Repositório
                            </Button>
                            <Button
                              color="white"
                              leftIcon={<Globe weight="fill" />}
                              bgColor="#FF006E"
                              as={"a"}
                              href={item.deployLink}
                              target="blank"
                            >
                              Deploy
                            </Button>
                          </HStack>
                        </VStack>
                      </SwiperSlide>
                    );
                  })}
            </Swiper>
          </HStack>
        </VStack>
      </VStack>
    </VStack>
  );
}

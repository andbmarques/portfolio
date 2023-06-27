import { VStack, Text } from "@chakra-ui/react";

export default function StackIcon({ title, Icon, variant, primary }) {
  return (
    <VStack
      alignItems="center"
      bgColor={!primary ? !variant ? "#FF006E" : "#FFBE0B" : "#3A86FF"}
      justifyContent="center"
      w={primary ? "10rem" : "8rem"}
      h={primary ? "10rem" : "8rem"}
      borderRadius="lg"
    >
      <Icon size="50" color={!variant ? "white" : "#FF006E"} />
      <Text fontWeight={variant ? '400' : '700'} color={!variant ? "white" : "#FF006E"} fontSize="lg">
        {title}
      </Text>
    </VStack>
  );
}

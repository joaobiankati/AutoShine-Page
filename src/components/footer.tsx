import {Link as ChakraLink, Text, Icon, VStack, Image as ChakraImage, Heading, Flex} from "@chakra-ui/react";
import NextLink from "next/link";
import {LuCar} from "react-icons/lu";

export function Footer() {
    return(
        <VStack as="footer" borderTopWidth={1} py={12}>
        <ChakraLink colorPalette="yellow" alignItems="center" gap={2} asChild>
          <NextLink href="/">
            <Icon w={7} h={7}>
              <LuCar />
            </Icon>

            <Text fontSize="xl" fontWeight="bold">AutoShine</Text>
          </NextLink>
        </ChakraLink>

        <Text fontSize="sm">© 2026 AutoShine Estética Automotiva. Todos os direitos reservados.</Text>
      </VStack>
    )
}
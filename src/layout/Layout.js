import { Routes, Route, Outlet } from 'react-router-dom';
import {
  Flex,
  Link,
  Text,
  useColorModeValue,
  Container,
  Heading,
  Button,
  Center,
  useToast,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from '../components/ColorModeSwitcher';

const i18ns = {
  appTitle: 'Github Extension Counter',
  backButton: 'Volver',
  rightsText: '© Todos los derechos están reservados',
  authorText: 'Hecho con ♥ por',
  authorName: 'ValiSum',
  errorTitle: 'Ha habido un error!',
  errorDescription: 'Comprueba que todos los datos introducidos son correctos.',
};

export const Layout = ({ children }) => {
  const bg = useColorModeValue('whiteAlpha.800', 'whiteAlpha.100');

  return (
    <Flex width="100wh" height="100vh" direction="column" bg={bg}>
      <Container maxW="4xl" height="50px">
        <Flex height="100%" justifyContent="space-between" alignItems="center">
          <Heading as="h1" size="md">
            {i18ns.appTitle}
          </Heading>
          <Flex>
            <ColorModeSwitcher />

            <Button
              ml="2"
              colorScheme="teal"
              variant="outline"
              // onClick={setInitialState}
            >
              {i18ns.backButton}
            </Button>
          </Flex>
        </Flex>
      </Container>
      <Container maxW="4xl" height="calc(100% - 150px)">
        <Outlet />
      </Container>
      <Container maxW="4xl" height="100px">
        <Center height="100%">
          <Text>
            {i18ns.rightsText} | {new Date().getFullYear()} |
            {` ${i18ns.authorText} `}
            <Link
              href="https://valisum.com"
              rel="noopener noreferrer"
              target="_blank"
            >
              {i18ns.authorName}
            </Link>
          </Text>
        </Center>
      </Container>
    </Flex>
  );
};

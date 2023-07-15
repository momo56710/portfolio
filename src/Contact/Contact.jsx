import {
  Flex,
  Box,
  Heading,
  Text,
  IconButton,
  Button,
  VStack,
  HStack,
  Wrap,
  WrapItem,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
  Grid,
  useColorModeValue,
  useToast,
} from '@chakra-ui/react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import {
  FaBehance,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaLocationArrow,
  FaPhone,
} from 'react-icons/fa';
import Nav from '../nav/navfun/nav';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Contact() {
  const toast = useToast();
  const navigate = useNavigate();
  const form = useRef();
  const name = useRef();
  const email = useRef();
  const message = useRef();
  const sendEmail = e => {
    e.preventDefault();
    if(name.current.value == "" || email.current.value == "" || message.current.value == ""){
        toast({
            title: 'Email not sent',
            description: 'fill the form please',
            status: 'error',
            duration: 9000,
            isClosable: true,
          });
    }
    else{
   
    emailjs
      .sendForm(
        'service_0ykx0co',
        'template_pc6s8yc',
        form.current,
        'vy45HXUrL9XUUP5gy'
      )
      .then(result => {
        toast({
          title: 'Email sent',
          description: 'Thank u for reaching',
          status: 'success',
          duration: 9000,
          isClosable: true,
        });
      });
    }
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.75, ease: 'easeOut' }}
    >
      <Nav />
      <Box maxW={'1500px'} margin={'auto'} mt={'7em'}>
        <Grid placeItems={'center'}>
          <Flex w={{base : '90vw' , md : "80vw"}}>
            <Box
              pt={'3em'}
              bg={useColorModeValue('#0c1338', '#51a1a8')}
              color={useColorModeValue('white', '#0c1338')}
              borderRadius="lg"
              w={'100%'}
            >
              <Box p={4}>
                <Box display={'grid'} placeItems={'center'}>
                  <Heading>Contact</Heading>
                  <Text
                    mt={{ sm: 3, md: 3, lg: 5 }}
                    color={useColorModeValue('white', '#0c1338')}
                  >
                    Fill up the form below to contact
                  </Text>
                  <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
                    <VStack pl={0} spacing={3} alignItems="center">
                      <Button
                        size="md"
                        height="48px"
                        width="200px"
                        variant="ghost"
                        color={useColorModeValue('white', '#0c1338')}
                        _hover={{ border: '2px solid #1C6FEB' }}
                        leftIcon={
                          <FaPhone
                            color={useColorModeValue('white', '#0c1338')}
                            size="20px"
                          />
                        }
                      >
                        +213562519164
                      </Button>
                      <Button
                        size="md"
                        height="48px"
                        variant="ghost"
                        color={useColorModeValue('white', '#0c1338')}
                        _hover={{ border: '2px solid #1C6FEB' }}
                        leftIcon={
                          <FaEnvelope
                            color={useColorModeValue('white', '#0c1338')}
                            size="20px"
                          />
                        }
                      >
                        <a
                          href="mailto: metidjimohamedamine8@gmail.com"
                          target="_blank"
                        >
                          metidjimohamedamine8@gmail.com
                        </a>
                      </Button>
                      <Button
                        size="md"
                        height="48px"
                        width="200px"
                        variant="ghost"
                        color={useColorModeValue('white', '#0c1338')}
                        _hover={{ border: '2px solid #1C6FEB' }}
                        leftIcon={
                          <FaLocationArrow
                            color={useColorModeValue('white', '#0c1338')}
                            size="20px"
                          />
                        }
                      >
                        Medea,Algeria
                      </Button>
                    </VStack>
                  </Box>
                  <HStack
                    mt={{ lg: 10, md: 10 }}
                    spacing={5}
                    px={5}
                    alignItems="flex-start"
                  >
                   
                    <a href="https://github.com/momo56710" target="_blank">
                      <IconButton
                        aria-label="github"
                        variant="ghost"
                        size="lg"
                        isRound={true}
                        _hover={{ bg: '#0D74FF' }}
                        icon={<FaGithub size="28px" />}
                      />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/metidji-mohamed-amine-252975255"
                      target="_blank"
                    >
                      <IconButton
                        aria-label="discord"
                        variant="ghost"
                        size="lg"
                        isRound={true}
                        _hover={{ bg: '#0D74FF' }}
                        icon={<FaLinkedin size="28px" />}
                      />
                    </a>
                  </HStack>
                </Box>

                <Box bg="white" borderRadius="lg" w={'80%'} m={'auto'}>
                  <Box py={'2em'} m={8} color="#0B0E3F">
                    <form ref={form} onSubmit={sendEmail}>
                      <VStack spacing={5}>
                        <FormControl id="name">
                          <FormLabel>Your Name</FormLabel>
                          <InputGroup borderColor="#E0E1E7">
                            <InputLeftElement pointerEvents="none" />
                            <Input ref={name} type="text" size="md" name="to_name" />
                          </InputGroup>
                        </FormControl>
                        <FormControl id="Email">
                          <FormLabel>Mail</FormLabel>
                          <InputGroup borderColor="#E0E1E7">
                            <InputLeftElement
                              pointerEvents="none"
                              children={<FaEnvelope color="gray.800" />}
                            />
                            <Input ref={email} type="email" name="from_name" size="md" />
                          </InputGroup>
                        </FormControl>
                        <FormControl id="Message">
                          <FormLabel>Message</FormLabel>
                          <Textarea
                          ref={message}
                            name="message"
                            color="#0c1338"
                            borderColor="gray.300"
                            _hover={{
                              borderRadius: 'gray.300',
                            }}
                          />
                        </FormControl>
                        <FormControl id="name" float="right">
                          <Button
                            variant="solid"
                            bg="#0D74FF"
                            color="white"
                            type="submit"
                            _hover={{}}
                          >
                            Send Message
                          </Button>
                        </FormControl>
                      </VStack>
                    </form>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Flex>
        </Grid>
      </Box>
    </motion.div>
  );
}

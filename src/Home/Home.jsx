import React from 'react';
import { motion } from 'framer-motion';
import Nav from '../nav/navfun/nav';
import {
  Box,
  Heading,
  Text,
  Grid,
  Image,
  useColorModeValue,
} from '@chakra-ui/react';
import myPic from '../assets/me.jpg';
export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.75, ease: 'easeOut' }}
    >
      <Nav />
      <Box px={'2em'} maxW={'1500px'} margin={'auto'} mt={'7em'}>
        <Grid placeItems={'center'}>
          <Heading fontSize={'2.5em'} textAlign={'center'}>
            Metidji Mohamed Amine
          </Heading>
          <Text fontSize={'1.3em'} textAlign={'center'}>
            web developer,video Editor and somehow a graphic designer
          </Text>
          <Text
            fontSize={'1.3em'} textAlign={'center'}
            color={useColorModeValue('#5EBBC3', '#131B52')}
            textDecor={'underline'}
          >
            <a
              href="https://drive.google.com/file/d/1L_H2nOw7ke7W_K3teH6JKCfVL9vyEUK8/view?usp=sharing"
              target="_blank"
            >
              Resume
            </a>
          </Text>
          <Grid
            width={{ base: '', md: '70%' }}
            templateColumns={{ base: '1fr', md: '1fr 1fr' }}
            gap={'1em'}
            placeItems={'center'}
            pb={'2em'}
          >
            <Box
              mt={'2em'}
              overflow={'hidden'}
              w={'80%'}
              aspectRatio={1}
              borderRadius={'50%'}
            >
              <Image src={myPic} />
            </Box>
            <Box>
              <Text fontSize={'1.3em'}>
                <Text
                  fontWeight={'bold'}
                  color={useColorModeValue('#5EBBC3', '#131B52')}
                >
                  Greetings ^^
                </Text>{' '}
                <br />
                <Text textAlign={{ base: 'center', md: 'left' }}>
                  Back in 2017 my friend showed me some of his HTML work and how
                  he built a web page with his photo on it i was so impressed
                  that that I'm now focusing my career on it. <br />
                  i'm a pc enthusiast and a juinor web developer with skills in
                  video editing and graphic design
                </Text>
              </Text>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </motion.div>
  );
}

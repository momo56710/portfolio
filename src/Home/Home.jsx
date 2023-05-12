import React from 'react';
import { motion } from 'framer-motion';
import Nav from '../nav/navfun/nav';
import { Box, Heading, Text, Grid, Image } from '@chakra-ui/react';
import myPic from '../assets/me.jpg';
export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.75, ease: 'easeOut' }}
    >
      <Nav />
      <Box  px={'2em'} maxW={'1500px'} margin={'auto'} mt={'7em'}>
        <Grid placeItems={'center'}>
          <Heading fontSize={'2.5em'} textAlign={'center'}>Metidji Mohamed Amine</Heading>
          <Text fontSize={'1.3em'} textAlign={'center'}>
            web developer,video Editor and somehow a graphic designer
          </Text>
          <Box mt={'2em'} overflow={'hidden'} w={{base : '80vw' , md : '20em'}} aspectRatio={1} borderRadius={'50%'}> <Image src={myPic}  /></Box>
         
        </Grid>
      </Box>
    </motion.div>
  );
}

import { Box, Grid, Heading } from '@chakra-ui/react';
import React from 'react';
import Nav from '../../nav/navfun/nav';
import { motion } from 'framer-motion';
import ReactPlayer from 'react-player/youtube';
export default function AnimationVideos() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.75, ease: 'easeOut' }}
    >
      <Nav />
      <Box maxW={'1500px'} mt={'7em'} ml={{ base: '0', md: '5em' }}>
        <Heading textAlign={'center'}>Animations</Heading>
        <Box
          pt={'3em'}
          pb={'5em'}
          placeItems={'center'}
          display={'flex'}
          justifyContent={'center'}
          alignItems={'center'}
          flexWrap={'wrap'}
          gap={'3em'}
        >
          <ReactPlayer url="https://youtube.com/shorts/NoUX0MZZTxA" />
          <ReactPlayer url="https://youtube.com/shorts/d2RLmTlMRPM" />
          <ReactPlayer url="https://youtube.com/shorts/x_rIvKhg9S0" />
        </Box>
      </Box>
    </motion.div>
  );
}

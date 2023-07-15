import { Box, Grid, Heading } from '@chakra-ui/react';
import React from 'react';
import Nav from '../../nav/navfun/nav';
import { motion } from 'framer-motion';
import ReactPlayer from 'react-player/youtube';
import { videos } from './videos';
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
          {videos.map(video => (
            <ReactPlayer url={video} />
          ))}
        </Box>
      </Box>
    </motion.div>
  );
}

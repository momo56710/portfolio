import { Box, Grid, Heading } from '@chakra-ui/react';
import React from 'react';
import Nav from '../../nav/navfun/nav';
import { motion } from 'framer-motion';
import websites from './comp/wbsites';
import Card from './comp/Card';
export default function WebDev() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.75, ease: 'easeOut' }}
    >
      <Nav />
      <Box ml={'3em'}>
        <Box maxW={'1500px'} mx={'auto'} mt={'7em'}>
          {' '}
          <Heading textAlign={'center'}>Websites i create</Heading>
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
            {websites.map(e => {
              return (
                <Card
                  title={e.title}
                  Preview={e.image}
                  description={e.description}
                  link={e.link}
                />
              );
            })}
          </Box>
        </Box>
      </Box>
    </motion.div>
  );
}

import React from 'react';
import { motion } from 'framer-motion';
import Nav from './nav/navfun/nav';
import { Box } from '@chakra-ui/react';
export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.75, ease: 'easeOut' }}
    >
      <Nav/>
      <Box h={'300vh'}></Box>
    </motion.div>
  );
}

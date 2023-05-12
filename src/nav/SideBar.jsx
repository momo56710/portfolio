import { Box, useColorModeValue, Grid } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import React from 'react';
import { FaBehance, FaEnvelope, FaGithub } from 'react-icons/fa';
export default function SideBar() {
  return (
    <Box
      top={0}
      position={'fixed'}
      display={{ base: 'none', md: 'grid' }}
      mt={'3em'}
      w={'5em'}
      placeItems={'center'}
    >
      <Grid gap={'2em'} placeItems={'center'}>
        <Box
          w={'5px'}
          h={'25vh'}
          borderRadius={'20em'}
          bg={useColorModeValue('#E5E4F1', '#131B52')}
          opacity={'0.5'}
        ></Box>
        <Grid gap={'2em'}>
          <motion.div
            initial={{ opacity: 0.5 }}
            whileHover={{ scale: 1.1, opacity: 1 }}
            whileTap={{ scale: 0.9 }}
            style={{ cursor: 'pointer' }}
          >
            <Box _hover={{ color: useColorModeValue('#5EBBC3', '#131B52') }}>
              <FaGithub fontSize={'2em'} />
            </Box>
          </motion.div>
          <motion.div
            initial={{ opacity: 0.5 }}
            whileHover={{ scale: 1.1, opacity: 1 }}
            whileTap={{ scale: 0.9 }}
            style={{ cursor: 'pointer' }}
          >
            <Box _hover={{ color: useColorModeValue('#5EBBC3', '#131B52') }}>
              <FaEnvelope fontSize={'2em'} />
            </Box>
          </motion.div>
          <motion.div
            initial={{ opacity: 0.5 }}
            whileHover={{ scale: 1.1, opacity: 1 }}
            whileTap={{ scale: 0.9 }}
            style={{ cursor: 'pointer' }}
          >
            <Box _hover={{ color: useColorModeValue('#5EBBC3', '#131B52') }}>
              <FaBehance
                fontSize={'2em'}
              />
            </Box>
          </motion.div>
        </Grid>
      </Grid>
    </Box>
  );
}

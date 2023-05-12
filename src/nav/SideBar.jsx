import { Box, useColorModeValue, Grid } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import React from 'react';
import { FaFacebook, FaInstagram, FaDiscord } from 'react-icons/fa';
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
              <a
                href="https://discordapp.com/users/731554886566674442"
                target="_blank"
              >
                <FaDiscord fontSize={'2em'} />
              </a>
            </Box>
          </motion.div>
          <motion.div
            initial={{ opacity: 0.5 }}
            whileHover={{ scale: 1.1, opacity: 1 }}
            whileTap={{ scale: 0.9 }}
            style={{ cursor: 'pointer' }}
          >
            <Box _hover={{ color: useColorModeValue('#5EBBC3', '#131B52') }}>
              <a href="https://www.instagram.com/momo_56710/" target="_blank">
                <FaInstagram fontSize={'2em'} />
              </a>
            </Box>
          </motion.div>
          <motion.div
            initial={{ opacity: 0.5 }}
            whileHover={{ scale: 1.1, opacity: 1 }}
            whileTap={{ scale: 0.9 }}
            style={{ cursor: 'pointer' }}
          >
            <Box _hover={{ color: useColorModeValue('#5EBBC3', '#131B52') }}>
              <a href="https://www.facebook.com/2003amine" target="_blank">
                <FaFacebook fontSize={'2em'} />
              </a>
            </Box>
          </motion.div>
        </Grid>
      </Grid>
    </Box>
  );
}

import {
  Box,
  Heading,
  Grid,
  Button,
  useColorModeValue,
  background,
  useTimeout,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import React from 'react';
export default function Hello() {
  const navigate = useNavigate();
  return (
    <motion.div
    initial ={{opacity : 0}}
    animate ={{opacity : 1}}
    transition={{duration : 0.75, ease :"easeOut"}}
    >
      <Box display={'grid'} placeItems={'center'} h={'100vh'}>
        <Grid gap={'2em'} placeItems={'center'}>
          <Grid placeItems={'center'}>
            <Heading
              className="animate__animated animate__fadeInDown"
              fontSize={'3em'}
            >
              Hello
            </Heading>
            <Heading
              className="animate__animated animate__fadeInUp"
              fontSize={'3em'}
            >
              Welcome to my profile
            </Heading>
          </Grid>
          <motion.div
            className="animate__animated animate__fadeIn"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            style={{ cursor: 'pointer' }}
          >
            <Button
              padding={'1em'}
              fontSize={'2em'}
              bg={useColorModeValue('#131B42', '#E5E4F1')}
              color={useColorModeValue('#E5E4F1', '#131B42')}
              _hover={{}}
              onClick={() => {
                navigate('/home');
              }}
            >
              {' '}
              Get Started
            </Button>
          </motion.div>
        </Grid>
      </Box>
    </motion.div>
  );
}

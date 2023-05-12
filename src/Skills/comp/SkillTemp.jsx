import { Box, Grid, useColorModeValue, Text, border } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import React from 'react';
export default function SkillTemp({ skill, progress }) {
  return (
    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 1 }}>
      <Grid
        placeItems={'center'}
        opacity={useColorModeValue('0.5', '1')}
        cursor={'pointer'}
        _hover={{
            opacity : 1,
          '.text': {
            color: useColorModeValue('#5EBBC3', '#131B52'),
          },
          '.progress' : {
            bg : useColorModeValue('#5EBBC3', '#131B52'),
          },
          '.border' : {
            border : `1px solid ${ useColorModeValue('#5EBBC3', '#131B52')}`
          }
        }}
      >
        <Text
          className="text"
          textAlign={'center'}
          color={useColorModeValue('white', '#131B52')}
          fontSize={'2em'}
          fontWeight={'bold'}
        >
          {skill}
        </Text>
        <Box
        className='border'
          width={'10em'}
          height={'10px'}
          overflow={'hidden'}
          border={`1px solid ${useColorModeValue('white', '#131B52')}`}
          borderRadius={'10em'}
        >
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: progress }}
            transition={{ duration: 0.75, ease: 'easeIn' }}
          >
            <Box
              className="progress"
              width={'100%'}
              height={'10px'}
              background={useColorModeValue('white', '#131B52')}
            ></Box>
          </motion.div>
        </Box>
        <Text
          className="text"
          mt={'0.5em'}
          textAlign={'center'}
          color={useColorModeValue('white', '#131B52')}
          fontSize={'1.3em'}
          fontWeight={'bold'}
        >
          {progress}
        </Text>
      </Grid>
    </motion.div>
  );
}

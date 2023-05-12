import { Box,Button, Grid, Heading, useColorModeValue } from '@chakra-ui/react';
import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function CommingSoon() {
  const navigate = useNavigate();
  return (
    <Grid h={'100vh'} placeItems={'center'}>
      <Box>
        <Heading textAlign={'center'} pb={'1em'}>Coming Soon</Heading>
        <Button
          padding={'1em'}
          fontSize={'2em'}
          bg={useColorModeValue('#131B42', '#d9d7ea')}
          color={useColorModeValue('#E5E4F1', '#131B42')}
          _hover={{}}
          onClick={() => {
            navigate('/home');
          }}
        >
          {' '}
          Go back Home
        </Button>
      </Box>
    </Grid>
  );
}

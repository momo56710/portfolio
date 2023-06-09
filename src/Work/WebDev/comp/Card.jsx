import {
  Heading,
  Box,
  Text,
  Image,
  Button,
  Grid,
  useColorModeValue,
} from '@chakra-ui/react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
export default function Card({ Preview, title, description, link }) {
  const buttonScheme = useColorModeValue('#5EBBC3', '#131B52');
  const buttonTextColor = useColorModeValue('#131B52', '#5EBBC3');
  const navigate = useNavigate();
  const [isOpen, steIsOpen] = useState(false);
  return (
    <Box display={'grid'} placeItems={'center'}>
      <motion.div
        whileHover={{ scale: 1.1 }}
        onClick={() => {
          steIsOpen(!isOpen);
        }}
        layout
      >
        <Box
          w={{ base: '90%', sm: '350px' }}
          bg={useColorModeValue('#0c1338', '#51a1a8')}
          margin={'auto'}
          gap={'2em'}
          boxShadow={'2xl'}
          rounded={'lg'}
          color={useColorModeValue('white', '#131B52')}
          p={6}
          _hover={{
            cursor: 'pointer',
          }}
        >
          <Box>
            <Image src={Preview} /> <br />
            <Heading fontSize={'2xl'} fontFamily={'body'}>
              {title}
            </Heading>
            <Grid gap={'2em'}>
              <motion.div>{description}</motion.div>
              <motion.div>
                <Box textAlign={'center'}>
                  <a href={link} target="_blank">
                    {' '}
                    <Button background={buttonScheme} color={buttonTextColor}>
                      Take a Look
                    </Button>
                  </a>
                </Box>
              </motion.div>
            </Grid>
          </Box>
        </Box>
      </motion.div>
    </Box>
  );
}

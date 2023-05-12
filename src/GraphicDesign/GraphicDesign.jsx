import React from 'react'
import { motion } from 'framer-motion'
import Nav from '../nav/navfun/nav'
import { Box, Grid, Heading } from '@chakra-ui/react'
export default function GraphicDesign() {
  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.75, ease: 'easeOut' }}
  >
    <Nav />
    <Box px={'2em'} maxW={'1500px'} margin={'auto'} mt={'7em'}>
      <Grid placeItems={'center'}>
      <Heading textAlign={'center'} cursor={'pointer'}>
            My designs
          </Heading>
        </Grid>
        </Box>
        </motion.div>
  )
}

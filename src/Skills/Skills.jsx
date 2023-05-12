import React from 'react';
import Nav from '../nav/navfun/nav';
import { motion } from 'framer-motion';
import { Box, Grid, Heading } from '@chakra-ui/react';
import SkillTemp from './comp/SkillTemp';
import programingLanguages from './comp/programingLanguages';
import Softwares from './comp/Softwares';
import SoftSkills from './comp/SoftSkills';
export default function Skills() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.75, ease: 'easeOut' }}
    >
      <Grid placeItems={'center'}>
        <Nav />
        <Box
          maxW={'1500px'}
          mt={'7em'}
          ml={{ base: '0', md: '5em' }}
        >
          <Heading textAlign={'center'} m={'2em'} cursor={'pointer'}>
            Programming Languages And developing related
          </Heading>

          <Box
            display={{ base: 'flex', lg: 'Grid' }}
            gridTemplateColumns={'repeat(4,1fr)'}
            gap={'3em'}
            justifyContent={'space-around'}
            flexWrap={'wrap'}
          >
            {programingLanguages.map(e => {
              return <SkillTemp skill={e.skill} progress={e.progress} />;
            })}
          </Box>
        </Box>
        <Box
       
          maxW={'1500px'}
          ml={{ base: '0', md: '5em' }}
        >
          <Heading textAlign={'center'} m={'2em'} cursor={'pointer'}>
            Software
          </Heading>

          <Box
            display={{ base: 'flex', md: 'Grid' }}
            gridTemplateColumns={'repeat(4,1fr)'}
            gap={'3em'}
            justifyContent={'space-around'}
            flexWrap={'wrap'}
          >
            {Softwares.map(e => {
              return <SkillTemp skill={e.skill} progress={e.progress} />;
            })}
          </Box>
        </Box>
        <Box
    
          maxW={'1500px'}
          pb={'4em'}
          ml={{ base: '0', md: '5em' }}
        >
          <Heading textAlign={'center'} m={'2em'} cursor={'pointer'}>
            Soft Skills
          </Heading>

          <Box
            display={{ base: 'flex', md: 'Grid' }}
            gridTemplateColumns={'repeat(4,1fr)'}
            gap={'3em'}
            justifyContent={'space-around'}
            flexWrap={'wrap'}
          >
            {SoftSkills.map(e => {
              return <SkillTemp skill={e.skill} progress={e.progress} />;
            })}
          </Box>
        </Box>
      </Grid>
    </motion.div>
  );
}

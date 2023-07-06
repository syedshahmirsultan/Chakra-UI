'use client';
import Pricing from './pricing/page';
import {Text,Stack,Box} from '@chakra-ui/react'
import Features from './Components/page';
export default function Page(){
  return(
    <Box className="box">
    <Box className='box1'>
    <Text as='h1' className='heading'>Simple pricing for your business</Text>
    <Text as="h2" className="text">Plans that are carefully crafted to suit your business.</Text>
    </Box>
    <Pricing/><Features/></Box>
  )
}
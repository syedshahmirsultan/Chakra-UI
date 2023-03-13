'use client';
import React from 'react';
import { Box,Text,Heading,Button,Stack,HStack,Icon,StackProps} from '@chakra-ui/react';
import { CheckIcon } from '../Icons/icons';
export const ListItem=(props: StackProps) =>{
    const { children, ...rest } = props;
return(
    <HStack {...rest}>
    <Icon as={CheckIcon} w='22px' h='22px' />
    <Text fontSize={'24px'}>{children}</Text>
    </HStack>
)
}
function Pricing() {
  return (
    <Box className='pricing1' boxShadow='0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04)'><HStack>
    <Box className='subbox'>
    <Heading className="pre">Premium PRO</Heading>
    <Heading className="price">$329</Heading>
    <Text className='text1'>billed just once</Text>
    <Button className="button1" ml={'50px'} mt={'20px'}>Get Started</Button>
    </Box>
    <Box className="box2">
    <Text className="text3">Access these features when you get this pricing package for your business.</Text>
     <Stack as='ul' mt={'30px'}>
    <ListItem className='l01'>International calling and messaging API</ListItem>
    <ListItem className="l1">Additional phone numbers</ListItem>
    <ListItem className="l1">Automated messages via Zapier</ListItem>
    <ListItem className="l1">24/7 support and consulting</ListItem>
     </Stack>
     </Box>
   </HStack> </Box>
  )
}

export default Pricing;
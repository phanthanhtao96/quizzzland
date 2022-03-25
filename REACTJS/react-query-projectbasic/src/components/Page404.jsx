import { HStack, PinInput, PinInputField, Stack } from '@chakra-ui/react'
import React from 'react'

function Page404() {
  return (

    <Stack align='center' p='100px' bg='blue.300'>

      <HStack>
        <PinInput size='lg' defaultValue='404'>
          <PinInputField />
          <PinInputField />
          <PinInputField />
        </PinInput>
      </HStack>

      <HStack>
        <PinInput size='md' defaultValue='PAGE'>
          <PinInputField />
          <PinInputField />
          <PinInputField />
          <PinInputField />
        </PinInput>
      </HStack>

    </Stack>
    
  )
}

export default Page404
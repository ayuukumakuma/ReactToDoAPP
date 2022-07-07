import { Box, Text } from '@chakra-ui/react'

export const Title = () => {
  return (
    <Box display={'flex'} justifyContent={'center'} pt={'6'}>
      <Text fontSize={'4xl'} pos={'absolute'}>
        Ayuu's ToDo List
      </Text>
    </Box>
  )
}

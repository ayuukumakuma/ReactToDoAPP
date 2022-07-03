import { Box } from '@chakra-ui/react'

export const BackGround = () => {
  return (
    <Box
      bg={'gray.100'}
      w={'100vw'}
      h={'100vh'}
      display={'flex'}
      alignItems={'center'}
      justifyContent={'center'}
    >
      <Box
        w={'96vw'}
        h={'96vh'}
        pos={'fixed'}
        bg={'white'}
        borderRadius={'3xl'}
      />
    </Box>
  )
}

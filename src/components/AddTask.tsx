import { Box, Button, Input } from '@chakra-ui/react'
import { MdAdd } from 'react-icons/md'

export const AddTask = () => {
  return (
    <Box display={'flex'} justifyContent={'center'} pt={'7.5vh'}>
      <Input
        placeholder={'Please enter a task.'}
        size={'lg'}
        variant={'outline'}
        w={'60vw'}
        rounded={'xl'}
        mr={'2'}
      ></Input>
      <Button size={'lg'} rounded={'xl'} leftIcon={<MdAdd />}>
        Add
      </Button>
    </Box>
  )
}

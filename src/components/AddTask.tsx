import { Button, Input, InputGroup, InputRightElement } from '@chakra-ui/react'

export const AddTask = () => {
  return (
    <InputGroup pos={`absolute`}>
      <Input></Input>
      <InputRightElement>
        <Button></Button>
      </InputRightElement>
    </InputGroup>
  )
}

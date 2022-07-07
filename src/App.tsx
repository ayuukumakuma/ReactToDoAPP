import { Box } from '@chakra-ui/react'
import { RecoilRoot } from 'recoil'
import { AddTask } from './components/AddTask'
import { Title } from './components/Title'

function App() {
  return (
    <Box bg={'gray.100'} w={'100vw'} h={'100vh'} pos={'relative'}>
      <RecoilRoot>
        <Box
          m={'auto'}
          w={'96vw'}
          h={'96vh'}
          pos={'fixed'}
          top={'50%'}
          left={'50%'}
          sx={{ transform: 'translate(-50%, -50%)' }}
          bg={'white'}
          borderRadius={'3xl'}
        />
        <Title />
        <AddTask />
      </RecoilRoot>
    </Box>
  )
}
export default App

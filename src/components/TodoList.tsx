import { Box } from '@chakra-ui/react'
import { useRecoilValue } from 'recoil'
import { todoListState } from '../recoil/atom'
import { todoListStatsState } from '../recoil/selector'

export const TodoList = () => {
  const todoList = useRecoilValue(todoListState)
  const totalNum = useRecoilValue(todoListStatsState)

  return (
    <Box pos={'absolute'} mx={'4'}>
      <Box>Todo: {totalNum}</Box>
      {todoList.map((item) => (
        <Box key={item.id}>{item.title}</Box>
      ))}
    </Box>
  )
}

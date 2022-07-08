import { Box, ListItem, UnorderedList } from '@chakra-ui/react'
import { useRecoilValue } from 'recoil'
import { searchedTodoListSelector } from '../selectors/SearchedTodoListSelector'
import { Todo } from '../types/Todo'

export const TodoList = () => {
  const list: Todo[] = useRecoilValue(searchedTodoListSelector)
  return (
    <Box pos={'relative'} display={'flex'} justifyContent={'center'} mt={'4'}>
      <UnorderedList>
        {list.map((todo: Todo, i: number) => {
          return <ListItem key={`${todo.title}_${i}`}>{todo.title}</ListItem>
        })}
      </UnorderedList>
    </Box>
  )
}

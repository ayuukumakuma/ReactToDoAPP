import { Box, Button, Input } from '@chakra-ui/react'
import { todoListState } from '../atoms/TodoListAtom'
import { todoTitleFormState } from '../atoms/TodoTitleFromAtom'
import { ChangeEvent, useCallback } from 'react'
import { MdAdd } from 'react-icons/md'
import { SetterOrUpdater, useRecoilValue, useSetRecoilState } from 'recoil'
import { Todo } from '../types/Todo'

export const AddTask = () => {
  const todoList: Todo[] = useRecoilValue(todoListState)
  const setTodoList: SetterOrUpdater<Todo[]> = useSetRecoilState(todoListState)
  const setTitleFormValue: SetterOrUpdater<string> =
    useSetRecoilState(todoTitleFormState)
  const todoTitleFormValue: string = useRecoilValue(todoTitleFormState)
  const setTodoTitleFormValue: SetterOrUpdater<string> =
    useSetRecoilState(todoTitleFormState)

  const handleOnChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setTodoTitleFormValue(e.target.value)
    },
    [setTodoTitleFormValue],
  )
  const handleOnClick = useCallback(() => {
    setTodoList([...todoList, { title: todoTitleFormValue }])
    setTitleFormValue('')
  }, [todoList, todoTitleFormValue, setTodoList, setTitleFormValue])
  return (
    <Box display={'flex'} justifyContent={'center'} pt={'7.5vh'}>
      <Input
        placeholder={'Please enter a task.'}
        size={'lg'}
        variant={'outline'}
        w={'55vw'}
        rounded={'xl'}
        mr={'2'}
        value={todoTitleFormValue}
        onChange={handleOnChange}
      ></Input>
      <Button
        size={'lg'}
        rounded={'xl'}
        leftIcon={<MdAdd />}
        sx={{ width: 'calc(25vw - 8px)' }}
        onClick={handleOnClick}
      >
        Add
      </Button>
    </Box>
  )
}

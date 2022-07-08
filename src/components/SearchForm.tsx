import { Box, Input } from '@chakra-ui/react'
import { searchTextFormState } from '../atoms/SearchTextFormAtom'
import { ChangeEvent, useCallback } from 'react'
import {
  useRecoilValue,
  useSetRecoilState,
  SetterOrUpdater,
} from 'recoil'

export const SearchForm = () => {
  const searchTextFormValue: string = useRecoilValue(searchTextFormState)
  const setSearchTextFormValue: SetterOrUpdater<string> =
    useSetRecoilState(searchTextFormState)

  const handleOnChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setSearchTextFormValue(e.target.value)
    },
    [setSearchTextFormValue],
  )

  return (
    <Box display={'flex'} justifyContent={'center'}>
      <Input
        placeholder={'Search word.'}
        size={'lg'}
        variant={'outline'}
        w={'80vw'}
        rounded={'xl'}
        mt={'4'}
        onChange={handleOnChange}
        value={searchTextFormValue}
      ></Input>
    </Box>
  )
}

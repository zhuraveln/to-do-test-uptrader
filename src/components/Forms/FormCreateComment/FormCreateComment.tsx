import React from 'react'

import { useAppDispatch } from '../../../hooks/useAppDispatch'
import { useFormData } from '../../../hooks/useFormData'

import { Button, Form, TextField } from '../..'

import { CreateCommentFormFields, IFormCreateCommentProps } from './types'
import { Comment } from './newComment'
import { CommentItem } from '../FormCreateBoard/types'
import { createNewComment } from '../../../redux/board/actions'

export const FormCreateComment: React.FC<IFormCreateCommentProps> = props => {
  const dispatch = useAppDispatch()

  const { parentId, setVisibleInput } = props // get values from props

  // Custom Hook for collection all values from form fields
  const { values, handleChange, handleSubmit } = useFormData({
    body: '' // initial values for hook
  })

  // Handler for submit form
  const onSubmit = (data: CreateCommentFormFields) => {
    const newComment: CommentItem = new Comment(data, parentId) // create new Comment object
    dispatch(createNewComment(newComment)) // create Comment in Redux state
    setVisibleInput(prev => !prev) // hide input for create new Comment in Task component
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)} style={{ flexDirection: 'row' }}>
      {/* Input for title Comment */}
      <TextField
        required
        value={values.body}
        onChange={handleChange}
        type='text'
        name='body'
        placeholder={'comment'}
      />

      {/* Button for create new Comment */}
      <Button type={'submit'}>+</Button>
    </Form>
  )
}

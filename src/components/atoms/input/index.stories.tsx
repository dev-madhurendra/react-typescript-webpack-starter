import React from 'react'
import { StoryFn, Meta } from '@storybook/react'
import Input from '.'

export default {
  title: 'Atoms/Input',
  component: Input,
} as Meta
const Template1: StoryFn<typeof Input> = () => (
    <Input placeholder='input'/>
)

export const InputComp = Template1.bind({})
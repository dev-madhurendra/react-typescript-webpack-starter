import { Meta, StoryFn } from "@storybook/react";
import Dropdown from ".";

export default{
    title:"atoms/dropdown",
    component:Dropdown
} as Meta;

const Template:StoryFn<typeof Dropdown>=(args)=>(<Dropdown {...args}/>)

const arr = [{
    id: 1,
    name: "Add",
    value: "Add"
}, {
    id: 2,
    name: "Edit",
    value: "Edit"
}]

export const CustomDropdown=Template.bind({});
CustomDropdown.args={
    handleSelect:(event:any)=>{},
    label:'select below',
    options:arr,
}

import { Meta, StoryFn } from "@storybook/react";
import Button from ".";
import { KeyboardArrowDown} from '@mui/icons-material';
export default {
    title:'atoms/button',
    component:Button,
    argTypes:{
        variant: {
            options: ["text", "outlined", "contained"],
            control: { type: "radio" },
          },
          children: {
            control: { type: "text" },
          },
          onClick: { action: "clicked" },
    }
} as Meta;

const Template:StoryFn<typeof Button>=(args)=><Button {...args}/> 
export const Default=Template.bind({})
Default.args={
    variant:'contained',
    textVariant:'b2',
    children:'Hello',
    startIcon:<KeyboardArrowDown/>,
    buttonstyles:{
        opacity:  "1" ,
        display: "flex",
        alignItems: "center",
        textAlign: "center",
        textTransform: "capitalize",
        backgroundColor:'green',
    },
    typograpystyles:{
       
    }
    
}

export const EndIcon=Template.bind({})
EndIcon.args={
    variant:'contained',
    textVariant:'b2',
    children:'Hello',
    endIcon:<KeyboardArrowDown/>,
    buttonstyles:{
        opacity:  "1" ,
        display: "flex",
        alignItems: "center",
        textAlign: "center",
        textTransform: "capitalize",
        backgroundColor:'green',
    },
    typograpystyles:{
       
    }
    
}

export const NormalButton=Template.bind({})
NormalButton.args={
    variant:'contained',
    textVariant:'b2',
    children:'Hello',
    buttonstyles:{
        opacity:  "1" ,
        display: "flex",
        alignItems: "center",
        textAlign: "center",
        textTransform: "capitalize",
        backgroundColor:'green',
    },
    typograpystyles:{
       
    }
    
}
import {StoryFn, Meta} from "@storybook/react";
import Template from ".";

import { Grid, styled } from "@mui/material";
import HeaderBar from "../../organisms/HeaderBar";

export default {
    title:'Templates/Template',
    component:Template,
} as Meta;



const Temp:StoryFn = (args) => <Template {...args}/>;

export const Default = Temp.bind({});
Default.args = {
    header:<HeaderBar/>,
    navbar:<Grid sx={{background:"silver", padding: "8px 40px 8px 40px",}}><h4>Navbar</h4></Grid>,
    body:<Grid sx={{background:"#F6F8FA", padding: "8rem 40px 8rem 40px",}}><h4>Body</h4></Grid>      
}
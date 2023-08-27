import {StoryFn, Meta} from "@storybook/react";
import TitleBar from ".";
import { Grid } from "@mui/material";

export default {
  title: "Organisms/Titlebar",
  component: TitleBar,
} as Meta;

const Template: StoryFn<typeof TitleBar> = (args) => (
  <TitleBar {...args}/>
);

export const Default = Template.bind({});
Default.args = {
  popUpBox : <Grid sx={{background:"white",width: "480px", border:"1px solid silver",
  height: "574px"}}></Grid>
}


import {StoryFn, Meta} from "@storybook/react";
import TypographyComponent from ".";
import theme from "../../../theme";


export default {
  title: "Atoms/Typography",
  component: TypographyComponent,
  argTypes: {
    variant: {
        options: ["h4", "h6", "subtitle1", "subtitle2", "b1", "b2", "c1", "c2","button","overline"],
        control: {type:"select"}
    },
    children: {
      control: "text",
    },
    styles: {
      control: "object",
    },
  },
} as Meta;

const Template: StoryFn<typeof TypographyComponent> = (args) => (
  <TypographyComponent {...args} />
);

export const Default= Template.bind({});
Default.args = {
  variant: "h4",
  children: "Dashboard",
};

export const TypographyWithStyles = Template.bind({});
TypographyWithStyles.args = {
  variant: "subtitle1",
  children:"Watchlist",
  styles: {
    color:theme.palette.text.highemp
  }
}


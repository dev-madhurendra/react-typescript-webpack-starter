import {StoryFn, Meta} from "@storybook/react";
import HeaderBar from ".";


export default {
  title: "Molecules/HeaderBar",
  component: HeaderBar,
} as Meta;

const Template: StoryFn<typeof HeaderBar> = () => (
  <HeaderBar  />
);

export const Default= Template.bind({});

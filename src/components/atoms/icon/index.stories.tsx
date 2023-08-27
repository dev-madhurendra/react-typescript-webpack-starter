import {StoryFn,Meta} from "@storybook/react";
import IconComp from ".";
import ChevronDownIcon from "../../../assets/icons/Chevron-down.svg";
import DownloadIcon from "../../../assets/icons/Download.svg";
import FilterIcon from "../../../assets/icons/Filter.svg";
import MoreIcon from "../../../assets/icons/More.svg";
import SearchIcon from "../../../assets/icons/Search.svg";
import UserIcon from "../../../assets/icons/User.svg";

export default {
    title: "Atoms/Icon",
    component: IconComp,
    argTypes: {
        imgSource: {
            control : "text"
        },
        imgText:{
            control: "text"
        },
        width: {
            control:"number"
        },
        height:{
            control:"number"
        }
    }
} as Meta;

const Template: StoryFn<typeof IconComp>  = (args) => (
    <IconComp {...args} />
)

export const ChevronDown = Template.bind({});
ChevronDown.args = {
    imgSource:ChevronDownIcon,
    imgText:"ChevronDown icon"
}

export const Download = Template.bind({});
Download.args = {
    imgSource:DownloadIcon,
    imgText:"Downlaod icon"
}

export const Filter = Template.bind({});
Filter.args = {
    imgSource:FilterIcon,
    imgText:"Filter icon"
}

export const More = Template.bind({});
More.args = {
    imgSource:MoreIcon,
    imgText:"Moreicon"
}

export const Search = Template.bind({});
Search.args = {
    imgSource:SearchIcon,
    imgText:"Searchicon"
}

export const User = Template.bind({});
User.args = {
    imgSource:UserIcon,
    imgText:"User icon"
}
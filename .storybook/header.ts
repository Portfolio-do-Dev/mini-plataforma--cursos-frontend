import Header from "../components/header.tsx";

const meta = {
  title: "Components/Header",
  component: Header,
};

export default meta;

function Template() {
  return {
    type: "div",
    props: {
      className: "w-full h-[300px] bg-gray-950",
      children: Header(),
    },
  };
}

export const Default = Template.bind({});
Default.args = {};

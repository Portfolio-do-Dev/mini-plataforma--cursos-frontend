import Header from "../components/header.js";

const meta = {
  title: "Components/Header",
  component: Header,
};

export default meta;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function Template(_args: Record<string, never>) {
  return {
    type: "div",
    props: {
      className: "w-full h-[300px] bg-gray-950",
      children: Header(),
    },
  };
}

export const Default = Template.bind({}) as typeof Template & { args: Record<string, never> };
Default.args = {};

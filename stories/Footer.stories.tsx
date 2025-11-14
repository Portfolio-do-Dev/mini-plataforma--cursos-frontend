import Footer from "../components/footer.js";

const meta = {
  title: "Components/Footer",
  component: Footer,
};

export default meta;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function Template(_args: Record<string, never>) {
  return {
    // Representação sem JSX  
    type: "div",
    props: {
      className: "p-4 text-center text-sm text-gray-500",
      children: Footer(),
    },
  };
}

export const Default = Template.bind({}) as typeof Template & { args: Record<string, never> };
Default.args = {};

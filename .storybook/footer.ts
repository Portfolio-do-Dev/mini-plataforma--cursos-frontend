import Footer from "../components/footer.tsx";

const meta = {
  title: "Components/Footer",
  component: Footer,
};

export default meta;

function Template() {
  return {
    // Representação sem JSX  
    type: "div",
    props: {
      className: "p-4 text-center text-sm text-gray-500",
      children: Footer(),
    },
  };
}

export const Default = Template.bind({});
Default.args = {};

// Footer.stories.tsx
import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import Footer from '../components/footer';

const meta: Meta<typeof Footer> = {
  title: 'Components/Footer',
  component: Footer,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  render: () => (
    <div className="p-4 text-center text-sm text-gray-500">
      <Footer />
    </div>
  ),
};

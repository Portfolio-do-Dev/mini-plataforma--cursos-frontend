// Header.stories.tsx
import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import Header from '../components/header';

const meta: Meta<typeof Header> = {
  title: 'Components/Header',
  component: Header,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  render: () => (
    <div className="w-full h-[300px] bg-gray-950">
      <Header />
    </div>
  ),
};

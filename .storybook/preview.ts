import type { Preview } from '@storybook/nextjs-vite'
import { themes } from 'storybook/theming';

import { MINIMAL_VIEWPORTS } from 'storybook/viewport'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
      expanded: true,
      sort: 'requiredFirst',
    },

    a11y: {
      test: 'todo', // 'todo', 'error', or 'off'
      config: {
        rules: [
          {
            id: 'color-contrast',
            enabled: true,
          },
          {
            id: 'aria-allowed-attr',
            enabled: true,
          },
          {
            id: 'aria-required-attr',
            enabled: true,
          },
          {
            id: 'button-name',
            enabled: true,
          },
          {
            id: 'image-alt',
            enabled: true,
          },
        ],
      },
    },
    docs: {
      theme: themes.dark,
    },

    viewport: {
      options: MINIMAL_VIEWPORTS,
    },
    initialGlobals: {
      viewport: { value: 'tablet', isRotated: false },
    }
  },
};

export default preview;
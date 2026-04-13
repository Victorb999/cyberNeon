import type { Preview } from "@storybook/react";
import "../src/index.css";

const preview: Preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
        backgrounds: {
            default: 'cyber-dark',
            values: [
                {
                    name: 'cyber-dark',
                    value: '#040f1d',
                },
            ],
        },
    },
};

export default preview;

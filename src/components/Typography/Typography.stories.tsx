import type { Meta, StoryObj } from '@storybook/react';
import { Heading } from './Heading';
import { Text } from './Text';
import React from 'react';

const meta: Meta = {
    title: 'Core/Typography',
};

export default meta;

export const HeadingScale = () => (
    <div className="space-y-8 p-8 bg-background min-h-screen">
        <Heading level="display">Display Large</Heading>
        <Heading level="h1">Heading 1</Heading>
        <Heading level="h2">Heading 2</Heading>
        <Heading level="h3">Heading 3</Heading>
        <Heading level="h4">Heading 4</Heading>

        <div className="pt-12 space-y-4">
            <Heading level="h2" intent="primary">Primary Intent</Heading>
            <Heading level="h2" intent="secondary">Secondary Intent</Heading>
            <Heading level="h2" intent="muted">Muted Intent</Heading>
        </div>
    </div>
);

export const TextScale = () => (
    <div className="space-y-8 p-8 bg-background min-h-screen">
        <div className="space-y-2">
            <Text variant="lead">Lead Text: High-fidelity tactical interface components optimized for real-time monitoring.</Text>
            <Text variant="body">Body Text: The kinetic edge design system represents the convergence of high-fidelity brutalism and functional minimalism. Each character is rendered with pixel-perfect precision.</Text>
        </div>

        <div className="space-y-4 pt-12">
            <div className="flex flex-col gap-1">
                <Text variant="label">System Label</Text>
                <Text variant="mono">TX_ID: 8849-001-X99</Text>
            </div>
            <Text variant="caption">Caption: v1.0.4 Terminal Protocol</Text>
        </div>

        <div className="pt-12 space-y-2">
            <Text variant="body" intent="primary">Primary text color</Text>
            <Text variant="body" intent="secondary">Secondary text color</Text>
            <Text variant="body" intent="error">Error text color</Text>
            <Text variant="body" intent="muted">Muted text color</Text>
        </div>
    </div>
);

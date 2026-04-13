import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';
import { LucideTerminal } from 'lucide-react';
import React from 'react';

const meta: Meta<typeof Button> = {
    title: 'Tactical/Button',
    component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
    args: {
        variant: 'primary',
        children: 'Initiate Link',
    },
};

export const Secondary: Story = {
    args: {
        variant: 'secondary',
        children: 'System Diagnostics',
    },
};

export const Ghost: Story = {
    args: {
        variant: 'ghost',
        children: 'Abort Trace',
    },
};

export const Tertiary: Story = {
    args: {
        variant: 'tertiary',
        children: 'Data Port 01',
    },
};

export const WithIcon: Story = {
    args: {
        variant: 'primary',
        children: (
            <span className="flex items-center gap-2">
                <LucideTerminal size={16} />
                Execute CLI
            </span>
        ),
    },
};

export const AllVariants = () => (
    <div className="flex flex-col gap-8 p-8 bg-background items-start">
        <div className="flex gap-4 items-center">
            <Button variant="primary" size="lg">Primary Large</Button>
            <Button variant="primary">Primary Medium</Button>
            <Button variant="primary" size="sm">Primary Small</Button>
        </div>
        <div className="flex gap-4 items-center">
            <Button variant="secondary" size="lg">Secondary Large</Button>
            <Button variant="secondary">Secondary Medium</Button>
            <Button variant="secondary" size="sm">Secondary Small</Button>
        </div>
        <div className="flex gap-4 items-center">
            <Button variant="tertiary">Tertiary Action</Button>
            <Button variant="ghost">Ghost State</Button>
        </div>
    </div>
);

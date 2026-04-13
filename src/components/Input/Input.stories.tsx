import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';
import React from 'react';

const meta: Meta<typeof Input> = {
    title: 'Forms/Input',
    component: Input,
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
    args: {
        label: 'Terminal ID',
        placeholder: 'Enter secure identifier...',
    },
};

export const Error: Story = {
    args: {
        label: 'Encryption Key',
        placeholder: 'Invalid key detected',
        intent: 'error',
        defaultValue: 'B@D_K3Y_88',
    },
};

export const Disabled: Story = {
    args: {
        label: 'System Override',
        placeholder: 'Operation locked',
        disabled: true,
    },
};

export const AllTypes = () => (
    <div className="flex flex-col gap-8 p-8 bg-background max-w-md">
        <Input label="Text Input" placeholder="Standard text..." />
        <Input label="Password" type="password" placeholder="••••••••" />
        <Input label="Email Address" type="email" placeholder="user@cyberneon.net" />
        <Input label="Error State" intent="error" defaultValue="PROTOCOL_FAILURE" />
    </div>
);

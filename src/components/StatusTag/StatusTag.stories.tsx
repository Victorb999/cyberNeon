import type { Meta, StoryObj } from '@storybook/react';
import { StatusTag } from './StatusTag';
import React from 'react';

const meta: Meta<typeof StatusTag> = {
    title: 'Core/StatusTag',
    component: StatusTag,
};

export default meta;
type Story = StoryObj<typeof StatusTag>;

export const Success: Story = {
    args: {
        status: 'success',
        children: 'PROTOCOL_ACTIVE',
    },
};

export const Error: Story = {
    args: {
        status: 'error',
        children: 'BREACH_DETECTED',
    },
};

export const Warning: Story = {
    args: {
        status: 'warning',
        children: 'NEUTRAL_DRIFT',
    },
};

export const AllVariants = () => (
    <div className="flex flex-wrap gap-4 p-8 bg-background">
        <StatusTag status="success">SUCCESS</StatusTag>
        <StatusTag status="error">ERROR</StatusTag>
        <StatusTag status="warning">WARNING</StatusTag>
        <StatusTag status="info">INFO</StatusTag>
        <StatusTag status="primary">PRIMARY</StatusTag>
    </div>
);

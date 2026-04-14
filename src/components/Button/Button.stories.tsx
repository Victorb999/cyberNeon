import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

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
        cutCorner: true,
    },
};

export const Secondary: Story = {
    args: {
        variant: 'secondary',
        children: 'System Upgrade',
        cutCorner: true,
    },
};

export const Tertiary: Story = {
    args: {
        variant: 'tertiary',
        children: (
            <span className="flex items-center gap-2">
                <span className="opacity-40">//</span> DOWNLOAD_SPEC
            </span>
        ),
        cutCorner: false,
    },
};

export const Ghost: Story = {
    args: {
        variant: 'ghost',
        children: 'Abort Trace',
        cutCorner: false,
    },
};

export const Square: Story = {
    args: {
        variant: 'primary',
        children: 'Static Protocol',
        cutCorner: false,
    },
};

export const AllVariants = () => (
    <div className="flex flex-col gap-8 p-8 bg-background items-start">
        <div className="flex gap-4 items-center">
            <Button variant="primary" cutCorner={true}>Primary Cut</Button>
            <Button variant="primary" cutCorner={false}>Primary Square</Button>
        </div>
        <div className="flex gap-4 items-center">
            <Button variant="secondary" cutCorner={true}>Secondary Cut</Button>
            <Button variant="secondary" cutCorner={false}>Secondary Square</Button>
        </div>
        <div className="flex gap-4 items-center">
            <Button variant="tertiary" cutCorner={true}>Tertiary Cut</Button>
            <Button variant="tertiary" cutCorner={false}>Tertiary Square</Button>
        </div>
        <div className="flex gap-4 items-center">
            <Button variant="ghost">Ghost State</Button>
        </div>
    </div>
);

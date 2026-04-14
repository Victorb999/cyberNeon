import type { Meta, StoryObj } from '@storybook/react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from './Card';
import { Button } from '../Button';

const meta: Meta<typeof Card> = {
    title: 'Layout/Card',
    component: Card,
    argTypes: {
        variant: {
            control: 'select',
            options: ['default', 'secondary'],
        },
        curcorner: {
            control: 'boolean',
        },
        borderTheme: {
            control: 'select',
            options: ['primary', 'secondary', 'success', 'error', 'info', 'warning'],
        },
        borderDirection: {
            control: 'select',
            options: ['none', 'top', 'bottom', 'left', 'right', 'all'],
        },
    },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
    args: {
        curcorner: true,
        borderTheme: 'primary',
        borderDirection: 'left',
        children: (
            <>
                <CardHeader>
                    <CardTitle>System Overview</CardTitle>
                    <CardDescription>Real-time telemetry active.</CardDescription>
                </CardHeader>
                <CardContent>
                    <p className="text-sm font-body">Tactical data stream established. All sensors reporting nominal status.</p>
                </CardContent>
                <CardFooter>
                    <Button size="sm">Details</Button>
                </CardFooter>
            </>
        ),
    },
};

export const Success: Story = {
    args: {
        ...Default.args,
        borderTheme: 'success',
        borderDirection: 'top',
        children: (
            <>
                <CardHeader>
                    <CardTitle>System Success</CardTitle>
                    <CardDescription>All protocols active.</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="bg-success/10 text-success p-2 text-[10px] font-mono">
                        PROTOCOL_ACTIVE_01
                    </div>
                </CardContent>
            </>
        ),
    },
};

export const Breach: Story = {
    args: {
        ...Default.args,
        borderTheme: 'error',
        borderDirection: 'top',
        children: (
            <>
                <CardHeader>
                    <CardTitle className="text-error">Breach Detected</CardTitle>
                    <CardDescription>Security protocols bypassed.</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="bg-error/10 text-error p-2 text-[10px] font-mono">
                        ERROR_CODE_X99
                    </div>
                </CardContent>
            </>
        ),
    },
};

export const Square: Story = {
    args: {
        ...Default.args,
        curcorner: false,
    },
};

export const Secondary: Story = {
    args: {
        ...Default.args,
        variant: 'secondary',
        borderDirection: 'none',
        children: (
            <div className="flex items-center justify-between w-full">
                <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-primary/20 flex items-center justify-center">
                        <span className="text-primary text-xs">🛡️</span>
                    </div>
                    <span className="text-[10px] font-mono tracking-tighter uppercase font-bold text-on-surface-variant">ENCRYPTION_STATUS</span>
                </div>
                <span className="text-[10px] font-mono font-bold text-success uppercase">ACTIVE</span>
            </div>
        ),
    },
};

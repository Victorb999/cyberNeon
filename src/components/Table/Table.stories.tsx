import type { Meta, StoryObj } from '@storybook/react';
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from './Table';

const meta: Meta<typeof Table> = {
    title: 'Data/Table',
    component: Table,
};

export default meta;

export const Default: StoryObj<typeof Table> = {
    render: (args) => (
        <div className="max-w-4xl w-full">
            <Table {...args}>
                <TableHeader>
                    <TableRow>
                        <TableHead>Process</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead className="text-right">Load</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow>
                        <TableCell className="font-medium">kernel_task</TableCell>
                        <TableCell className="text-primary font-bold italic tracking-tighter">RUNNING</TableCell>
                        <TableCell className="text-right font-mono">0.8%</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className="font-medium">synapse_edge</TableCell>
                        <TableCell className="text-secondary opacity-80">PENDING</TableCell>
                        <TableCell className="text-right font-mono text-secondary">0.1%</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className="font-medium">neural_bridge</TableCell>
                        <TableCell className="text-error font-bold">HALTED</TableCell>
                        <TableCell className="text-right font-mono text-error">--</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </div>
    ),
    args: {
        variant: 'default',
        borderTheme: 'primary',
        borderDirection: 'all',
        curcorner: true,
    },
    argTypes: {
        variant: {
            control: 'select',
            options: ['default', 'secondary'],
        },
        borderTheme: {
            control: 'select',
            options: ['primary', 'secondary', 'success', 'error', 'info', 'warning'],
        },
        borderDirection: {
            control: 'select',
            options: ['top', 'bottom', 'left', 'right', 'all', 'none'],
        },
        curcorner: {
            control: 'boolean',
        },
    },
};

export const SecureNode: StoryObj<typeof Table> = {
    render: (args) => (
        <div className="max-w-4xl w-full">
            <Table {...args}>
                <TableHeader>
                    <TableRow>
                        <TableHead>Sector</TableHead>
                        <TableHead>Encryption</TableHead>
                        <TableHead className="text-right">Stability</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow>
                        <TableCell className="font-medium">CORE_STORAGE</TableCell>
                        <TableCell className="text-success">ULTRA_SECURE</TableCell>
                        <TableCell className="text-right font-mono">99.9%</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className="font-medium">COMMS_ARRAY</TableCell>
                        <TableCell className="text-info">ACTIVE</TableCell>
                        <TableCell className="text-right font-mono">84.2%</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </div>
    ),
    args: {
        variant: 'secondary',
        borderTheme: 'success',
        borderDirection: 'top',
        curcorner: true,
    },
};

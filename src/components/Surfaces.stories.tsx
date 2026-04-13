import type { Meta } from '@storybook/react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from './Card';
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from './Tooltip';
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from './Table';
import { Button } from './Button';
import React from 'react';

const meta: Meta = {
    title: 'Layout/Surfaces & Data',
};

export default meta;

export const CardSystem = () => (
    <div className="p-8 bg-background grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card>
            <CardHeader>
                <CardTitle>System Overview</CardTitle>
                <CardDescription>Real-time telemetry from sector 7G.</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="space-y-2">
                    <div className="flex justify-between text-xs font-mono">
                        <span>UPTIME</span>
                        <span className="text-primary">99.98%</span>
                    </div>
                    <div className="w-full bg-surface-container-highest h-1">
                        <div className="bg-primary h-full w-[99%]" />
                    </div>
                </div>
            </CardContent>
            <CardFooter>
                <Button size="sm">Details</Button>
            </CardFooter>
        </Card>

        <Card className="border-secondary/20">
            <CardHeader>
                <CardTitle className="text-secondary">Security Matrix</CardTitle>
                <CardDescription>Encryption layers active.</CardDescription>
            </CardHeader>
            <CardContent>
                <p className="text-sm font-body">No breaches detected in the last 24 cycles. All sentinels reporting nominal status.</p>
            </CardContent>
        </Card>
    </div>
);

export const Tooltips = () => (
    <div className="p-12 bg-background flex gap-8">
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger asChild>
                    <Button variant="secondary">Hover for Info</Button>
                </TooltipTrigger>
                <TooltipContent>
                    <p>Tactical Information Overlay</p>
                </TooltipContent>
            </Tooltip>

            <Tooltip>
                <TooltipTrigger asChild>
                    <Button variant="ghost">Target Port</Button>
                </TooltipTrigger>
                <TooltipContent side="right">
                    <p>PORT_ID: 8080</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    </div>
);

export const DataReadout = () => (
    <div className="p-8 bg-background">
        <Card>
            <Table>
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
                        <TableCell className="text-primary">RUNNING</TableCell>
                        <TableCell className="text-right">0.8%</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className="font-medium">synapse_edge</TableCell>
                        <TableCell className="text-secondary">PENDING</TableCell>
                        <TableCell className="text-right">0.1%</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className="font-medium">neural_bridge</TableCell>
                        <TableCell className="text-error">HALTED</TableCell>
                        <TableCell className="text-right">--</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </Card>
    </div>
);

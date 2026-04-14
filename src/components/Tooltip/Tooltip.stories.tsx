import type { Meta, StoryObj } from '@storybook/react';
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from './Tooltip';
import { Button } from '../Button';
import React from 'react';

const meta: Meta = {
    title: 'Feedback/Tooltip',
};

export default meta;

export const Interactive = () => (
    <div className="p-20 bg-background flex justify-center">
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger asChild>
                    <Button variant="secondary">Target Node</Button>
                </TooltipTrigger>
                <TooltipContent>
                    <p>UDP_PORT: 5050 [SECURE]</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    </div>
);

import type { Meta, StoryObj } from '@storybook/react';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from './Select';
import React from 'react';

const meta: Meta = {
    title: 'Forms/Select',
};

export default meta;

export const Default = () => (
    <div className="p-8 bg-background max-w-sm">
        <label className="font-headline text-[10px] font-bold uppercase tracking-[0.2em] text-on-surface-variant mb-1.5 block">
            Select Database
        </label>
        <Select defaultValue="central">
            <SelectTrigger>
                <SelectValue placeholder="Select a port..." />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="central">Central Core</SelectItem>
                <SelectItem value="north">Northern Uplink</SelectItem>
                <SelectItem value="south">Southern Exchange</SelectItem>
                <SelectItem value="west" disabled>Western Outpost [OFFLINE]</SelectItem>
            </SelectContent>
        </Select>
    </div>
);

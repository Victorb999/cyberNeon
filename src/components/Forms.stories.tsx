import type { Meta } from '@storybook/react';
import { Checkbox } from './Checkbox';
import { Switch } from './Switch';
import { RadioGroup, RadioGroupItem } from './RadioGroup';
import React from 'react';

const meta: Meta = {
    title: 'Forms/Binary & Group Controls',
};

export default meta;

export const BinaryControls = () => (
    <div className="flex flex-col gap-8 p-8 bg-background">
        <div className="flex items-center space-x-2">
            <Checkbox id="terms" />
            <label
                htmlFor="terms"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 font-body uppercase tracking-wider"
            >
                Accept System Terms
            </label>
        </div>

        <div className="flex items-center space-x-2">
            <Switch id="airplane-mode" />
            <label
                htmlFor="airplane-mode"
                className="text-sm font-medium leading-none font-body uppercase tracking-wider"
            >
                Airplane Mode [HUD]
            </label>
        </div>
    </div>
);

export const RadioSelection = () => (
    <div className="p-8 bg-background">
        <RadioGroup defaultValue="comfortable">
            <div className="flex items-center space-x-2">
                <RadioGroupItem value="default" id="r1" />
                <label htmlFor="r1" className="font-body uppercase tracking-wider text-sm">Default Link</label>
            </div>
            <div className="flex items-center space-x-2">
                <RadioGroupItem value="comfortable" id="r2" />
                <label htmlFor="r2" className="font-body uppercase tracking-wider text-sm">Encrypted Connection</label>
            </div>
            <div className="flex items-center space-x-2">
                <RadioGroupItem value="compact" id="r3" />
                <label htmlFor="r3" className="font-body uppercase tracking-wider text-sm">Stealth Protocol</label>
            </div>
        </RadioGroup>
    </div>
);

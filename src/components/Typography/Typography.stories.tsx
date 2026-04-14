import type { Meta, StoryObj } from '@storybook/react';
import { Heading } from './Heading';
import { Text } from './Text';

const meta: Meta = {
    title: 'Core/Typography',
};

export default meta;

export const Hierarchy = () => (
    <div className="p-8 bg-surface-container-lowest min-h-screen space-y-12">
        <section className="space-y-4">
            <div className="flex items-center gap-2 text-secondary font-mono text-[10px] tracking-[0.3em]">
                <div className="w-8 h-[2px] bg-secondary" />
                01 // DISPLAY CORE
            </div>
            <div className="space-y-8">
                <div>
                    <Text variant="label" intent="muted" className="mb-2">// DISPLAY LARGE [96PX / BLACK]</Text>
                    <Heading level="display">Kinetic Evolution</Heading>
                </div>
                <div>
                    <Text variant="label" intent="muted" className="mb-2">// HEADLINE MEDIUM [48PX / BOLD]</Text>
                    <Heading level="h1" intent="primary">The Architecture of Digital Resistance</Heading>
                </div>
            </div>
        </section>

        <section className="space-y-6">
            <div className="flex items-center gap-2 text-secondary font-mono text-[10px] tracking-[0.3em]">
                <div className="w-8 h-[2px] bg-secondary" />
                02 // TECHNICAL HIERARCHY
            </div>
            <div className="border border-outline/20">
                <table className="w-full text-left font-headline border-collapse">
                    <thead>
                        <tr className="bg-surface-container-high border-b border-outline/20">
                            <th className="px-6 py-4 text-[10px] tracking-[0.2em] text-on-surface-variant uppercase">Type Token</th>
                            <th className="px-6 py-4 text-[10px] tracking-[0.2em] text-on-surface-variant uppercase">Family</th>
                            <th className="px-6 py-4 text-[10px] tracking-[0.2em] text-on-surface-variant uppercase">Size/Leading</th>
                            <th className="px-6 py-4 text-[10px] tracking-[0.2em] text-on-surface-variant uppercase">Weight</th>
                            <th className="px-6 py-4 text-[10px] tracking-[0.2em] text-on-surface-variant uppercase">Use Case</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-outline/10 bg-surface-container-low/30 font-mono">
                        <tr>
                            <td className="px-6 py-4"><Text variant="label">Title Large</Text></td>
                            <td className="px-6 py-4 text-xs text-on-surface-variant">Space Grotesk</td>
                            <td className="px-6 py-4 text-xs text-on-surface-variant">22px / 28px</td>
                            <td className="px-6 py-4 text-xs text-on-surface-variant">700</td>
                            <td className="px-6 py-4 text-[10px] text-on-surface-variant opacity-50 uppercase">Section Headers / Modal Titles</td>
                        </tr>
                        <tr>
                            <td className="px-6 py-4"><Text variant="body">Body Medium</Text></td>
                            <td className="px-6 py-4 text-xs text-on-surface-variant">Manrope</td>
                            <td className="px-6 py-4 text-xs text-on-surface-variant">16px / 24px</td>
                            <td className="px-6 py-4 text-xs text-on-surface-variant">400</td>
                            <td className="px-6 py-4 text-[10px] text-on-surface-variant opacity-50 uppercase">Primary Content / Instructions</td>
                        </tr>
                        <tr>
                            <td className="px-6 py-4"><Text variant="label" className="text-[11px]">Label Small</Text></td>
                            <td className="px-6 py-4 text-xs text-on-surface-variant">Space Grotesk</td>
                            <td className="px-6 py-4 text-xs text-on-surface-variant">11px / 16px</td>
                            <td className="px-6 py-4 text-xs text-on-surface-variant">500</td>
                            <td className="px-6 py-4 text-[10px] text-on-surface-variant opacity-50 uppercase">UI Elements / Button Labels</td>
                        </tr>
                        <tr>
                            <td className="px-6 py-4"><Text variant="mono" intent="primary">Mono Data</Text></td>
                            <td className="px-6 py-4 text-xs text-on-surface-variant">JetBrains Mono</td>
                            <td className="px-6 py-4 text-xs text-on-surface-variant">12px / 18px</td>
                            <td className="px-6 py-4 text-xs text-on-surface-variant">400</td>
                            <td className="px-6 py-4 text-[10px] text-on-surface-variant opacity-50 uppercase">System Logs / Code / Metadata</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
    </div>
);

export const HeadingComponent: StoryObj<typeof Heading> = {
    render: (args) => <Heading {...args} />,
    args: {
        level: 'h1',
        intent: 'default',
        children: 'Tactical Typography',
    },
    argTypes: {
        level: {
            control: 'select',
            options: ['display', 'h1', 'h2', 'h3', 'h4'],
        },
        intent: {
            control: 'select',
            options: ['default', 'primary', 'secondary', 'muted'],
        },
    },
};

export const TextComponent: StoryObj<typeof Text> = {
    render: (args) => <Text {...args} />,
    args: {
        variant: 'body',
        intent: 'default',
        children: 'Neural link established. Syphoning data packets from central hub. Maintain tactical stealth.',
    },
    argTypes: {
        variant: {
            control: 'select',
            options: ['lead', 'body', 'label', 'mono', 'caption'],
        },
        intent: {
            control: 'select',
            options: ['default', 'primary', 'secondary', 'muted', 'error'],
        },
    },
};

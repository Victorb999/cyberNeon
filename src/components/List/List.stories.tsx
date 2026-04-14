import type { Meta, StoryObj } from '@storybook/react';
import { List, ListItem } from './';
import { LayoutGrid, Layers, Palette, FileText, Binary } from 'lucide-react';
import React from 'react';

const meta = {
    component: List,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
    args: {
        variant: 'secondary',
        theme: 'primary',
        borderDirection: 'left',
    },
    argTypes: {
        variant: {
            control: 'select',
            options: ['default', 'secondary'],
        },
        theme: {
            control: 'select',
            options: ['primary', 'secondary', 'success', 'error', 'info', 'warning'],
        },
        borderDirection: {
            control: 'select',
            options: ['top', 'bottom', 'left', 'right', 'all', 'none'],
        },
    },
} satisfies Meta<typeof List>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: (args) => (
        <div className="w-[300px]">
            <List {...args}>
                <ListItem
                    icon={<LayoutGrid size={18} />}
                    label="Dashboard"
                />
                <ListItem
                    active
                    icon={<Layers size={18} />}
                    label="Components"
                />
                <ListItem
                    icon={<Palette size={18} />}
                    label="Theme"
                />
                <ListItem
                    icon={<FileText size={18} />}
                    label="Documentation"
                />
                <ListItem
                    icon={<Binary size={18} />}
                    label="API"
                />
            </List>
        </div>
    ),
};

export const SidebarExample: Story = {
    render: () => {
        const [activeIndex, setActiveIndex] = React.useState(1);

        const items = [
            { icon: <LayoutGrid size={18} />, label: "Dashboard" },
            { icon: <Layers size={18} />, label: "Components" },
            { icon: <Palette size={18} />, label: "Theme" },
            { icon: <FileText size={18} />, label: "Documentation" },
            { icon: <Binary size={18} />, label: "API" },
        ];

        return (
            <div className="w-[300px] h-screen bg-surface-container-lowest border-r border-outline-variant/20 py-8">
                <List>
                    {items.map((item, index) => (
                        <ListItem
                            key={item.label}
                            active={activeIndex === index}
                            icon={item.icon}
                            label={item.label}
                            onClick={() => setActiveIndex(index)}
                        />
                    ))}
                </List>
            </div>
        );
    },
    parameters: {
        layout: 'fullscreen',
    },
};

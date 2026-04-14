import React, { useState } from 'react';
import {
    Heading,
    Text as TypographyText,
    Button,
    Card,
    Input,
    Checkbox,
    Switch,
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
    StatusTag,
    AccentBar,
    List,
    ListItem,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
    RadioGroup,
    RadioGroupItem
} from '../components';

const DocsPage: React.FC = () => {
    const [activeTab, setActiveTab] = useState('foundations');

    const sections = {
        foundations: {
            title: 'Foundations',
            icon: 'architecture',
            content: (
                <div className="space-y-16">
                    <section className="space-y-8">
                        <div className="flex items-center gap-4">
                            <AccentBar position="top" color="primary" className="!mb-0" />
                            <TypographyText variant="mono" intent="secondary">FOUNDATION_MODULE_01</TypographyText>
                        </div>
                        <Heading level="display">Typo<span className="text-primary-dim">graphy</span></Heading>

                        <div className="grid gap-12 border-l-2 border-outline/20 pl-8">
                            <div>
                                <TypographyText variant="mono" intent="secondary" className="mb-2">DISPLAY_LARGE / SPACE GROTESK</TypographyText>
                                <Heading level="display">SYSTEM_ALPHA</Heading>
                            </div>
                            <div>
                                <TypographyText variant="mono" intent="secondary" className="mb-2">HEADLINE_H1 / SPACE GROTESK</TypographyText>
                                <Heading level="h1">NEURAL_INTERFACE_ACTIVE</Heading>
                            </div>
                            <div>
                                <TypographyText variant="mono" intent="secondary" className="mb-2">BODY_DEFAULT / MANROPE</TypographyText>
                                <TypographyText variant="body">
                                    The kinetic edge design system represents the convergence of high-fidelity brutalism and functional minimalism.
                                    Each character is rendered with pixel-perfect precision to ensure readability in high-stress tactical environments.
                                </TypographyText>
                            </div>
                            <div>
                                <TypographyText variant="mono" intent="secondary" className="mb-2">LABEL_SMALL / SPACE GROTESK</TypographyText>
                                <TypographyText variant="label">TX_ID: 8849-001-X99 // STATUS: SECURE</TypographyText>
                            </div>
                        </div>
                    </section>

                    <section className="space-y-8">
                        <div className="flex items-end justify-between border-b border-outline/20 pb-4">
                            <Heading level="h3" intent="primary">// 02_COLOR_SPECIFICATION</Heading>
                            <TypographyText variant="mono">HEX_MAP_V1.0</TypographyText>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
                            {[
                                { name: 'PRIMARY', hex: '#E70057', bg: 'bg-primary' },
                                { name: 'PRIMARY_DIM', hex: '#FF8B9D', bg: 'bg-primary-dim' },
                                { name: 'SECONDARY', hex: '#E2E7B0', bg: 'bg-secondary' },
                                { name: 'BACKGROUND', hex: '#040F1D', bg: 'bg-[#040F1D]' },
                                { name: 'SURFACE_HIGH', hex: '#102033', bg: 'bg-surface-container-high' },
                                { name: 'ERROR', hex: '#FF716C', bg: 'bg-error' },
                                { name: 'SUCCESS', hex: '#00FF41', bg: 'bg-success' },
                                { name: 'WARNING', hex: '#F1F509', bg: 'bg-warning' },
                                { name: 'INFO', hex: '#00FFFF', bg: 'bg-info' },
                            ].map((color) => (
                                <div key={color.name} className="bg-surface-container-high group border border-outline/5 overflow-hidden">
                                    <div className={`h-24 w-full ${color.bg} transition-transform group-hover:scale-[1.02]`}></div>
                                    <div className="p-4">
                                        <TypographyText variant="mono" intent="muted" className="text-[10px]">{color.name}</TypographyText>
                                        <TypographyText variant="mono" className="font-bold">{color.hex}</TypographyText>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>
            )
        },
        components: {
            title: 'Components',
            icon: 'layers',
            content: (
                <div className="space-y-16">
                    <section className="space-y-8">
                        <Heading level="h2" className="border-b border-outline/20 pb-2">// INTERACTIVE_NODES</Heading>

                        <div className="grid md:grid-cols-2 gap-12">
                            <Card className="p-8 space-y-6">
                                <TypographyText variant="label" intent="primary">BUTTON_VARIANTS</TypographyText>
                                <div className="flex flex-wrap gap-4">
                                    <Button variant="primary">Primary_Cmd</Button>
                                    <Button variant="secondary">Secondary_Act</Button>
                                    <Button variant="tertiary">Tertiary_Sys</Button>
                                    <Button variant="ghost">Ghost_Null</Button>
                                </div>
                                <div className="flex flex-wrap gap-4 items-center">
                                    <Button size="sm">Small</Button>
                                    <Button size="md">Medium</Button>
                                    <Button size="lg">Large</Button>
                                </div>
                            </Card>

                            <Card className="p-8 space-y-6">
                                <TypographyText variant="label" intent="primary">FORM_CONTROLS</TypographyText>
                                <div className="space-y-4">
                                    <div className="grid grid-cols-2 gap-4">
                                        <Input placeholder="Input technical data..." />
                                        <Select defaultValue="v1">
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select version" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="v1">Version_1.0</SelectItem>
                                                <SelectItem value="v2">Version_2.0</SelectItem>
                                                <SelectItem value="v3">Version_3.0</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                    <div className="flex gap-8">
                                        <div className="flex items-center gap-2">
                                            <Checkbox id="c1" />
                                            <label htmlFor="c1" className="text-xs font-mono uppercase cursor-pointer">Sync_Active</label>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Switch id="s1" />
                                            <label htmlFor="s1" className="text-xs font-mono uppercase cursor-pointer">Neural_Link</label>
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <TypographyText variant="label">System_Priority</TypographyText>
                                        <RadioGroup defaultValue="high">
                                            <div className="flex gap-6">
                                                <div className="flex items-center gap-2">
                                                    <RadioGroupItem value="low" id="r1" />
                                                    <label htmlFor="r1" className="text-xs font-mono uppercase cursor-pointer">Low_Prio</label>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <RadioGroupItem value="high" id="r2" />
                                                    <label htmlFor="r2" className="text-xs font-mono uppercase cursor-pointer">High_Prio</label>
                                                </div>
                                            </div>
                                        </RadioGroup>
                                    </div>
                                </div>
                            </Card>
                        </div>
                    </section>

                    <section className="space-y-8">
                        <Heading level="h2" className="border-b border-outline/20 pb-2">// DATA_VISUALIZATION</Heading>
                        <div className="grid lg:grid-cols-3 gap-8">
                            <Card className="col-span-2 overflow-hidden border-none bg-transparent">
                                <Table curcorner>
                                    <TableHeader>
                                        <TableRow>
                                            <TableHead>PROCESS_ID</TableHead>
                                            <TableHead>STATUS</TableHead>
                                            <TableHead>UPTIME</TableHead>
                                            <TableHead className="text-right">LOAD</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        {[
                                            { id: 'X-900', status: 'success', uptime: '124:12:01', load: '12.4%' },
                                            { id: 'Y-201', status: 'warning', uptime: '002:15:33', load: '88.9%' },
                                            { id: 'Z-003', status: 'error', uptime: 'Offline', load: '0.0%' },
                                        ].map((row) => (
                                            <TableRow key={row.id}>
                                                <TableCell className="font-mono text-primary">{row.id}</TableCell>
                                                <TableCell>
                                                    <StatusTag status={row.status as any}>{row.status.toUpperCase()}</StatusTag>
                                                </TableCell>
                                                <TableCell className="font-mono opacity-60 text-xs">{row.uptime}</TableCell>
                                                <TableCell className="text-right font-mono">{row.load}</TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </Card>

                            <div className="space-y-8">
                                <List title="SYSTEM_OVERVIEW">
                                    <ListItem active label="Active_Node_Matrix" theme="primary" />
                                    <ListItem label="Sub_Level_B2" theme="secondary" />
                                    <ListItem label="Legacy_Kernel" theme="secondary" />
                                    <ListItem label="Firewall_Breach" theme="error" />
                                </List>

                                <TooltipProvider>
                                    <div className="flex gap-4">
                                        <Tooltip>
                                            <TooltipTrigger asChild>
                                                <div className="p-3 bg-surface-container border border-primary/20 text-primary cursor-help hover:bg-primary/10 transition-colors">
                                                    <span className="material-symbols-outlined">security</span>
                                                </div>
                                            </TooltipTrigger>
                                            <TooltipContent>System check positive</TooltipContent>
                                        </Tooltip>

                                        <Tooltip>
                                            <TooltipTrigger asChild>
                                                <div className="p-3 bg-surface-container border border-secondary/20 text-secondary cursor-help hover:bg-secondary/10 transition-colors">
                                                    <span className="material-symbols-outlined">lock</span>
                                                </div>
                                            </TooltipTrigger>
                                            <TooltipContent>Encryption enabled</TooltipContent>
                                        </Tooltip>
                                    </div>
                                </TooltipProvider>
                            </div>
                        </div>
                    </section>
                </div>
            )
        },
        decorative: {
            title: 'Decorative',
            icon: 'architecture',
            content: (
                <div className="space-y-16">
                    <section className="space-y-8">
                        <Heading level="h2" className="border-b border-outline/20 pb-2">// HUD_ELEMENTS</Heading>
                        <div className="grid md:grid-cols-2 gap-12">
                            <div className="relative p-12 bg-surface-container border border-outline/10 group overflow-hidden">
                                <div className="absolute top-0 left-0">
                                    <AccentBar position="left" color="primary" className="!h-8 !mr-0" />
                                    <AccentBar position="top" color="primary" className="!w-8 !mb-0" />
                                </div>
                                <div className="absolute bottom-0 right-0 rotate-180">
                                    <AccentBar position="left" color="secondary" className="!h-8 !mr-0" />
                                    <AccentBar position="top" color="secondary" className="!w-8 !mb-0" />
                                </div>

                                <TypographyText variant="mono" intent="secondary" className="mb-4">TACTICAL_GUTTER_V1</TypographyText>
                                <Heading level="h3">ENHANCED_VISUAL_FEEDBACK</Heading>
                                <TypographyText variant="body" className="mt-4 opacity-70">
                                    HUD elements provide structural context without overloading the user interface.
                                    Accent bars and tonal shifts create a modular, brutalist feel.
                                </TypographyText>
                            </div>
                            <div className="space-y-8">
                                <div className="space-y-2">
                                    <TypographyText variant="mono">ACCENT_BAR_TOP_PRIMARY</TypographyText>
                                    <AccentBar position="top" color="primary" />
                                </div>
                                <div className="space-y-2">
                                    <TypographyText variant="mono">ACCENT_BAR_LEFT_SECONDARY</TypographyText>
                                    <div className="h-12">
                                        <AccentBar position="left" color="secondary" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            )
        }
    };

    return (
        <div className="flex min-h-screen bg-background text-on-surface selection:bg-primary selection:text-on-primary font-body">
            {/* Sidebar */}
            <aside className="hidden md:flex flex-col h-screen sticky top-0 w-64 bg-black/40 border-r border-outline/10 z-50 backdrop-blur-xl">
                <div className="flex flex-col h-full py-8">
                    <div className="px-6 mb-12">
                        <Heading level="h2" intent="primary" className="tracking-[0.2em] whitespace-nowrap">CYBER_NEON</Heading>
                        <TypographyText variant="mono" intent="secondary" className="text-[10px] opacity-50">DESIGN_CORE_V1.0</TypographyText>
                    </div>

                    <nav className="flex-1 space-y-2 px-2">
                        {(Object.keys(sections) as Array<keyof typeof sections>).map((key) => (
                            <button
                                key={key}
                                onClick={() => setActiveTab(key)}
                                className={`w-full flex items-center gap-3 px-4 py-3 font-headline text-xs font-bold uppercase tracking-widest transition-all duration-200 ${activeTab === key
                                    ? 'bg-primary text-black clip-path-cyber'
                                    : 'text-on-surface/60 hover:text-on-surface hover:bg-surface-container-high'
                                    }`}
                            >
                                <span className="material-symbols-outlined text-sm">{sections[key].icon}</span>
                                {sections[key].title}
                            </button>
                        ))}
                        <a
                            href={import.meta.env.DEV ? 'http://localhost:6006' : '/storybook/'}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full flex items-center gap-3 px-4 py-3 font-headline text-xs font-bold uppercase tracking-widest text-[#00FF41] hover:bg-[#00FF41]/10 transition-all duration-200 border-l border-[#00FF41]/30 mt-4 group"
                        >
                            <span className="material-symbols-outlined text-sm group-hover:rotate-12 transition-transform">auto_stories</span>
                            STORYBOOK
                            <span className="material-symbols-outlined text-[10px] ml-auto">open_in_new</span>
                        </a>
                    </nav>

                    <div className="px-4 mt-auto space-y-4">
                        <Button
                            variant="tertiary"
                            className="w-full text-[10px] border-[#00FF41]/30 text-[#00FF41] hover:bg-[#00FF41]/5 hover:border-[#00FF41]"
                            size="sm"
                            onClick={() => window.open(import.meta.env.DEV ? 'http://localhost:6006' : '/storybook/', '_blank')}
                        >
                            OPEN_STORYBOOK
                        </Button>
                        <Button variant="secondary" className="w-full text-[10px]" size="sm">INIT_SYSTEM_DUMP</Button>
                    </div>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 overflow-x-hidden pt-20 pb-20 relative">
                <div className="max-w-7xl mx-auto px-8 md:px-12 relative z-10">
                    {sections[activeTab as keyof typeof sections].content}
                </div>

                {/* Subtle Scanline Overlay */}
                <div className="fixed inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.03),rgba(0,255,0,0.01),rgba(0,0,255,0.03))] bg-[length:100%_2px,3px_100%] z-50 opacity-20"></div>
            </main>

            {/* Decorative Grid Lines */}
            <div className="fixed inset-0 pointer-events-none opacity-[0.03] overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]"></div>
            </div>
        </div>
    );
};

export default DocsPage;

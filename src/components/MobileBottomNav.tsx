'use client';

import {
    LayoutGrid,
    Plug,
    Music,
    GraduationCap,
    Search,
    LucideIcon
} from 'lucide-react';

interface MobileBottomNavProps {
    activeSection: string;
    navigateToSection: (sectionId: string) => void;
    onOpenSearch: () => void;
}

interface NavItem {
    id: string;
    label: string;
    Icon: LucideIcon;
}

const navItems: NavItem[] = [
    { id: 'home', label: 'Home', Icon: LayoutGrid },
    { id: 'plugins-database', label: 'Plugins', Icon: Plug },
    { id: 'templates', label: 'Templates', Icon: Music },
    { id: 'quick-start', label: 'Learn', Icon: GraduationCap },
];

export const MobileBottomNav = ({
    activeSection,
    navigateToSection,
    onOpenSearch
}: MobileBottomNavProps) => {
    return (
        <nav className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
            {/* Gradient blur effect behind nav */}
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-primary)] via-[rgba(3,5,10,0.94)] to-transparent backdrop-blur-2xl" />

            {/* Safe area padding for devices with home indicator */}
            <div className="relative pb-safe">
                <div className="flex items-center justify-around px-2 py-2 border-t border-[var(--glass-border)]">
                    {navItems.map((item) => {
                        const isActive = activeSection === item.id;
                        return (
                            <button
                                key={item.id}
                                onClick={() => navigateToSection(item.id)}
                                className={`premium-focus flex flex-col items-center justify-center min-w-[60px] py-2 px-3 rounded-2xl transition-all duration-700 ease-[var(--ease-premium)] ${isActive
                                        ? 'text-white bg-white/[0.11] shadow-[var(--shadow-inner-line)]'
                                        : 'text-[var(--text-dim)] hover:text-[var(--text-secondary)] active:scale-95'
                                    }`}
                            >
                                <item.Icon
                                    className={`w-5 h-5 mb-1 transition-transform ${isActive ? 'scale-110' : ''
                                        }`}
                                />
                                <span className={`text-[10px] font-bold tracking-wide ${isActive ? 'text-[var(--accent-secondary)]' : ''
                                    }`}>
                                    {item.label}
                                </span>
                                {/* Active indicator dot */}
                                {isActive && (
                                    <div className="absolute -bottom-0.5 w-1 h-1 rounded-full bg-[var(--accent-secondary)] animate-pulse" />
                                )}
                            </button>
                        );
                    })}

                    {/* Search button */}
                    <button
                        onClick={onOpenSearch}
                        className="premium-focus flex flex-col items-center justify-center min-w-[60px] py-2 px-3 rounded-2xl text-[var(--text-dim)] hover:text-[var(--text-secondary)] active:scale-95 transition-all duration-700 ease-[var(--ease-premium)]"
                    >
                        <Search className="w-5 h-5 mb-1" />
                        <span className="text-[10px] font-medium tracking-wide">Search</span>
                    </button>
                </div>
            </div>
        </nav>
    );
};

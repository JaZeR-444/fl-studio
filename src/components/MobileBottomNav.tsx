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
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/95 to-transparent backdrop-blur-xl" />

            {/* Safe area padding for devices with home indicator */}
            <div className="relative pb-safe">
                <div className="flex items-center justify-around px-2 py-2 border-t border-white/10">
                    {navItems.map((item) => {
                        const isActive = activeSection === item.id;
                        return (
                            <button
                                key={item.id}
                                onClick={() => navigateToSection(item.id)}
                                className={`flex flex-col items-center justify-center min-w-[60px] py-2 px-3 rounded-xl transition-all duration-200 ${isActive
                                        ? 'text-white bg-purple-600/20'
                                        : 'text-gray-500 hover:text-gray-300 active:scale-95'
                                    }`}
                            >
                                <item.Icon
                                    className={`w-5 h-5 mb-1 transition-transform ${isActive ? 'scale-110' : ''
                                        }`}
                                />
                                <span className={`text-[10px] font-medium tracking-wide ${isActive ? 'text-purple-400' : ''
                                    }`}>
                                    {item.label}
                                </span>
                                {/* Active indicator dot */}
                                {isActive && (
                                    <div className="absolute -bottom-0.5 w-1 h-1 rounded-full bg-purple-500 animate-pulse" />
                                )}
                            </button>
                        );
                    })}

                    {/* Search button */}
                    <button
                        onClick={onOpenSearch}
                        className="flex flex-col items-center justify-center min-w-[60px] py-2 px-3 rounded-xl text-gray-500 hover:text-gray-300 active:scale-95 transition-all duration-200"
                    >
                        <Search className="w-5 h-5 mb-1" />
                        <span className="text-[10px] font-medium tracking-wide">Search</span>
                    </button>
                </div>
            </div>
        </nav>
    );
};

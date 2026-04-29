'use client';

import { useState, useEffect, createContext, useContext, useCallback, ReactNode } from 'react';
import { CheckCircle, XCircle, AlertCircle, Info, X, Heart, Trash2 } from 'lucide-react';

// Toast types
type ToastType = 'success' | 'error' | 'warning' | 'info';

interface Toast {
    id: string;
    message: string;
    type: ToastType;
    icon?: ReactNode;
}

interface ToastContextType {
    addToast: (message: string, type?: ToastType, icon?: ReactNode) => void;
    removeToast: (id: string) => void;
}

const ToastContext = createContext<ToastContextType | null>(null);

export const useToast = () => {
    const context = useContext(ToastContext);
    if (!context) {
        throw new Error('useToast must be used within a ToastProvider');
    }
    return context;
};

// Pre-built toast helpers
export const useToolkitToast = () => {
    const { addToast } = useToast();

    return {
        addedToToolkit: (pluginName: string) =>
            addToast(`${pluginName} added to Toolkit`, 'success', <Heart className="w-4 h-4 fill-current" />),
        removedFromToolkit: (pluginName: string) =>
            addToast(`${pluginName} removed from Toolkit`, 'info', <Trash2 className="w-4 h-4" />),
    };
};

export const ToastProvider = ({ children }: { children: ReactNode }) => {
    const [toasts, setToasts] = useState<Toast[]>([]);

    const addToast = useCallback((message: string, type: ToastType = 'info', icon?: ReactNode) => {
        const id = `toast-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
        setToasts(prev => [...prev, { id, message, type, icon }]);
    }, []);

    const removeToast = useCallback((id: string) => {
        setToasts(prev => prev.filter(toast => toast.id !== id));
    }, []);

    return (
        <ToastContext.Provider value={{ addToast, removeToast }}>
            {children}
            <ToastContainer toasts={toasts} removeToast={removeToast} />
        </ToastContext.Provider>
    );
};

// Toast Container - renders all active toasts
const ToastContainer = ({ toasts, removeToast }: { toasts: Toast[], removeToast: (id: string) => void }) => {
    return (
        <div className="fixed bottom-24 md:bottom-6 right-6 z-[100] flex flex-col gap-2 pointer-events-none">
            {toasts.map(toast => (
                <ToastItem key={toast.id} toast={toast} onClose={() => removeToast(toast.id)} />
            ))}
        </div>
    );
};

// Individual Toast Item
const ToastItem = ({ toast, onClose }: { toast: Toast, onClose: () => void }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            onClose();
        }, 3000);

        return () => clearTimeout(timer);
    }, [onClose]);

    const getTypeStyles = () => {
        switch (toast.type) {
            case 'success':
                return 'bg-green-500/20 border-green-500/40 text-green-400';
            case 'error':
                return 'bg-red-500/20 border-red-500/40 text-red-400';
            case 'warning':
                return 'bg-yellow-500/20 border-yellow-500/40 text-yellow-400';
            case 'info':
            default:
                return 'bg-blue-500/20 border-blue-500/40 text-blue-400';
        }
    };

    const getDefaultIcon = () => {
        if (toast.icon) return toast.icon;

        switch (toast.type) {
            case 'success':
                return <CheckCircle className="w-4 h-4" />;
            case 'error':
                return <XCircle className="w-4 h-4" />;
            case 'warning':
                return <AlertCircle className="w-4 h-4" />;
            case 'info':
            default:
                return <Info className="w-4 h-4" />;
        }
    };

    return (
        <div
            className={`pointer-events-auto flex items-center gap-3 px-4 py-3 rounded-xl border backdrop-blur-xl shadow-xl 
        animate-slide-in-right ${getTypeStyles()}`}
        >
            <div className="shrink-0">
                {getDefaultIcon()}
            </div>
            <span className="text-sm font-medium text-white">{toast.message}</span>
            <button
                onClick={onClose}
                className="shrink-0 p-1 rounded-lg hover:bg-white/10 transition-colors"
            >
                <X className="w-3 h-3 text-gray-400" />
            </button>
        </div>
    );
};

// Add this to your global CSS or tailwind config:
// @keyframes slide-in-right {
//   from { transform: translateX(100%); opacity: 0; }
//   to { transform: translateX(0); opacity: 1; }
// }
// .animate-slide-in-right { animation: slide-in-right 0.3s ease-out; }

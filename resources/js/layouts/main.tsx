import { ThemeProvider } from '@/components/theme-provider';
import Header from '@/elements/header';
import Sidebar from '@/elements/sidebar';
import { useSidebarStore, useWindowResize } from '@/stores/sidebar-store';
import { ReactNode } from 'react';

export default function Main({ children }: { children: ReactNode }) {
    const { sidebarOpen, closeSidebar, isMobile } = useSidebarStore();
    useWindowResize();

    return (
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <div className="flex h-screen flex-col bg-white dark:bg-slate-900">
                <Header />

                <div className="flex flex-1 overflow-hidden">
                    <Sidebar />

                    {isMobile && sidebarOpen && (
                        <div
                            className="fixed inset-0 z-40 bg-black bg-opacity-50"
                            onClick={closeSidebar}
                        ></div>
                    )}

                    <main className={`flex-1 overflow-y-auto`}>{children}</main>
                </div>
            </div>
        </ThemeProvider>
    );
}

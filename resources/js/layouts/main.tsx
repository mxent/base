import Button from '@/components/button';
import { Atom, Sidebar } from 'lucide-react';
import { useState } from 'react';

const MainLayout = ({ children }: { children: React.ReactNode }) => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <>
            <div className="relative flex overflow-hidden bg-white text-slate-600 dark:bg-gray-900 dark:text-slate-300">
                <div
                    className={`fixed inset-0 z-20 bg-black bg-opacity-50 transition-opacity md:hidden ${sidebarOpen ? 'block' : 'hidden'}`}
                    onClick={() => setSidebarOpen(false)}
                ></div>
                <div
                    className={`fixed inset-y-0 left-0 z-30 w-48 transform border-r border-slate-100 bg-slate-50 transition-transform dark:border-gray-700 dark:bg-gray-800 md:relative md:transform-none ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}
                >
                    <div className="p-4">
                        <div className="flex items-center px-2 py-1 text-black dark:text-white">
                            <Atom size={18} />
                            <div className="w-1"></div>
                            <div className="font-black md:text-base">
                                {import.meta.env.VITE_APP_NAME}
                            </div>
                        </div>
                        <div className="h-3"></div>
                        <div className="font-bold text-slate-800 dark:text-slate-300">
                            <div className="my-1 px-2 py-1">Dashboard</div>
                            <div className="my-1 px-2 py-1">Accounts</div>
                            <div className="my-1 rounded bg-slate-200 px-2 py-1 dark:bg-gray-700">
                                Sales
                            </div>
                            <div className="my-1 px-2 py-1">Expenses</div>
                            <div className="my-1 px-2 py-1">Reports</div>
                        </div>
                    </div>
                </div>
                <div className="flex-1">
                    <Button
                        variantType="ghost"
                        className="h-14 w-14 rounded-full md:hidden"
                        onClick={() => setSidebarOpen(!sidebarOpen)}
                    >
                        <Sidebar size={24} />
                    </Button>
                    {children}
                </div>
            </div>
        </>
    );
};

export default MainLayout;

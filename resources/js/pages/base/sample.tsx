import MainLayout from '@/layouts/main';

const SamplePage = () => {
    return (
        <MainLayout>
            <div className="relative h-full p-3 dark:bg-gray-900 md:p-10">
                <div className="font-extrabold text-black dark:text-white md:text-3xl">Sales</div>
                <div className="h-2 md:h-6"></div>
                <div className="flex gap-6 border-b border-gray-100 pb-1 font-medium text-gray-500 dark:border-gray-700 dark:text-gray-400 md:gap-4 md:pb-4">
                    <div>Overview</div>
                    <div>Subscriptions</div>
                    <div className="font-bold text-black dark:text-white">Invoices</div>
                    <div>Customers</div>
                    <div>Deposits</div>
                </div>
                <div className="h-3 md:h-4"></div>
                <div className="relative">
                    <div className="flex items-center justify-between gap-1 md:gap-4">
                        <div className="">
                            <div className="font-medium uppercase text-gray-500 dark:text-gray-400">
                                Overdue
                            </div>
                            <div className="text-black dark:text-white">$10,800</div>
                        </div>
                        <div className="flex h-[6px] flex-1 overflow-hidden rounded-full md:h-4">
                            <div className="bg-yellow-brand w-1/3"></div>
                            <div className="bg-green-brand flex-1"></div>
                        </div>
                        <div className="text-right">
                            <div className="font-medium uppercase text-gray-500 dark:text-gray-400">
                                Due Soon
                            </div>
                            <div className="text-black dark:text-white">$62,000</div>
                        </div>
                    </div>
                    <div className="h-3 md:h-4"></div>
                    <div className="font-medium uppercase text-gray-500 dark:text-gray-400">
                        Invoice List
                    </div>
                    <div className="h-[2.8px] md:h-2"></div>
                    <div className="flex rounded border border-gray-100 dark:border-gray-700 md:rounded-lg">
                        <div className="w-1/2 border-r border-gray-100 dark:border-gray-700">
                            <div className="mx-[5.7px] border-b border-gray-50 border-transparent py-[4.2px] dark:border-gray-700 md:mx-4 md:py-3">
                                <div className="flex justify-between font-bold text-black dark:text-white">
                                    <div>Santa Monica</div>
                                    <div>$10,800</div>
                                </div>
                                <div className="flex justify-between font-medium text-gray-500 dark:text-gray-400">
                                    <div>1995</div>
                                    <div className="uppercase text-red-600">Overdue</div>
                                </div>
                            </div>
                            <div className="border-b border-gray-50 bg-gray-50 px-[5.7px] py-[4.2px] dark:border-gray-700 dark:bg-gray-800 md:px-4 md:py-3">
                                <div className="flex justify-between font-bold text-black dark:text-white">
                                    <div>Stankonia</div>
                                    <div>$8,000</div>
                                </div>
                                <div className="flex justify-between font-medium text-gray-500 dark:text-gray-400">
                                    <div>2000</div>
                                    <div className="uppercase">Due Today</div>
                                </div>
                            </div>
                            <div className="mx-[5.7px] border-b border-gray-50 border-transparent py-[4.2px] dark:border-gray-700 md:mx-4 md:py-3">
                                <div className="flex justify-between font-bold text-black dark:text-white">
                                    <div>Ocean Avenue</div>
                                    <div>$9,500</div>
                                </div>
                                <div className="flex justify-between font-medium text-gray-500 dark:text-gray-400">
                                    <div>2003</div>
                                    <div className="uppercase text-green-700">Paid</div>
                                </div>
                            </div>
                            <div className="mx-[5.7px] border-b border-gray-50 border-transparent py-[4.2px] dark:border-gray-700 md:mx-4 md:py-3">
                                <div className="flex justify-between font-bold text-black dark:text-white">
                                    <div>Tubthumper</div>
                                    <div>$14,000</div>
                                </div>
                                <div className="flex justify-between font-medium text-gray-500 dark:text-gray-400">
                                    <div>1997</div>
                                    <div className="uppercase">Due in 10 Days</div>
                                </div>
                            </div>
                            <div className="mx-[5.7px] border-b border-gray-50 border-transparent py-[4.2px] dark:border-gray-700 md:mx-4 md:py-3">
                                <div className="flex justify-between font-bold text-black dark:text-white">
                                    <div>Wide Open Sp...</div>
                                    <div>$4,600</div>
                                </div>
                                <div className="flex justify-between font-medium text-gray-500 dark:text-gray-400">
                                    <div>1998</div>
                                    <div className="uppercase">Due in 8 Days</div>
                                </div>
                            </div>
                        </div>
                        <div className="w-1/2">
                            <div className="relative p-3 md:p-10">
                                <div className="font-bold text-black dark:text-white">
                                    Stankonia
                                </div>
                                <div className="font-bold text-black dark:text-white">$8,000</div>
                                <div className="font-medium uppercase text-gray-500 dark:text-gray-400">
                                    Due Today • Invoiced 10/31/2000
                                </div>
                                <div className="h-[5.7px] md:h-4"></div>
                                <div className="flex justify-between border-t border-gray-100 py-[5.7px] dark:border-gray-700">
                                    <div>Pro Plan</div>
                                    <div>$6,000</div>
                                </div>
                                <div className="flex justify-between border-t border-gray-100 py-[5.7px] dark:border-gray-700">
                                    <div>Custom</div>
                                    <div>$2,000</div>
                                </div>
                                <div className="flex justify-between border-t border-gray-100 py-[5.7px] font-bold dark:border-gray-700">
                                    <div>Net Total</div>
                                    <div>$8,000</div>
                                </div>
                                <div className="absolute inset-0 z-10 flex items-center justify-center">
                                    <div
                                        className="h-[188px] w-[142px] bg-no-repeat"
                                        style={{
                                            backgroundImage: 'url("/explosion.png")',
                                            backgroundPosition: '0px -1600px',
                                        }}
                                    ></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
};

export default SamplePage;

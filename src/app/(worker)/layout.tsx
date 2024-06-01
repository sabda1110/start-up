import dynamic from 'next/dynamic';

const SidebarWorker = dynamic(() => import('@/components/worker/sidebar/Sidebar'));
const HeaderWorker = dynamic(() => import('@/components/worker/header/HeaderWorker'));

const DashboardWorkerLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className=" w-svw h-svh overflow-hidden flex">
      <SidebarWorker />
      <div className=" w-full ">
        <HeaderWorker />
        {children}
      </div>
    </div>
  );
};

export default DashboardWorkerLayout;

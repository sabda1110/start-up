import dynamic from 'next/dynamic';

const SidebarWorker = dynamic(() => import('@/components/worker/sidebar/Sidebar'));

const DashboardWorkerLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className=" w-svw h-svh overflow-hidden flex">
      <SidebarWorker />
      <div className=" w-5/6  ">{children}</div>
    </div>
  );
};

export default DashboardWorkerLayout;

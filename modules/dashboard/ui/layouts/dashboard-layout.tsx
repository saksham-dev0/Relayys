import { cookies } from "next/headers";
import { Provider } from "jotai";
import { DashboardSidebar } from "../components/dashboard-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";

export const DashboardLayout = async ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const cookieStore = await cookies();
  const defaultOpen = cookieStore.get("sidebar_state")?.value === "true";

  return (
        <Provider>
          <SidebarProvider defaultOpen={defaultOpen}>
            <DashboardSidebar />
            <main className="flex flex-1 flex-col">{children}</main>
          </SidebarProvider>
        </Provider>
  );
};
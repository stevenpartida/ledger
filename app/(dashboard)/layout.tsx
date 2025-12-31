import AppSidebar from "@/components/AppSidebar";
import SiteHeader from "@/components/SiteHeader";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "calc(var(--spacing) * 72)",
          "--header-height": "calc(var(--spacing) * 12)",
        } as React.CSSProperties
      }
    >
      <AppSidebar variant="sidebar" />

      <SidebarInset className="bg-white md:peer-data-[variant=inset]:m-0 md:peer-data-[variant=inset]:rounded-none md:peer-data-[variant=inset]:shadow-none">
        <SiteHeader />
        <main className="flex flex-1 flex-col font-inter overflow-hidden ">
          {children}
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}

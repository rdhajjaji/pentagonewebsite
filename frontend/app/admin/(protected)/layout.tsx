import { AdminProtectedShell } from "@/components/admin/AdminProtectedShell";
import { AdminSidebar } from "@/components/admin/AdminSidebar";

export default function ProtectedAdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <AdminProtectedShell>
      <div className="admin-shell">
        <div className="container-page py-8 md:py-10">
          <div className="flex flex-col gap-6 xl:flex-row xl:items-start">
            <AdminSidebar />
            <div className="min-w-0 flex-1 space-y-6">{children}</div>
          </div>
        </div>
      </div>
    </AdminProtectedShell>
  );
}

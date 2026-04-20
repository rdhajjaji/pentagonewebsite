import { LeadStatus } from "@/types";
import { classNames } from "@/lib/utils";

const styles: Record<LeadStatus, string> = {
  "nouveau": "bg-blue-100 text-blue-800",
  "contacté": "bg-amber-100 text-amber-800",
  "qualifié": "bg-emerald-100 text-emerald-800",
  "en attente": "bg-slate-200 text-slate-700",
  "converti": "bg-green-100 text-green-800",
  "perdu": "bg-rose-100 text-rose-800"
};

export function StatusBadge({ value }: { value: LeadStatus }) {
  return (
    <span className={classNames("inline-flex rounded-full px-3 py-1 text-xs font-semibold", styles[value])}>
      {value}
    </span>
  );
}

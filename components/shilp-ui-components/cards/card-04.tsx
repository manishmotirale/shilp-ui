import { cn } from "@/lib/utils";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";

interface Card02Props {
  name?: string;
  role?: string;
  email?: string;
  phone?: string;
  location?: string;
  avatar?: string;
}

export default function Card_04({
  name = "Sarah Anderson",
  role = "Product Designer",
  email = "sarah@example.com",
  phone = "+1 (555) 123-4567",
  location = "San Francisco, CA",
  avatar = "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
}: Card02Props) {
  return (
    <div
      className={cn(
        "group w-full max-w-sm overflow-hidden",
        "rounded-2xl border border-white/[0.08]",
        "bg-white/[0.025] backdrop-blur-xl",
        "transition-all duration-300",
        "hover:-translate-y-1 hover:border-white/[0.14]",
        "hover:bg-white/[0.035]",
        "shadow-[0_12px_40px_rgba(0,0,0,0.16)]",
      )}
    >
      <div className="relative h-24 overflow-hidden border-b border-white/[0.06] bg-[#08080b]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(139,92,246,0.16),transparent_55%)]" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-violet-400/30 to-transparent" />
      </div>

      <div className="px-5 pb-5">
        <div className="-mt-10 mb-4 flex justify-center">
          <div className="relative">
            <img
              src={avatar}
              alt={name}
              className="size-20 rounded-full border-4 border-[#09090b] bg-[#111113] object-cover shadow-[0_8px_30px_rgba(0,0,0,0.35)]"
            />
            <span className="absolute right-1 bottom-1 size-3 rounded-full border-2 border-[#09090b] bg-violet-400" />
          </div>
        </div>

        <div className="text-center">
          <h3 className="text-base font-medium tracking-tight text-zinc-100">
            {name}
          </h3>
          <p className="mt-1 text-xs text-zinc-500">{role}</p>
        </div>

        <div className="mt-6 space-y-1.5">
          <div className="flex items-center gap-3 rounded-xl border border-transparent px-3 py-2.5 transition-colors hover:border-white/[0.06] hover:bg-white/[0.025]">
            <Mail className="size-4 shrink-0 text-zinc-500" />
            <span className="truncate text-xs text-zinc-400">{email}</span>
          </div>

          <div className="flex items-center gap-3 rounded-xl border border-transparent px-3 py-2.5 transition-colors hover:border-white/[0.06] hover:bg-white/[0.025]">
            <Phone className="size-4 shrink-0 text-zinc-500" />
            <span className="text-xs text-zinc-400">{phone}</span>
          </div>

          <div className="flex items-center gap-3 rounded-xl border border-transparent px-3 py-2.5 transition-colors hover:border-white/[0.06] hover:bg-white/[0.025]">
            <MapPin className="size-4 shrink-0 text-zinc-500" />
            <span className="truncate text-xs text-zinc-400">{location}</span>
          </div>
        </div>

        <button
          type="button"
          className={cn(
            "mt-4 flex w-full items-center justify-center gap-2",
            "rounded-full border border-white/[0.08]",
            "bg-white/[0.04] px-4 py-2.5",
            "text-xs font-medium text-zinc-300",
            "transition-all duration-200",
            "hover:border-violet-400/25 hover:bg-violet-500/[0.07] hover:text-white",
          )}
        >
          View profile
          <ArrowUpRight className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </button>
      </div>
    </div>
  );
}
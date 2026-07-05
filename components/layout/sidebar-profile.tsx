"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useAuth } from "@/hooks/use-auth";

export function SidebarProfile() {
  const { user } = useAuth();
  
  if (!user) return null;

  const initials = user.email ? user.email.substring(0, 2).toUpperCase() : "QM";
  const displayName = user.first_name ? `${user.first_name} ${user.last_name || ''}` : user.email.split('@')[0];

  return (
    <div className="flex items-center gap-3 px-3 py-2">
      <Avatar>
        <AvatarImage src={user.profile_image} alt={displayName} />
        <AvatarFallback>{initials}</AvatarFallback>
      </Avatar>
      <div className="flex flex-col overflow-hidden">
        <span className="text-sm font-medium leading-none truncate">{displayName}</span>
        <span className="text-xs text-muted-foreground mt-1 truncate">{user.role}</span>
      </div>
    </div>
  );
}

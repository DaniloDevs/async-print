"use client";

import {
	ChevronDown,
	LogOut,
} from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function NavUser({
	user,
}: {
	user: {
		name: string;
		email: string;
		avatar: string;
	};
}) {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger className="flex items-center gap-3 outline-none">
				<div className="flex flex-col items-end">
					<span className="text-sm font-medium">{user.name}</span>
					<span className="text-xs text-muted-foreground">{user.email}</span>
				</div>
				<Avatar>
					{user.avatar && <AvatarImage src={user.avatar} />}
					{user.name && (
						<AvatarFallback>{getInitials(user.name)}</AvatarFallback>
					)}
				</Avatar>
				<ChevronDown className="size-4 text-muted-foreground" />
			</DropdownMenuTrigger>
			<DropdownMenuContent
				align="start"
				alignOffset={-24}
				sideOffset={12}
			>
				<DropdownMenuItem asChild>
					<a href="/api/auth/sign-out">
						<LogOut className="mr-2 size-4" />
						Sign Out
					</a>
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}

function getInitials(name: string): string {
	const initials = name
		.split(" ")
		.map((word) => word.charAt(0).toUpperCase())
		.slice(0, 2)
		.join("");

	return initials;
}

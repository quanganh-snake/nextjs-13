import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import { Menubar, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";

const openSans = Open_Sans({ weight: ["400", "700"], subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Learn NextJS 13",
	description: "Generated by create next app",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning={true}>
			<body suppressHydrationWarning={true} className={(openSans.className, "px-4 overflow-hidden")}>
				<Menubar className="my-10 gap-6">
					<MenubarMenu>
						<MenubarTrigger className="flex items-center gap-2 hover:bg-slate-400">
							<Avatar>
								<AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
								<AvatarFallback>CN</AvatarFallback>
							</Avatar>
							<p>Tống Bá Quang Anh</p>
						</MenubarTrigger>
					</MenubarMenu>
					<MenubarMenu>
						<MenubarTrigger className="hover:bg-slate-400">
							<Link href={"/"}>Trang chủ</Link>
						</MenubarTrigger>
					</MenubarMenu>
					<MenubarMenu>
						<MenubarTrigger className="hover:bg-slate-400">
							<Link href={"/users"}>Quản lý người dùng</Link>
						</MenubarTrigger>
					</MenubarMenu>
					<MenubarMenu>
						<MenubarTrigger className="hover:bg-slate-400">
							<Link href={"/posts"}>Quản lý bài viết</Link>
						</MenubarTrigger>
					</MenubarMenu>
				</Menubar>
				{children}
			</body>
		</html>
	);
}

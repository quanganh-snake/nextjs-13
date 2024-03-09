import * as React from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { TrashIcon, Pencil1Icon } from "@radix-ui/react-icons";
export interface IUserPageProps {}

export default function UserPage(props: IUserPageProps) {
	return (
		<div className="my-4">
			<h1 className="text-2xl font-bold text-center mb-4">Trang quản lý người dùng</h1>
			<Table className="border">
				<TableHeader>
					<TableRow>
						<TableHead className="w-[30px] border-r text-center text-gray-700 font-bold">STT</TableHead>
						<TableHead className="w-[140px] border-r text-center text-gray-700 font-bold">Họ và tên</TableHead>
						<TableHead className="w-[120px] border-r text-center text-gray-700 font-bold">Tài khoản</TableHead>
						<TableHead className="w-[120px] border-r text-center text-gray-700 font-bold">Email</TableHead>
						<TableHead className="w-[120px] border-r text-center text-gray-700 font-bold">Tác vụ</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					<TableRow>
						<TableCell className=" border-r font-medium text-center">USER01</TableCell>
						<TableCell className="w-[140px] border-r text-center">Tống Bá Quang Anh</TableCell>
						<TableCell className="w-[140px] border-r text-center">tbquanganh</TableCell>
						<TableCell className="w-[140px] border-r text-center">tbquanganh@gmail.com</TableCell>
						<TableCell className="w-[140px] border-r text-center">
							<div className="flex items-center justify-center gap-2 flex-wrap">
								<Button variant={"warning"}>
									<Pencil1Icon className="mr-2 h-4 w-4" />
									Sửa
								</Button>
								<Button variant={"danger"}>
									<TrashIcon className="mr-2 h-4 w-4" />
									Xóa
								</Button>
							</div>
						</TableCell>
					</TableRow>
				</TableBody>
			</Table>
		</div>
	);
}

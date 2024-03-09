"use client";

import { AppTable } from "@/components/common/table/app.table";
import { AppLoading } from "@/components/common/loading/app.loading";
import * as React from "react";
import useSWR from "swr";
import { TableCell, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { EyeOpenIcon, Pencil1Icon, TrashIcon } from "@radix-ui/react-icons";

export interface IPostPageProps {
	posts: IPost[] | [];
}

const dataColumn = ["STT", "Title", "Content", "Author", "Action"];

export default function PostPage(props: IPostPageProps) {
	const fetcher = (url: string) => fetch(url).then((res) => res.json());
	const { data, error, isLoading } = useSWR("http://localhost:8000/posts", fetcher, {
		revalidateIfStale: false,
		revalidateOnFocus: false,
		revalidateOnReconnect: false,
	});

	let rowData = ``;

	if (!data) {
		return <AppLoading />;
	}

	rowData = data?.map((item: IPost, index: number) => (
		<TableRow key={index}>
			<TableCell className="w-[30px] border-r text-center text-gray-700 font-bold">{index + 1}</TableCell>
			<TableCell className="w-[30px] border-r text-center text-gray-700 font-bold">{item.title}</TableCell>
			<TableCell className="w-[30px] border-r text-center text-gray-700 font-bold">{item.content}</TableCell>
			<TableCell className="w-[30px] border-r text-center text-gray-700 font-bold">{item.author}</TableCell>
			<TableCell className="w-[30px] border-r text-center text-gray-700 font-bold">
				<div className="w-[30px] flex gap-4">
					<Button variant={"primary"}>
						<EyeOpenIcon className="mr-2 h-4 w-4" /> Xem
					</Button>
					<Button variant={"warning"}>
						<Pencil1Icon className="mr-2 h-4 w-4" /> Sửa
					</Button>
					<Button variant={"danger"}>
						<TrashIcon className="mr-2 h-4 w-4" /> Xóa
					</Button>
				</div>
			</TableCell>
		</TableRow>
	));

	return (
		<div>
			<h1 className="text-2xl font-bold uppercase mb-6">Trang quản lý bài viết</h1>
			<AppTable dataColumn={dataColumn} dataBody={rowData} />
		</div>
	);
}

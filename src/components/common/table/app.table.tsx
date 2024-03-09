import React, { useState } from "react";
import { Table, TableBody, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import CreateModal from "../modals/create.modal";
import { Button } from "@/components/ui/button";
type TableProps = {
	dataColumn: string[];
	dataBody: string;
};

export const AppTable = (props: TableProps) => {
	const { dataColumn, dataBody } = props;
	const [showModalCreate, setShowModalCreate] = useState<boolean>(false);
	return (
		<>
			<div className="mb-6">
				<Button
					variant={"primary"}
					onClick={() => {
						setShowModalCreate(true);
					}}
				>
					Thêm mới
				</Button>
			</div>
			<Table className="border border-spacing-4 rounded-lg">
				<TableHeader className="bg-sky-100">
					<TableRow>
						{dataColumn?.map((col, index) => (
							<TableHead key={index} className="w-[30px] border-r text-center text-gray-700 font-bold">
								{col}
							</TableHead>
						))}
					</TableRow>
				</TableHeader>
				<TableBody>{dataBody}</TableBody>
			</Table>
			<CreateModal
				showModal={showModalCreate}
				onShowModal={() => {
					setShowModalCreate(!showModalCreate);
				}}
			/>
		</>
	);
};

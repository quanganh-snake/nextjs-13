import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "@/components/ui/alert-dialog";

type ModalProps = {
	showModal: boolean;
	onShowModal: (value: boolean) => void;
};

const CreateModal = (props: ModalProps) => {
	const { showModal, onShowModal } = props;

	return (
		<AlertDialog open={showModal} onOpenChange={onShowModal}>
			<AlertDialogContent className="w-1/2">
				<AlertDialogHeader>
					<AlertDialogTitle>Thêm mới</AlertDialogTitle>
				</AlertDialogHeader>
				content
				<AlertDialogFooter>
					<AlertDialogCancel>Hủy</AlertDialogCancel>
					<AlertDialogAction>Lưu</AlertDialogAction>
				</AlertDialogFooter>
			</AlertDialogContent>
		</AlertDialog>
	);
};

export default CreateModal;

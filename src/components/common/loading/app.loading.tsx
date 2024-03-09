import "./loading.css";
export const AppLoading = () => {
	return (
		<div className="absolute min-w-full min-h-full inset-0 flex items-center justify-center">
			<div className="loader">
				Loading
				<span />
			</div>
		</div>
	);
};

import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import useUser from "../../hooks/useUser";
import { getGifById } from "../../services/api-giphy";
import { uploadGif } from "../../services/api-service";
import { formatGifData } from "../../utils";
import styles from "./styles.module.css";

const UploadForm = () => {
	const [gif, setGif] = useState<string>("");
	const user = useUser();
	const handleChange = (e: any) => {
		setGif(e.target.value);
	};

	const handleSubmit = async (e: any) => {
		e.preventDefault();
		try {
			const data = await getGifById(gif);

			if (data.meta.status === 200) {
				const userId = user?.id;
				const jwt = user.jwt;
				const dataGifToConvert = { ...data.data, userId };
				const gif = formatGifData(dataGifToConvert);
				const uploadedGif = await uploadGif({ gif, jwt });
				console.log("estos es", uploadedGif);
				if (uploadedGif.ok) {
					toast.success("Gif successfully uploaded");
					setGif("");
				}
				if (!uploadedGif.ok) {
					toast.error(uploadedGif.msg);
				}
			}
			if (data.meta.status !== 200) {
				toast.error("Oops! Something went wrong, try it again!");
			}
			console.log(data);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<form className={styles.form} onSubmit={handleSubmit}>
			<label className={styles.label} htmlFor="id">
				GIF
			</label>
			<input
				className={styles.input}
				type="text"
				id="id"
				name="id"
				value={gif}
				onChange={handleChange}
				placeholder="Copy here your id gif..."
			/>
			<button className={styles.button} type="submit">
				UPLOAD
			</button>
			<Toaster />
		</form>
	);
};

export default UploadForm;

import React, {useState} from 'react';

/*
	Read a text file and out put the content.
	
 */
export const TextFileReader = ({ setText }) => {
	const [selectedFile, setSelectedFile] = useState();
	const [isPicked, setIsPicked] = useState(false);

	const changeHandler = (event) => {
		setSelectedFile(event.target.files[0]);
		if(selectedFile !== undefined || setSelectedFile !== null)
			setIsPicked(true);
		else
			setIsPicked(false);
	};

	const handleSubmission = () => {
		let reader = new FileReader();
		reader.onload = function(evt) {
			setText(evt.target.result);	
		};
		reader.readAsText(selectedFile);
	};


	let fetchFile = async (path) => {
		const r = await fetch(path);
		const txt = await r.text();
		setText(txt);
	}
	// fetchFile('../Bee.txt');

	return (
		<div>
			<input type="file" name="file" onChange={changeHandler} accept="text/plain" />
			{isPicked && selectedFile ? (
				<div>
					<p>Filename: {selectedFile.name}</p>
					<p>Filetype: {selectedFile.type}</p>
					<p>Size in bytes: {selectedFile.size}</p>
					<p>
						lastModifiedDate:{' '}
						{selectedFile.lastModifiedDate.toLocaleDateString()}
					</p>
				</div>
			) : (
				<p>Select a file to show details</p>
			)}
			<div>
				<button onClick={handleSubmission}>Submit</button>
			</div>
		</div>
		);
}
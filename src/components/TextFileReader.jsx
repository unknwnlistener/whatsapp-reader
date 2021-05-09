
/*
	Read a text file and out put the content.
	
 */
export const TextFileReader = ({setText}) => {
	let fetchFile = async (path) => {
		const r = await fetch(path);
		const txt = await r.text();
		setText(txt);
	}
	fetchFile('../chatText.txt');

		return null;
}
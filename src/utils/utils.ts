export function modalTitle(
	title: string,
	midLength: number, // this value is used as an anchor point
	marginMid: number // this value changes based on how far away title length is compared to midLength
): number {
	let dist = Math.abs(title.length - midLength);

	if (title.length >= midLength) {
		marginMid -= dist / 2;
	} else {
		console.log("its true");
		marginMid += dist / 2;
	}
	console.log("title: ", title);
	console.log("params: ", midLength, marginMid);
	console.log("final margin: ", Math.ceil(marginMid));
	return Math.ceil(marginMid);
}

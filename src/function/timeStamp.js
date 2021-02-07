export const timeStamp = (time) => {
	const sec = Math.floor((new Date() - time * 1000) / 1000);
	
	let interval = Math.floor(sec / 31536000);

	if (interval >= 1) {
		return `${interval} years`;
	}
	interval = Math.floor(sec / 2592000);

	if (interval >= 1) {
		return `${interval} months`;
	}
	interval = Math.floor(sec / 86400);

	if (interval >= 1) {
		return `${interval} days`;
	}
	interval = Math.floor(sec / 3600);

	if (interval >= 1) {
		return `${interval} hours`;
	}
	interval = Math.floor(sec / 60);

	if (interval >= 1) {
		return `${interval} minutes`;
	}

	return `${Math.floor(sec)} seconds`;
}
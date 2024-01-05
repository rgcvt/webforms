const postMessage = () => {
	const dimensions = {
		height: document.body.scrollHeight,
		width: document.body.scrollWidth,
	};
	if (window.top) {
		window.top.postMessage(dimensions, '*');
	}
};
const url = new URL(window.location.href);
const isEmbed = window === window.parent ? false : true;
if (isEmbed) {
	postMessage();
	new ResizeObserver(postMessage).observe(document.documentElement);
}

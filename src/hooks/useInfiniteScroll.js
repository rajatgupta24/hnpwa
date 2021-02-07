import { useState, useEffect } from "react";

const MAX = 500;
const postsPerPage = 30;

export const useInfiniteScroll = () => {
	const [loading, setLoading] = useState(false);
	const [count, setCount] = useState(postsPerPage);

	const handleScroll = () =>{

    // const bottom = e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;
		// console.log(bottom);

		if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.clientHeight || loading) {
			return false;
		}

		else {
			setLoading(true);
		}
	}

	useEffect (() => {
		if (loading) return;

		if (count + postsPerPage >= MAX) {
			setCount(MAX);
		} else {
			setCount(count + postsPerPage);
		}
		
		setLoading(false)
	}, [loading]);

	useEffect(() => {
		window.addEventListener ("scroll", handleScroll);
		return () => window.removeEventListener ("scroll", handleScroll);
	}, []);

	return {count};
}
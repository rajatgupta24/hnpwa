import { useState, useEffect } from "react";

const MAX = 500;
const postsPerPage = 10;

export const useInfiniteScroll = () => {
	const [loading, setLoading] = useState(false);
	const [count, setCount] = useState(postsPerPage);
	
	const handleScroll = () =>{
		if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight || loading) {
			return false;
		} else {
			setLoading(true);
		}
	}

	useEffect (() => {
		if (!loading) return;

		if (count + postsPerPage >= MAX) {
			setCount(MAX);
		} else {
			setCount(count + postsPerPage);
		}
		
		setLoading(false)
	}, [loading]);

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener ("scroll", handleScroll);
	}, [])

	return {count};
}
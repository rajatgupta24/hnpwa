import axios from "axios";
import Story from "./Story/Story";
import { useState, useEffect } from "react";
import { useInfiniteScroll } from '../hooks/useInfiniteScroll';

function NewApp() {
	const { count } = useInfiniteScroll();
	const [URL, setURL] = useState("topstories");
	const [storyIds, setStoryIds] = useState([]);

	const getStoryURL = `https://hacker-news.firebaseio.com/v0/${URL}.json?print=pretty`;

	useEffect( async() => {
		const data = await axios.get(getStoryURL)
		setStoryIds(data.data)
		console.log(data)
	}, [URL])

	const Stories = () => {
		return(
			storyIds.length ? storyIds.slice(0, count).map((id, i) => {
				if(i == 0) {
					console.log(id)
				}
				return <Story key={i} id={id} />
			}) : (
				<p>Loading...</p>
			)
		)
	}

	return (
		<div>
			<select name="cars" id="cars" onChange={(e) => setURL(e.target.value)}>
				<option value="topstories">Top Stories</option>
				<option value="newstories">New Stories</option>
				<option value="beststories">Best Stories</option>
			</select>
			<ul>
				<Stories />
			</ul>
		</div>
	)
}

export default NewApp;

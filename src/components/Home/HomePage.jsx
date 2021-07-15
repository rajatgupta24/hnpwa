import axios from "axios";
import Story from "../Story/Story";
import { useState, useEffect } from "react";
import { useInfiniteScroll } from '../../hooks/useInfiniteScroll';
import styles from "./Homepage.module.css" 
import { style } from "@material-ui/system";

function NewApp() {
	const { count } = useInfiniteScroll();
	const [URL, setURL] = useState("topstories");
	const [storyIds, setStoryIds] = useState([]);

	const getStoryURL = `https://hacker-news.firebaseio.com/v0/${URL}.json?print=pretty`;

	useEffect( async() => {
		const data = await axios.get(getStoryURL)
		setStoryIds(data.data)
	}, [URL])

	const Stories = () => {
		return(
			storyIds.length ? storyIds.slice(0, count).map((id, i) => {
				return <Story key={i} id={id} />
			}) : (
				<p>Loading...</p>
			)
		)
	}

	const DropDown = () => {
		return (
      <div className={styles.category}>
        <p>Category:&nbsp;&nbsp;</p>
        <select className={styles.option} name="cars" id="cars" onChange={(e) => setURL(e.target.value)}>
          <option value="topstories">Top Stories</option>
          <option value="newstories">New Stories</option>
          <option value="beststories">Best Stories</option>
        </select>
      </div>
		);
	}

	return (
		<div>
			<DropDown />
			<ul className={styles.list}>
				<Stories />
			</ul>
		</div>
	)
}

export default NewApp;

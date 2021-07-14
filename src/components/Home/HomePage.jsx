import { useEffect, useState } from "react";

import Story from "../Story/Story";
import { getStoryIds } from "../../service/Api";
import { useInfiniteScroll } from '../../hooks/useInfiniteScroll';

import styles from "./Homepage.module.css";

function HomePage() {
	const { count } = useInfiniteScroll();
	const [URL, setURL] = useState("topstories");
	const [storyIds, setStoryIds] = useState([]);


  useEffect( async () => {
		const { data } = await getStoryIds(URL);
		setStoryIds(data)
  }, [URL]);

  return (
    <>
			<nav>
				<input type="text"/>
				<select name="cars" id="cars" onChange={e => setURL(e.target.value)}>
					<option value="topstories">Top Stories</option>
					<option value="newstories">New Stories</option>
					<option value="beststories">Best Stories</option>
				</select>
			</nav>

      <ul className={styles.list}>
        {storyIds.length ? storyIds.slice(0, count).map((id, i) => {
          return <Story key={i} id={id} />
        }) : (
          <p>Loading...</p>
        )}
      </ul>
    </>
  );
}

export default HomePage;

import { useEffect, useState } from "react";
import { getStories, getStoryIds } from "../../service/Api";
import Story from "../Story/Story";
import styles from "./Homepage.module.css";

export default function HomePage() {
	
	const [storyIds, setStoryIds] = useState([]);

  useEffect(() => {
		getStoryIds().then((res) => setStoryIds(res));
  }, [])

  return (
    <>
      <ul className={styles.list}>
        {storyIds.map((id, i) => {return <Story key={i} id={id} />})}
      </ul>
    </>
  );
}

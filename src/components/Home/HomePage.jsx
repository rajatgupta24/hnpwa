import { useEffect, useState } from "react";

import Story from "../Story/Story";
import { getStoryIds } from "../../service/Api";
import { useInfiniteScroll } from '../../hooks/useInfiniteScroll';

import styles from "./Homepage.module.css";

export default function HomePage() {
	const { count } = useInfiniteScroll();
	const [storyIds, setStoryIds] = useState([]);

  useEffect(() => {
    getStoryIds().then((res) => setStoryIds(res));
  }, []);

  return (
    <>
      <ul className={styles.list}>
        {storyIds.slice(0, count).map((id, i) => {
          
          return <Story key={i} id={id} />})}
      </ul>
    </>
  );
}

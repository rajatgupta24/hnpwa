import { useEffect, useState } from "react";
import { getStories, getStoryIds } from "../../service/Api";
import Story from "../Story/Story";

export default function HomePage() {
	
	const [storyIds, setStoryIds] = useState([]);

  useEffect(() => {
		getStoryIds().then((res) => setStoryIds(res));
  }, [])

  return storyIds.map((id, i) => <Story key={i} id={id} />);
}

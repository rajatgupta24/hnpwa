import React, {useEffect, useState} from 'react';
import { getStories } from '../../service/Api';
import styles from "./Story.module.css";

export default function Story({id}) {

	const [story, setStory] = useState({})

	useEffect(() => {
		getStories(id).then(({data}) => data.url && setStory(data) );
	}, [])

	return (
		<div className={styles.story}>
			<a className={styles.title} href={story.url} target="_blank)">{story.title}</a>
			<p>{story.time}</p>
		</div>
	);
}

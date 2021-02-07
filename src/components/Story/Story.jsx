import React, {useEffect, useState} from 'react';

import { getStories } from '../../service/Api';
import { timeStamp } from '../../function/timeStamp';

import styles from "./Story.module.css";

export default function Story({id}) {
	const [story, setStory] = useState({})

	useEffect(() => {
		getStories(id).then(({data}) => (data.url && data.title) && setStory(data) );
	}, [])

	return (
		<>
			{story.title && (
				<li className={styles.story}>
					<a href={story.url}>
						<p className={styles.title}>{story.title}</p>

						<p>By: {story.by}</p>
						<p>Posted: {timeStamp(story.time)}</p>
					</a>
				</li>
			)}
		</>
	);
}

import {useEffect, useState} from 'react';

import { getStories } from '../../service/Api';
import { timeStamp } from '../../function/timeStamp';
import Skeleton from '@material-ui/lab/Skeleton';
import styles from "./Story.module.css";

export default function Story({id}) {
	const [story, setStory] = useState({});
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true);
		getStories(id).then(({data}) => {
			(data.url && data.title) && setStory(data)
		} );
	}, [])

	return (
		<>
		{
			loading ? (story.title && (
				<li className={styles.story}>
					<a href={story.url}>
						<p className={styles.title}>{story.title}</p>
						<div className={styles.info}>
							<p>By: {story.by}</p>
							<p>Posted: {timeStamp(story.time)}</p>
						</div>
					</a>
				</li>
			)) : (
				<div className={styles.skeletonCont}>
					<Skeleton variant="text" />
					<Skeleton variant="text" />
					<Skeleton variant="text" />
				</div>
			)}
		</>
	);
}

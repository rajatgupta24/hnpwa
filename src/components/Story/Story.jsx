import React, {useEffect, useState} from 'react'
import { getStories } from '../../service/Api';

export default function Story({id}) {

	const [story, setStory] = useState({})

	useEffect(() => {
		getStories(id).then(({data}) => setStory(data) );
	}, [])

	return (
		<>
			<p>{JSON.stringify(story.title)}</p>
			<a href={story.url} target="_blank">link</a>
		</>
	);
}

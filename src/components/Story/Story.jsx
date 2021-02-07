import React, {useEffect, useState} from 'react'
import { getStories } from '../../service/Api';

export default function Story({id}) {

	const [story, setStory] = useState({})

	useEffect(() => {
		getStories(id).then(({data}) => setStory(data) );
	}, [])

	return (
		<ul>
			<a href={story.url} target="_blank">{story.title}</a>
		</ul>
	);
}

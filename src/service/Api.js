import axios from "axios";

const baseURL = `https://hacker-news.firebaseio.com/v0/`;
const getStoryURL = `https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty`;
const storiesURL = `${baseURL}item/`;

export const getStoryIds = async (URL) => {
	console.log(URL)
	const res = await axios.get(`https://hacker-news.firebaseio.com/v0/${URL}.json?print=pretty`)
		.then(({data}) => data);
	return res;
}

export const getStories = async (id) => {
	const res = await axios.get(`${storiesURL}${id}.json?print=pretty`).then((res) => res);
	return res;
}
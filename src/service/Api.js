import axios from "axios";

const baseURL = `https://hacker-news.firebaseio.com/v0/`;
const getStoryURL = `${baseURL}topstories.json?print=pretty`;
const storiesURL = `${baseURL}item/`;

export const getStoryIds = async () => {
	const res = await axios.get(getStoryURL).then(({data}) => data);
	return res;
}

export const getStories = async (id) => {
	const res = await axios.get(`${storiesURL}${id}.json?print=pretty`).then((res) => res);
	return res;
}
import axios from "axios";

const baseURL = `https://hacker-news.firebaseio.com/v0/`;
const getStoryURL = `https://community-hacker-news-v1.p.rapidapi.com/topstories.json?print=pretty`;
const storiesURL = `${baseURL}item/`;

const options = {
  method: 'GET',
  url: 'https://community-hacker-news-v1.p.rapidapi.com/topstories.json',
  params: {print: 'pretty'},
  headers: {
    'x-rapidapi-key': 'b6ced38ad1mshd58950f2c15cadfp11b43bjsn5160dabbb875',
    'x-rapidapi-host': 'community-hacker-news-v1.p.rapidapi.com'
  }
};

export const getStoryIds = async () => {
	const res = await axios.request(options).then(({data}) => data);
	return res;
}

export const getStories = async (id) => {
	const res = await axios.get(`${storiesURL}${id}.json?print=pretty`).then((res) => res);
	return res;
}
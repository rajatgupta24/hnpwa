import NewApp from "./components/NewApp";
import HomePage from "./components/Home/HomePage";
import styles from "./App.module.css";

export default function App () {  
	return (
		<div className={styles.wrapper}>
			<div className={styles.container}>
				<h1>Hacker News Blogs</h1>
				<NewApp/>
			</div>
		</div>
	)
}
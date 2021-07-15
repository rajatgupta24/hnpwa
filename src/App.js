import HomePage from "./components/Home/HomePage";
import styles from "./App.module.css";

export default function App () {  
	return (
		<div className={styles.wrapper}>
			<div className={styles.container}>
				<h1>Hacker News Blog</h1>
				<HomePage/>
			</div>
		</div>
	)
}
import HomePage from "./components/Home/HomePage";
import styles from "./App.module.css";

export default function App () {  
	return (
		<>
			<h1 className={styles.heading}>HNPWA</h1>
			<div>
				<HomePage/>
			</div>
		</>
	)
}
import styles from "./FoodInput.module.css";
const Foodinput=()=>{
    const handleonchange=(event)=>{
        console.log(event.target.value);
    }
return <input type="text" placeholder="Enter food
 items here"
 className={styles.Foodinput}
 onChange={handleonchange} />
}
export default Foodinput;
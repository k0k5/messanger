import styles from './regPage.module.css'



export const RegPage = () =>{
return(
    <>
    <Back></Back>
    </>
)
}


const Back = () =>{

    return(
        <div className={styles.main_window}>
            <div className={styles.registration}><p className={styles.reg}>Registration</p></div>
            <div className={styles.add_avatar}><button className={styles.add}><img src=".\src\assets\Plus circle.png" alt=""/></button></div>
            <div className={styles.for_reg}>
                <div className={`${styles.name_for_input} ${styles.nfi1}`}><div className={styles.name}><p className={styles.n}>Username</p></div><input className={styles.input} type="text"/></div>
                <div className={styles.name_for_input}><div className={styles.name}><p className={styles.n} >Password</p></div><input className={styles.input} type="text"/></div>
                <div className={`${styles.name_for_input} ${styles.nfi3}`}><div className={styles.name}><p className={styles.n}>Password</p></div><input className={styles.input} type="text"/></div>
            </div>
        <button className={styles.register}><p className={styles.reg_but}>REGISTER</p></button>
        </div>
    )
}


        
        
    
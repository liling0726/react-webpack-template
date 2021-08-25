import React,{ useState } from 'react';
import styles from './index.module.less';

export default ()=>{
    const [flag,setFlag] = useState(false)
    return <>
        <div className={styles.test} onClick={()=>{setFlag((state)=>!state)}}>text</div>
        <If condition={flag}>
            <div>flag</div>
        </If>
    </>
}
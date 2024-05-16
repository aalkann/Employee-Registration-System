import { useRef } from 'react'
import styles from './EmployeeForm.module.css'
import { useState } from 'react'

export default function EmployeeForm() {

    const [name,setName] = useState('')
    const [title,setTitle] = useState('')
    const [address,setAddress] = useState('')
    const [salary,setSalary] = useState(0)

    function savePerson(){
        // Send request to the api
        console.log(name,title,address,salary)
        
    }

    return <div className={styles['form-container']}>
        <form className={styles['form']}>
            <h1>Employee</h1>
            <div className={styles['input-box']}>
                <input onChange={(e)=>{setName(e.target.value)}} 
                type="text" value={name} placeholder='Name...'/>
            </div>
            <div className={styles['input-box']}>
                <input onChange={(e)=>{setTitle(e.target.value)}} 
                type="text" placeholder='Title...'/>
            </div>
            <div className={styles['input-box']}>
                <input onChange={(e)=>{setAddress(e.target.value)}} 
                type="text" placeholder='Address'/>
            </div>
            <div className={styles['input-box']}>
                <input onChange={(e)=>{setSalary(e.target.value)}} 
                type="number" placeholder='Salary'/>
            </div>
            <div >
            <button onClick={savePerson} type='button' className={styles['form-create-button']}>Create</button> 
            </div>
        </form>
    </div>
}


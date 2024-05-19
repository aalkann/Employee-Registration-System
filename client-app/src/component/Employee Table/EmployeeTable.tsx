import styles from './EmployeeTable.module.css'
import { useEffect, useState } from 'react'
import { getAllEmployees,deleteEmployee } from '../../api/EmployeeService'
import { Employee } from '@dataTypes/Employee'

interface Error{
    employeeId: number,
    message: string,
}

export default function EmployeeTable() {
    const [data, setData] = useState<Employee[]>([])
    const [isLoading,setIsLoading] = useState(false)
    const [error,setError] = useState<Error>()

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(true)
        }, 1000);
        
        getAllEmployees()
        .then(data => setData(() => data))
        .then(()=>{
            setIsLoading(false)
            clearTimeout(timer)
        })
    }, [])

    const handleDelete = async (id: number) => {
        await deleteEmployee(id)
        .then((isSuccess)=>{
            if(isSuccess){
                const filteredData = data.filter((e)=>e.id !== id)
                setData(filteredData)
                return 
            }
            setError({employeeId:id,message:"Unsuccessful delete operation"})
            setTimeout(() => {
                setError(undefined)
            }, 2000);
        })

    }

    if(isLoading){
        return (
            <div className={styles['loading-message']}>Person table is loading...</div>
        )
    }

    return <div className={styles['table-container']}>
        <table className={styles['table']}>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Title</th>
                    <th>Address</th>
                    <th>Salary</th>
                </tr>
            </thead>
            <tbody>
                {data.map((e) =>{
                    if(error && error.employeeId === e.id)
                        return <tr>
                            <td colSpan={4} className={styles['row-error-message']}>{error.message}</td>
                        </tr>
                    else
                    return <tr key={e.id}>
                        <td>{e.name}</td>
                        <td>{e.title}</td>
                        <td>{e.address}</td>
                        <td>{e.salary}</td>
                        <td className={styles['row-delete-button']}>
                            <button onClick={() => handleDelete(e.id)} >X</button>
                        </td>
                    </tr>
                    }
                )}
            </tbody>
        </table>
    </div>
}

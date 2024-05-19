import styles from './EmployeeForm.module.css'
import { useNavigate } from 'react-router-dom'
import { saveEmployee } from '../../api/EmployeeService'
import { SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Employee } from '@dataTypes/Employee.ts'

const schema = z.object({
    name: z.string().min(1,{message:'Name is required'}),
    title: z.string().min(1,{message:'Title is required'}),
    address: z.string().min(1,{message:'Address is required'}),
    salary: z.coerce.number().min(0,{message:'Salary must be non-negative value'})
})

type FormFields = Employee

export default function EmployeeForm() {
    const navigate = useNavigate()
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting,isSubmitSuccessful },
    } = useForm<FormFields>({
        defaultValues: {},
        resolver:zodResolver(schema)
    })

    const onSubmit:SubmitHandler<FormFields> = async (data) =>{
        console.log(data)
        await saveEmployee({...data})
    }

    if(isSubmitSuccessful){

        setTimeout(()=>{
            navigate('/monitoring')
        },2000)

        return (
            <div>
                <p>Operation Successfull 🙂</p>
                <p>Redicrecting to monitoring page...</p>
            </div>
        )

    }


    return <div className={styles['form-container']}>
        <form className={styles['form']} onSubmit={handleSubmit(onSubmit)}>
            <h1>Employee</h1>
            
            <div className={styles['input-box']}>
                <input {...register('name')} type="text" placeholder='Name...' />
            </div>
            {errors.name && errors.name.message}

            <div className={styles['input-box']}>
                <input {...register('title')} type="text" placeholder='Title...' />
            </div>
            {errors.title && errors.title.message}
            
            <div className={styles['input-box']}>
                <input {...register('address')} type="text" placeholder='Address' />
            </div>
            {errors.address && errors.address.message}

            <div className={styles['input-box']}>
                <input {...register('salary')} type="number" placeholder='Salary' />
            </div>
            {errors.salary && errors.salary.message}

            <div >
                <button disabled={isSubmitting} type='submit' className={styles['form-create-button']}>
                    {isSubmitting ? 'Submitting...' : 'Create'}
                </button>
            </div>
            {errors.root && errors.root.message}
        </form>
    </div>
}


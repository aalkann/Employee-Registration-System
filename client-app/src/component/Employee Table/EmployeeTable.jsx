import styles from './EmployeeTable.module.css'
// import sampleImage from '../../assets/img1.jpg'
export default function EmployeeTable() {
    const data = [
        { id: 1, name: 'Ahmet', title: 'Software Engineer',  address: 'Çanakkale', salary: '70000' },
        { id: 2, name: 'Mahmut', title: 'IK',  address: 'Eskişehir', salary: '50000' },
        { id: 3, name: 'Yakub', title: 'Mechanical Engineer',  address: 'Konya', salary: '80000' },
        { id: 4, name: 'Yahya', title: 'Electrical Engineer',  address: 'Denizli', salary: '20000' },
    ]

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
                {data.map((e) =>
                    <tr>
                        <td>{e.name}</td>
                        <td>{e.title}</td>
                        <td>{e.address}</td>
                        <td>{e.salary}</td>
                    </tr>
                )}
            </tbody>
        </table>
    </div>
}

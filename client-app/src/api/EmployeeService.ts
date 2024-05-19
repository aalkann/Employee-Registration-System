import { Employee } from '@dataTypes/Employee'

const API_URL = 'http://localhost:8080/employee'

const HEADERS = {
    "Content-Type": "application/json",
}

export const getAllEmployees = async (): Promise<Employee[]> => {
    try {
        const response = await fetch(API_URL, { headers: HEADERS })
        if (!response.ok)
            throw new Error(`HTTP error! status: ${response.status}`);

        const data: Employee[] = await response.json();
        return data
    } catch (error) {
        console.error('Failed to fetch employees:', error);
        return []
    }
}



export const saveEmployee = async (data: Employee) => {
    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: HEADERS
        });

        if (!response.ok) {
            const errorMessage = await response.text()
            console.error(`Exception while saving employee: ${response.status} - ${errorMessage}`);
            return false;
        }

        return true
    } catch (error) {
        console.error('Exception while saving employee:', error);
        return false;
    }

}

export const deleteEmployee = async (id: number) => {
    try {        
        const response = await fetch(`${API_URL}/${id}`, {
            method: 'DELETE',
            headers: HEADERS
        })

        if (!response.ok) {
            const errorMessage = response.text()
            console.error(`Exception while deleting employee: ${response.status} - ${errorMessage}`);
            return false
        }

        return true
    } catch (error) {
        console.error(`Exception while deleting employee:`, error);
        return false
    }
}


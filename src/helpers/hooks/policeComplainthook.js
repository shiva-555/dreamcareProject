import {useMutation, useQueryClient } from 'react-query';
import axios from 'axios';


let baseURL = 'http://localhost:5000';


export const useComplaint =()=>{
    const queryClient = useQueryClient();

    const addRepoliceComplaint = useMutation(async (complaint) => {
        const client = axios.create({
            baseURL: baseURL
        });
        const { data } = await client.post('/policeComplaint',complaint);
        return data;
    }
    
    );
    return {
        addRepoliceComplaint
    }
}


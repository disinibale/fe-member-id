import axios from 'axios';

export interface IAward {
    id: number;
    award_type: string;
    point_needed: number;
    name: string;
    image_url: string;
    createdAt: string;
    updatedAt: string;
  }

const api = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
})


export async function fetchSignIn()  {
    try { 
        const response = await api.post('/auth/login')

        console.log(response.data.data)
        return response.data
    } catch (err) {
        throw new Error('Error while authenticating in user! : ' + err)
    }   
}

export async function fetchAwardsData(page: number): Promise<IAward[]> {
    try {
        const response = await api.get(`/awards?page=${page}`)
        return response.data as IAward[]
    } catch (err) {
        console.log(err)
        throw new Error('Error while authenticating in user! : ' + err)
    }
}

export default api
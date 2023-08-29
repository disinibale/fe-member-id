import axios from 'axios';

export interface ISignIn {
    email: string
}

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


export async function fetchSignIn(data: ISignIn) {
    try {
        const response = await api.post('/auth/login', data)

        return response.data
    } catch (err) {
        console.log(err)
        throw err
    }
}

export async function fetchAwardsData(page: number, pointNeeded?: number, awardType?: string[]): Promise<IAward[]> {
    try {
        const params = {
            pointNeeded,
            awardType: awardType.toString(),
        }

        const response = await api.get(`/awards?page=${page}`, { params, headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
        } })
        return response.data as IAward[]
    } catch (err) {
        console.log(err)
        throw new Error('Error while getting data! : ' + err)
    }
}

export default api
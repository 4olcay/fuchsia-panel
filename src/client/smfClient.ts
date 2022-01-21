import axios, { AxiosError, AxiosInstance, AxiosResponse } from 'axios';

export class SmfClient {
    private readonly client: AxiosInstance;

    constructor() {
        this.client = axios.create({
            baseURL: process.env.VUE_APP_SMF_API,
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }

    public async validateToken(token: string): Promise<[AxiosResponse | null, AxiosError | null]> {
        try {
            const response = await this.client.get('/auth/validate-token', { headers: { 'token': token } });
            return [response, null];
        } catch (error) {
            return [null, error as AxiosError];
        }
    }
}

export const smfClient = new SmfClient();
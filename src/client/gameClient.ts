import axios, { AxiosError, AxiosInstance, AxiosResponse } from 'axios';

export class GameClient {
    private readonly client: AxiosInstance;

    constructor() {
        this.client = axios.create({
            baseURL: process.env.VUE_APP_GAME_API,
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }

    public async checkIsUserHaveCharApp(token: string): Promise<[AxiosResponse | null, AxiosError | null]> {
        try {
            const response = await this.client.get('/character/active-application', { headers: { 'token': token } });
            return [response, null];
        } catch (error) {
            return [null, error as AxiosError];
        }
    }
    public async getCharApplicationDetails(token: string, name: string): Promise<[AxiosResponse | null, AxiosError | null]> {
        try {
            const response = await this.client.get('/character/application-details?name=' + name, { headers: { 'token': token } });
            return [response, null];
        } catch (error) {
            return [null, error as AxiosError];
        }
    }
}

export const gameClient = new GameClient();
import { API_BASE_URL } from '@/services/api/constants';
import { ofetch } from 'ofetch';

export const fetcher = ofetch.create({ baseURL: API_BASE_URL });

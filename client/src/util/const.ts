import { CreateAxiosDefaults } from 'axios';

const API_ENDPOINT = 'http://localhost:3000';

export const config: CreateAxiosDefaults<any> = {
	baseURL: API_ENDPOINT,
};

export const routes: {
	delete: string;
	get: string;
	getByTag: string;
	post: string;
	put: string;
} = {
	delete: '/deleteImage',
	get: '/getAllImgs',
	getByTag: '/findImgByTag',
	post: '/addImage',
	put: '/putImage',
};

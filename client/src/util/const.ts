import { CreateAxiosDefaults } from 'axios';

const API_ENDPOINT = 'http://20.14.218.233:3100';

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

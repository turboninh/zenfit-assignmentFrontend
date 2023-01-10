import axios from 'axios';

const client = axios.create({
	baseURL: '/',
});

export const CancelToken = axios.CancelToken;
export const isCancel = axios.isCancel;

export function fetchPlans(clientId: string) {
	return client.get(`/api/v3/meal/client/${clientId}`);
}

export function fetchRecipes(params, options = {}) {
	return client.get('/api/recipe/get-recipes', {
		params,
		...options,
	});
}

export function deletePlan(params) {
	return client.delete('/api/v3/meal/plan/delete', { params });
}

export function deleteMeal(params) {
	return client.delete('/api/v3/meal', { params });
}

type FetchPdfOptions = {
	params: {
		cancelToken: string;
	};
};

export function fetchPdf(plan, options: FetchPdfOptions) {
	return client.get(`/pdf/exportPlansPdfMealClient/${plan.id}`, {
		...options,
		params: {
			name: `${plan.client_name}-mealplan`,
			...(options.params || {}),
			varsion: 2,
		},
	});
}

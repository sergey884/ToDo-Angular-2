import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
	createDb() {
		const todos = [
			{
				id: 1,
				title: 'Learn Angular 2',
				completed: true
			},
			{
				id: 2,
				title: 'Learn react/redux',
				completed: false
			},
			{
				id: 3,
				title: 'Learn typescript',
				completed: false
			}
		];
		return {
			todos
		}
	}
}
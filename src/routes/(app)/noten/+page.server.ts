export const load = async () => {
	return {
		moduleGrades: [
			{
				module: {
					name: 'Mathematik für Informatiker',
					credits: 10
				},
				exams: [
					{
						date: '10.12.2023',
						announcement_date: '10.12.2024',
						average: '2,2',
						points: 98,
						grade: '1,1',
						comment: 'Woran hats gelegen?'
					}
				]
			},
			{
				module: {
					name: 'Informatik',
					credits: 10
				},
				exams: [
					{
						date: '10.12.2023',
						announcement_date: '10.12.2024',
						average: '2,2',
						points: 98,
						grade: '1,1',
						comment: 'Woran hats gelegen?'
					},
					{
						date: '10.12.2023',
						announcement_date: '10.12.2024',
						average: '2,2',
						points: 98,
						grade: '1,1',
						comment: 'Woran hats gelegen?'
					}
				]
			}
		]
	};
};

export const load = async ({ locals }) => {
	const schedule = await locals.client.GET('/schedule/');
	console.log(schedule.data);
	return {
		lectures: schedule.data!.map((lecture) => ({
			start: new Date(lecture.start * 1000),
			end: new Date(lecture.end * 1000),
			title: {
				html: `
                    <div>
                        <a class="hover:underline font-bold" href='/meine-module/${lecture.module_id}'>
                            ${lecture.module_name}
                        </a>
                    </div>
                    <div>
                        ${lecture.lecturer_name}
                    </div>
                    <div>
                        ${lecture.room}
                </div>
            `
			}
		}))
	};
};

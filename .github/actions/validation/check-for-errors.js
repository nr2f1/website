/* 
This script checks workflow jobs' exit status via GitHub API in JavaScript.
If a job fails or was cancelled, it will set the CI to fail. If all jobs are OK will pass
It is invoked from the workflow file `pipeline.yml` and is consuming 
`actions/github-script@v7` https://github.com/actions/github-script/tree/main 
*/

module.exports = ({ core, jobs }) => {
	const jobResults = Object.entries(jobs).map(([job, { result }]) => ({
		job,
		result,
	}));

	const jobErrors = jobResults.filter(
		({ result }) => result === "failure" || result === "cancelled",
	);

	core.info("Job results:");

	for (const { job, result } of jobResults) {
		core.info(`${job}: ${result}`);
	}

	if (jobErrors.length > 0) {
		const jobErrorString = JSON.stringify(jobErrors);
		core.setFailed(`Errors occurred in these jobs: ${jobErrorString}`);
	}
};

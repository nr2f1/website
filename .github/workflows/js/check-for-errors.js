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
		core.info(`  ${job}: ${result}`);
	}

	if (jobErrors.length > 0) {
		const jobErrorString = JSON.stringify(jobErrors);
		core.setFailed(`Errors occurred in these jobs: ${jobErrorString}`);
	}
};

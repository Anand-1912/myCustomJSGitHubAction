const core = require("@actions/core");
const github = require("@actions/github");

try {
  // Access input variables
  const myInput = core.getInput("myInput");

  // Your action logic here
  console.log(`Input value: ${myInput}`);

  // Set an output variable (if needed)
  // core.setOutput('myOutput', 'Output value');
} catch (error) {
  core.setFailed(error.message);
}

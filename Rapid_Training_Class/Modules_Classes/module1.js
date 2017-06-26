// import and export commands are the basic way to communicate back and forth from differetnt modules.

/* ===================
	1. Module Basics:
   =================== */
/* EX 1:
	export let id = 12;
*/

// == EX 2,3,4
/*export let projectId = 12;
let projectName = 'BuildIt';
export default projectName;*/

/*// EX: 5
let projectId = 99;
let projectName = 'BuildIt';
// explicityly exporting a default
export { projectId as default, projectName };*/

/*// Ex: 6: importing using the wildcard
let projectId = 99;
let projectName = 'BuildIt';
// explicityly exporting a default
export { projectId, projectName };
*/

/* ===================
2. Named Exports:
   =================== */

/*// Ex1:
exrpot let projectId = 99;
*/

/*// Ex2,3:
export let project = { projectId: 99 };
export function showProject() {
	console.log(project.projectId);
}
*/

/*// Ex4:
export function showProject() { 
	console.log('In original'); 
}
export function updateFunction() {
	showProject = function() {
		console.log('In updated');
	}
}
*/

let tool = '';
// tool = 'marker';
// let writeUtensil = tool || 'pen';
// if (tool) {
//     writeUtensil = tool;
// }
// else {
//     writeUtensil = 'pen';
// }
tool 
    ? writeUtensil = tool 
    : writeUtensil = 'pen';
console.log(`The ${writeUtensil} is for you`);
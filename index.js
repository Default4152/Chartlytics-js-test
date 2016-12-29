const resources = [{
  type: 'Person',
  order: 1,
  name: 'Brian',
}, {
  type: 'Place',
  order: 2,
  name: 'Ohio',
}, {
  type: 'Place',
  order: 12,
  name: 'Ohio',
}, {
  type: 'Person',
  order: 14,
  name: 'Sarah',
}, {
  type: 'Person',
  order: 199,
  name: 'Sam',
}, {
  type: 'Person',
  order: 19,
  name: 'Eric',
}, 
{
  type: 'Place',
  order: 20,
  name: 'Home',
}];

const convertedData = convertData(resources);
const mainTable = document.getElementsByClassName('mainTable')[0];
convertedData.forEach((e) => {
	if (e.people) mainTable.innerHTML += "<tr>" + "<td>" + e.type + "</td>" + "<td>" + e.order + "</td>" + "<td>" + e.people.join(", ") + "</td>" + "</tr>"
	else mainTable.innerHTML += "<tr>" + "<td>" + e.type + "</td>" + "<td>" + e.order + "</td>" + "<td>" + e.name + "</td>" + "</tr>"
});

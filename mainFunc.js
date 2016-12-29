const convertData = (resources) => {
    const ascendingResources = resources.sort((a, b) => a.order - b.order);
    return ascendingResources.reduce((arr, curr, i) => {
        let next = ascendingResources[(i + 1) % ascendingResources.length];

        if (curr.type === 'Person' && next.type === 'Person' && ascendingResources.indexOf(next) !== 0) {
            arr.push({
                type: 'Person',
                order: next.order,
                people: [curr.name, next.name]
            });
            ascendingResources.splice(i, 1);
        } else if (curr.type !== 'Person') {
            arr.push(curr);
        } else if (curr.type === 'Person') {
            arr.push({
                type: 'Person',
                order: curr.order,
                people: [curr.name]
            });
        }

        return arr;
    }, []);
}

export const greating = ( name = '' ) => {

    const h1 = document.createElement('h1');
    h1.innerHTML = (`Welcome, ${name}.`);

    document.body.append(h1);
}
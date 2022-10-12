const graduate = credential => fullName => `${fullName} ${credential}`;

const medicalSchool = graduate('M.D.');
const lawSchool = graduate('Esq.');

medicalSchool('Joshua Aaron Baker');
lawSchool('Joshua Aaron Baker');

console.log(medicalSchool('Joshua Aaron Baker'));
console.log(lawSchool('Joshua Aaron Baker'));

console.dir(medicalSchool);
console.dir(lawSchool);

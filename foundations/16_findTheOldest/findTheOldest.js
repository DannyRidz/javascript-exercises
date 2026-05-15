const findTheOldest = function (people) {
    const currentYear = new Date().getFullYear();

    return people.reduce((oldest, person) => {
        const oldestEndYear = oldest.yearOfDeath || currentYear;
        const personEndYear = person.yearOfDeath || currentYear;

        const oldestAge = oldestEndYear - oldest.yearOfBirth;
        const personAge = personEndYear - person.yearOfBirth;

        return personAge > oldestAge ? person : oldest;
    });
};

// Do not edit below this line
module.exports = findTheOldest;

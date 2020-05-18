import clubs from './clubs.js';

class DataSource {
    static searchClub = keyword => {
        return new Promise((success, failed) => {
            const filteredClubs = clubs.filter(club => club.name.toUpperCase().includes(keyword.toUpperCase()));

            setTimeout(() => {
                filteredClubs.length ? success(filteredClubs) : failed(`${keyword} is not found`);
            }, 1000)
        })
    }
}

export default DataSource;

// class DataSource {
//     constructor(onSuccess, onFailed) {
//         this.onSuccess = onSuccess;
//         this.onFailed = onFailed;
//     }

//     searchClub = keyword => {
//         const filteredClubs = clubs.filter(club => club.name.toUpperCase().includes(keyword.toUpperCase()));

//         filteredClubs.length ? this.onSuccess(filteredClubs) : this.onFailed(`${keyword} is not found`);
//     }
// }
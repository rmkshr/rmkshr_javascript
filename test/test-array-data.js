const arrayData = [
    {
        OrgEId: 'John-hopkins-90765',
        'First Name': 'Willie',
        'Last name': 'Nelson',
        Email: 'willie@gmail.com'
    },
    {
        OrgEId: 'John-hopkins-90765',
        'First Name': 'will',
        'Last name': 'smith',
        Email: 'will@gmail.com'
    },
    {
        OrgEId: 'John-hopkins-90765',
        'First Name': 'leo',
        'Last name': 'decaprio',
        Email: 'leo@gmail.com'
    },
    {
        OrgEId: 'John-hopkins-90765',
        'First Name': 'adam',
        'Last name': 'sandler',
        Email: 'adam@gmail.com'
    },
    {
        OrgEId: 'John-hopkins-90765',
        'First Name': 'fluffy',
        'Last name': 'iglesias',
        Email: 'fluffy@gmail.com'
    },
    {
        OrgEId: 'John-hopkins-90765',
        'First Name': 'stevie',
        'Last name': 'wonder',
        Email: 'stevei@gmail.com'
    }
];

const updateFileData = function (arrayData) {
    return new Promise((resolve, reject) => {
        let finalDbData = [];
        arrayData.forEach(data => {
            const  updatedData = {
                _id : data.Email,
                orgEid : data.OrgEId,
                firstName : data["First Name"],
                lastName : data["Last name"],
                email : data.Email,
                isRegistered : false
            }
            finalDbData.push(updatedData);
        });
        resolve(finalDbData);
    });
}


updateFileData(arrayData).then(result => console.log(result));


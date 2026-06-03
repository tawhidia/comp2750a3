const admin = require('firebase-admin');
const serviceAccount = require('./serviceAccountKey.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

async function resetUsers() {
    const users = [
        {
            uid: 'quay0sl62QY9Q0izjTiDytxkIlW2',
            password: '12345678'
        },
        {
            uid: 'wvdScgELSyTt2NPxE35JD2zwHaU2',
            password: '12345678'
        },
        {
            uid: 'J7nKx28qYJS462OhMrmyzoFUBLT2',
            password: '12345678'
        }
    ];

    for (const user of users) {
        await admin.auth().updateUser(user.uid, {
            password: user.password
        });

        console.log(`Updated: ${user.uid}`);
    }
}

resetUsers()
.then(() => process.exit())
.catch(console.error);

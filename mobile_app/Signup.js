const {google} = require('googleapis');
const oauth2 = google.oauth2('v2');

async function main() {
    const auth = new google.auth.GoogleAuth({
        scopes: [],
    });

    const authClient = await auth.getClient();
    google.options({auth: authClient});

    const res = await oauth2.tokeninfo({
        access_token: 'placeholder-value',
        id_token: 'placeholder-value',
    });

    console.log(res.data);
}

main().catch(e=> {
    console.error(e);
    throw e;
});
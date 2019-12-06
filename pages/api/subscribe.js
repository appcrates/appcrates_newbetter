require('isomorphic-fetch');

const LIST_ID = 'b29d6f1e61'; // MailChimp Audience
const key = `Basic ${Buffer.from(`apikey:${process.env.MAILCHIMP_API_KEY}`).toString('base64')}`;

const subscribe = ( email ) => {

    var data = {
        "email_address": `${email}`,
        "status": "subscribed",
        // "merge_fields": {
        //     "FNAME": "Urist",
        //     "LNAME": "McVankab"
        // }
    };

    return new Promise((resolve, reject) => {
        fetch(`https://us18.api.mailchimp.com/3.0/lists/${LIST_ID}/members/`,
            {
                headers : { 'Authorization': key },
                method: 'POST',
                mode: 'no-cors',
                body: JSON.stringify(data)
            })
            .then(response => {
                return response.json()})
            .then(data => {
                console.log(data);
            }).catch(error => console.log(error))
    })};


export default async (req, res) => {
    if (req.method === 'POST') {
        res.setHeader('Content-Type', 'application/json');
        res.statusCode = 200;
        res.send(req);
        await subscribe(req.body);
        res.end();
    } else {
        res.setHeader('Content-Type', 'application/json');
        res.statusCode = 200;
        res.end(JSON.stringify({name: 'GET received'}))
    }
}

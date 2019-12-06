export default (req, res) => {
    if (req.method === 'POST') {
        res.setHeader('Content-Type', 'application/json')
        res.statusCode = 200
        res.send(req);
        console.log("REQ RECEIVED")
        // console.log("rec body: ", JSON.stringify(req.body))
        console.log(typeof(req.body)) //object

        let maybej = JSON.stringify(req.body);
        console.log(typeof(maybej))
        res.end();

    } else {
        res.setHeader('Content-Type', 'application/json')
        res.statusCode = 200
        res.end(JSON.stringify({name: 'Nextjs'}))
    }
}

// writeReviewToDb = () => {
//
// };
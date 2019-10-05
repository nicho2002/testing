var stream = require('stream');
var fs = require('fs'); 
const https = require('https');
const path = require('path');
 
exports.doDownload = (req, res) => {
	
	var obj = JSON.parse(fs.readFileSync(__dirname + '/challenge-1-in.jsonl', 'utf8'));

	const csvFields = ['order_id', 'order_date_value', 'average_unit_price', 'distinct_unit_count', 'total_unit_count', 'customer_state'];
		const json2csvParser = new Json2csvParser({ csvFields });
		const csv = json2csvParser.parse(obj);

		fs.writeFile('out.csv', csv, function(err) {
			if (err) throw err;
			console.log('file saved');
		});
	res.status(200).send({
            status: false,
            status_code: 500,
            message: "Error!",
            data: []
    });
}
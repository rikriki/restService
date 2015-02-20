var express = require('express');
var router = express.Router();
var mysql = require('mysql');
 
var auth = require('./auth.js');
var products = require('./products.js');
var inventories = require('./inventories.js');
var user = require('./users.js');
 

var connection = mysql.createConnection({
 	host:'localhost',
 	user:'root',
 	password:'',
 	database:'uniforms'
});


connection.connect(function(err){
 	if(err){
 		console.error('error connecting' + err.stack)
 	}else{
 		console.error('Connected ID' + connection.threadId)
 	}
});

		
			/*var  items =[{
			                "itemName":"Shoes EK (M) Conker Brown Slip-on 06H",
			                "red":"Due to replacement",
			                "amber":"Out of Stock"
			             },
			             {
			                "itemName":"Shoes Slip-on 06H",
			                 "red":"Due to replacement" 
			                
			             },
			             {
			                "itemName":"Shoes EK (M) Conker Red Slip-on 06H 1",
			                "red":"Due to replacement",
			                "amber":"Out of Stock"
			             },
			             {

			                "itemName":"Shoes EK (M) Conker Brown Slip-on 06H2",
			                "red":"Due to replacement",
			                "amber":"Out of Stock"
			             },
			             {
			                "itemName":"Shoes Slip-on 06H3",
			                 "red":"Due to replacement" 
			                
			             },
			             {
			                "itemName":"Shoes EK (M) Conker Red Slip-on 06H4",
			                "red":"Due to replacement",
			                "amber":"Out of Stock"
			             },
			             {
			                "itemName":"Shoes EK (M) Conker Brown Slip-on 06H5",
			                "red":"Due to replacement",
			                "amber":"Out of Stock"
			             },
			             {
			                "itemName":"Shoes Slip-on 06H7",
			                 "red":"Due to replacement" 
			                
			             },
			             {
			                "itemName":"Shoes EK (M) Conker Red Slip-on 06H7",
			                "red":"Due to replacement",
			                "amber":"Out of Stock"
			             },
			             {
			                "itemName":"Shoes EK (M) Conker Brown Slip-on 06H9",
			                "red":"Due to replacement",
			                "amber":"Out of Stock"
			             },
			             {
			                "itemName":"Shoes Slip-on 06H8",
			                 "red":"Due to replacement" 
			                
			             },
			             {
			                "itemName":"Shoes EK (M) Conker Red Slip-on 06H12",
			                "red":"Due to replacement",
			                "amber":"Out of Stock"
			             },
			             {
			                "itemName":"Shoes EK (M) Conker Brown Slip-on 06H13",
			                "red":"Due to replacement",
			                "amber":"Out of Stock"
			             },
			             {
			                "itemName":"Shoes Slip-on 06H14",
			                 "red":"Due to replacement" 
			                
			             },
			             {
			                "itemName":"Shoes EK (M) Conker Red Slip-on 06H15",
			                "red":"Due to replacement",
			                "amber":"Out of Stock"
			             }];
			items.forEach(function(element,index){
				connection.query('INSERT INTO inventories SET ?', {itemName:element.itemName,red:element.red,amber:element.amber},function(err,result){
					if(err) throw err;
					console.log(result.insertId);
				});
			});*/
		


connection.query('Select * from inventories',function(err,rows){
	rows.some(function(element,index){
		console.log("username" + element.itemName );
		
	});
});

/*
* Routes that can be accessed by any one
*/
router.post('/login', auth.login);
 
/*
* Routes that can be accessed only by autheticated users
*/
router.get('/api/v1/products', products.getAll);
router.get('/api/v1/product/:id', products.getOne);
 	router.post('/api/v1/product/', products.create);
router.put('/api/v1/product/:id', products.update);
router.delete('/api/v1/product/:id', products.delete);
 
/*
* Routes that can be accessed only by authenticated & authorized users
*/
router.get('/api/v1/admin/users', user.getAll);
router.get('/api/v1/admin/user/:id', user.getOne);
router.post('/api/v1/admin/user/', user.create);
router.put('/api/v1/admin/user/:id', user.update);
router.delete('/api/v1/admin/user/:id', user.delete);
 

/*
* Routes for inventories that can be accessed only by autheticated users
*/
router.get('/api/v1/inventories', inventories.getAll);
router.get('/api/v1/inventories/:id', inventories.getOne);
router.post('/api/v1/inventories/', inventories.create);
router.put('/api/v1/inventories/:id', inventories.update);
router.delete('/api/v1/inventories/:id', inventories.delete);
 


 
module.exports = router;
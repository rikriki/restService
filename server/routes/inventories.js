var inventories = {
 
  getAll: function(req, res) {
    var allProducts = data; // Spoof a DB call
    res.json(allProducts);
  },
 
  getOne: function(req, res) {
    var id = req.params.id;
    var product = data.items[0]; // Spoof a DB call
    res.json(product);
  },
 
  create: function(req, res) {
    var newProduct = req.body;
    data.push(newProduct); // Spoof a DB call
    res.json(newProduct);
  },
 
  update: function(req, res) {
    var updateProduct = req.body;
    var id = req.params.id;
    data[id] = updateProduct // Spoof a DB call
    res.json(updateProduct);
  },
 
  delete: function(req, res) {
    var id = req.params.id;
    data.splice(id, 1) // Spoof a DB call
    res.json(true);
  }
};



var data = {
      
             "items":[
             {
                "itemName":"riki Shoes EK (M) Conker Brown Slip-on 06H",
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
             }]
        };
 
module.exports = inventories;
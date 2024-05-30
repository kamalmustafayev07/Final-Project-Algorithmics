const cors = require('cors');
const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');

const HOST = 3000;

const app = express();

app.use(cors());
app.use(bodyParser.json());

fs.readFile('./products.json', 'utf8', (err, data) => {
    
    if (!err) {
        app.get('/products', (req, res) => {
            let products = JSON.parse(data);
            let { limit, offset } = req.query;
            limit = parseInt(limit);
            offset = parseInt(offset);

            limit = limit ? limit : products.length;
            offset = offset ? offset : 0;

            const paginatedProducts = products.slice(offset, offset + limit);
            res.json({ products: paginatedProducts, response: true });
        });

        app.get('/products/name/:search',(req,res)=>{
            let products = JSON.parse(data);
            let searchingTitle=req.params.search;
            products=products.filter((item)=>item.title.includes(searchingTitle));
            if(products.length!=0){
                res.json({ products: products, response: true });
            }
            else{
                res.json({message:'There is no product with that name',response:false});
            }
        });

        app.get('/products/search/:id', (req, res) => {
            let products = JSON.parse(data);
            let searchingId = req.params.id;
            let searchingItem = products.find((item) => item.id == searchingId);
            if (searchingItem) {
                res.json({products: searchingItem, response: true });
            } else {
                res.json({ message: 'There is no item with this id', response: false });
            }
        });

        app.get('/products/categories/', (req, res) => {
            let categories=["men's clothing","electronics", "women's clothing", "jewelry"];
            res.json({categories:categories,response:true});
        });


        app.get('/products/category/:category', (req, res) => {
            let products = JSON.parse(data);
            let searchingCategory = req.params.category;
            let { limit, offset } = req.query;
            limit = parseInt(limit);
            offset = parseInt(offset);

            limit = limit ? limit : products.length;
            offset = offset ? offset : 0;

            const categoryProducts = products.filter((item) => item.category == searchingCategory);
            const paginatedCategoryProducts = categoryProducts.slice(offset, offset + limit);
            res.json({products:paginatedCategoryProducts,response:true});
        });

        app.get('/products/bestsellers',(req,res)=>{
            let products = JSON.parse(data);
            let { limit, offset } = req.query;
            limit = parseInt(limit);
            offset = parseInt(offset);

            limit = limit ? limit : products.length;
            offset = offset ? offset : 0;

            const bestsellerProducts = products.filter((item) => item.bestSeller===true);
            const paginatedCategoryProducts = bestsellerProducts.slice(offset, offset + limit);
            res.json({products:paginatedCategoryProducts,response:true});
        })
    }
});

app.listen(HOST, (err) => {
    if (!err) {
        console.log('localhost:', HOST);
    }
});

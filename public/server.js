
const express = require('express')
const app = express()
const port = 3000
const wooConfig =require( './wooConfig' );

const WooCommerceAPI = require('woocommerce-api');
const { response } = require('express');

const WooCommerce = new WooCommerceAPI({
    url: wooConfig.siteUrl,
    consumerKey: wooConfig.consumerKey,
    consumerSecret: wooConfig.consumerSecret,
    wpAPI: true,
    version: 'wc/v1'
  });

  
app.get('/', (req, res) => {
    res.send('Hello World!')
    const server = express();
    WooCommerce.get("products")
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.log(error.response.data);
    });
  })
  
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
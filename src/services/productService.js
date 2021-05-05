//import to use axios library for http get/post requests
//import axios from "axios";


var data = [
    {
      id: "5f40a6baac77a903d8f682c6",
      price: 25.25,
      stock: 13,
      title: "Bamboo Serving Trays",
      image: "item1img1.png",
      discount: 5,
      category: "Serving Trays",
    },
    {
      id: "5f40a6ba41d9e5044ced586c",
      price: 35.00,
      stock: 21,
      title: "Resin Garden Tile",
      image: "item2img1.png",
      discount: 10,
      category: "Resin Tiles",
    },
    {
      id: "5f40a6baa9e6e22fa1d5fac4",
      price: 30.95,
      stock: 20,
      title: "Essential Oil Base",
      image: "item3img1.png",
      discount: 0,
      category: "Oil Holders",
    },
    {
      id: "5f40a6baf0f068a497921d29",
      price: 40.00,
      stock: 10,
      title: "Essential Oil Holder",
      image: "item4img1.png",
      discount: 0,
      category: "Oil Holders",
    },
    {
      id: "5f40a866337a3bb00793da52",
      price: 45.50,
      stock: 34,
      title: "Tidal Wave Serving Tray",
      image: "item5img1.png",
      discount: 4,
      category: "Serving Trays",
    },
    {
      id: "5f40a866ea0a04e6891b7084",
      price: 28.98,
      stock: 14,
      title: "Square Oil Holders",
      image: "item6img1.png",
      discount: 0,
      category: "Oil Holders",
    },
    {
      id: "5f40a866ea0a04e6891212333",
      price: 32.00,
      stock: 11,
      title: "Marbled Serving Trays",
      image: "item1img2.png",
      discount: 12,
      minimum: 6,
      category: "Serving Trays",
    },
    {
      id: "5f40a866ea0a04e68911231328",
      price: 30.95,
      stock: 11,
      title: "Resing Serving Trays",
      image: "item1img3.png",
      discount: 12,
      category: "Serving Trays",
    },
  ];

class ProductService {
  serverUrl = 'http://fsdi.azurewebsites.net/api';

    async getCatalog(){
        // connect to server and retrieve the catalog of products
        // js fetch
        //jquery $.ajax
        // the best approach axios
        // if server is not working uncomment the next line and comment the axios part
        return data;
        //axios code
      //var res = await axios.get(this.serverUrl + "/products");
      //return res.data;
    }
    async getCategories(){
      // connect to server and retrieve the catalog of products
      //use the data array for the local data
      
      var categories= [];
     //axios code
     //var cat = await this.getCatalog();
     //for (var i=0; i < cat.length; i++){
     //  categories.push(cat[i].category);
     // }
      for (var i=0; i < data.length; i++){
        categories.push(data[i].category);
      }
      var set = new Set(categories);

      categories = Array.from(set);
      categories.push("See All");
      return categories;
  }
    getProductPrice(id) {
        return 99.99;
    }

}
export default ProductService;
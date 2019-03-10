var products=[
    {
      name: "焦糖餅乾",
      img: "images/product-01.jpg",
      price: 280,
      link: ""
    },
    {
      name: "草莓馬卡龍",
      img: "images/product-02.jpg",
      price: 160,
      link: ""
    },
    {
      name: "杏仁小酥餅",
      img: "images/product-03.jpg",
      price: 320,
      link: ""
    },
    {
      name: "巧克力圓圓",
      img: "images/product-04.jpg",
      price: 120,
      link: ""
    },
  ];
  
  
  var vm = new Vue({
    el: "#app",
    data: {
      slides: [
        "images/slide-1.jpg",
        "images/slide-2.jpg",
        "images/slide-3.jpg",
        "images/slide-4.jpg"
      ],
      products: products
    }
  });
export default function handler(_req, res) {



  
    const products = [
      {
        id: 1,
        name: "Sun glasses",
        price: 210,
        image: "https://th.bing.com/th/id/OIP.XrG4925fPGIRJ_BV6y_hhAHaE8?rs=1&pid=ImgDetMain",
      },
      {
        id: 2,
        name: "Multiple glasses",
        price: 280,
        image:
          "https://th.bing.com/th/id/R.abf543b76c68b82601519a77662e32c6?rik=Wmo5nU8xSaEAIA&pid=ImgRaw&r=0",
      },
      {
        id: 3,
        name: "Black glasses",
        price: 300,
        image:
          "https://media.neimanmarcus.com/f_auto,q_auto:low,ar_4:5,c_fill,dpr_2.0,w_270/01/nm_4026227_100106_m",
      },
      {
        id: 4,
        name: "Girls glasses",
        price: 250,
        image:
          "https://i.pinimg.com/originals/22/86/97/2286973ebcc516db5d7f265b491f7671.jpg",
      },
      {
        id: 5,
        name: "Rybon glasses",
        price: 210,
        image:
          "https://th.bing.com/th/id/OIP.iMpW5BAJRHU19nbVXYnCugHaHa?rs=1&pid=ImgDetMain",
      },
      {
        id: 6,
        name: "Gucci glasses",
        price: 210,
        image:
          "https://th.bing.com/th/id/OIP.nNEhr-kLudiaEg5tuiDTPwAAAA?rs=1&pid=ImgDetMain",
      },
    ];
  
    res.status(200).json(products);
  }
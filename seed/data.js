import db from "../db/connection.js";
import Sunscreen from "../models/sunscreen.js";
import User from "../models/user.js";
import bcrypt from "bcrypt";

const insertData = async () => {
  await db.dropDatabase();

  const user1 = new User({
    username: "hidwoc",
    email: "hid@woc.com",
    password_digest: await bcrypt.hash("hsc123", 11),
  });
  await user1.save();

  const user2 = new User({
    username: "trish",
    email: "trishamarchena@gmail.com",
    password_digest: await bcrypt.hash("trisha123", 11),
  });
  await user2.save();

  const user3 = new User({
    username: "salman",
    email: "sal@man.com",
    password_digest: await bcrypt.hash("salman123", 11),
  });
  await user3.save();

  const products = [
    {
      name: "Nivea Sun Kids",
      SPF: "50",
      Price: "15.55",
      imgURL:
        "https://w7.pngwing.com/pngs/959/776/png-transparent-sunscreen-nivea-sun-after-sun-moisture-soothing-lotion-factor-de-proteccion-solar-kids-swimming-pool-thumbnail.png",
      applyTo: "body",
      category: ["kids"],
    },
    {
      name: "Hawaiian Tropic Sensitive Skin",
      SPF: "50",
      price: "9.99",
      imgURL:
        "https://w7.pngwing.com/pngs/562/224/png-transparent-sunscreen-hawaiian-tropic-silk-hydration-after-sun-lotion-hawaiian-tropic-silk-hydration-after-sun-lotion-factor-de-proteccion-solar-body-skin-cream-sunscreen-sun-tanning-thumbnail.png",
      applyTo: "body",
      category: ["sensitive skin", "every day"],
    },
    {
      name: "Dermalogica Sport Protection",
      SPF: "50",
      price: "36.00",
      imgURL:
        "https://w7.pngwing.com/pngs/691/418/png-transparent-sunscreen-dermalogica-age-smart-dynamic-skin-recovery-factor-de-proteccion-solar-sport-others-cream-sport-cosmetics-thumbnail.png",
      applyTo: "body",
      category: ["sports", "waterproof"],
    },
    {
      Name: "Hawaiian Tropic Tropical Tanning Oil",
      SPF: "6",
      price: "8.99",
      imgURL:
        "https://w7.pngwing.com/pngs/606/457/png-transparent-sunscreen-lotion-hawaiian-tropic-sun-tanning-factor-de-proteccion-solar-oil-miscellaneous-cream-perfume-thumbnail.png",
      applyTo: "body",
      category: ["tanning"],
    },
    {
      name: "Sun Bum Original",
      SPF: "15",
      price: "15.99",
      imgURL:
        "https://cdn.shopify.com/s/files/1/0053/1798/4323/products/20-40015_SB_Original_SPF_15_Lotion_8_OZ_Front_1400x1400.png",
      applyTo: "body",
      category: ["every day"],
    },
    {
      name: "Neutrogena Ultra Sheer Clear Face",
      SPF: "30",
      price: "14.99",
      imgURL:
        "https://www.vhv.rs/dpng/d/456-4561058_neutrogena-ultra-sheer-clear-face-lotion-spf30-88ml.png",
      applyTo: "face",
      category: ["every day"],
    },
  ];

  await Sunscreen.insertMany(sunscreens);
  console.log("Created users & sunscreens!");

  db.close();
};

insertData();

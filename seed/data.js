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

  const sunscreens = [
    {
      name: "Nivea Sun Kids",
      SPF: "50",
      price: "15.55",
      imgURL:
        "https://images-us.nivea.com/-/media/media-center-items/a/6/b/201744-original.png",
      applyTo: "Body",
      category: ["Kids"],
    },
    {
      name: "Hawaiian Tropic Sensitive Skin",
      SPF: "50",
      price: "9.99",
      imgURL:
        "https://bysabys.files.wordpress.com/2017/05/ht-06.png",
      applyTo: "Body",
      category: ["Sensitive Skin", "Every Day"],
    },
    {
      name: "Dermalogica Sport Protection",
      SPF: "50",
      price: "36.00",
      imgURL:
        "https://www.zestbeauty.com/media/catalog/product/cache/dbed8eb2cced7e946cc3da7fa2f43b7f/d/e/dermalogica-protection-50-sport.png",
      applyTo: "Body",
      category: ["Sports", "Waterproof"],
    },
    {
      name: "Hawaiian Tropic Tropical Tanning Oil",
      SPF: "6",
      price: "8.99",
      imgURL:
        "https://www.hawaiiantropic.ca/images/default-source/default-album/08518_y000851801-ca-sc-ht-dark-tanning-oil-240ml_resize.png?sfvrsn=c26cebfc_0",
      applyTo: "Body",
      category: ["Tanning"],
    },
    {
      name: "Sun Bum Original",
      SPF: "15",
      price: "15.99",
      imgURL:
        "https://cdn.shopify.com/s/files/1/0053/1798/4323/products/20-40015_SB_Original_SPF_15_Lotion_8_OZ_Front_1400x1400.png",
      applyTo: "Body",
      category: ["Every Day"],
    },
    {
      name: "Neutrogena Ultra Sheer Clear Face",
      SPF: "30",
      price: "14.99",
      imgURL:
        "https://cdn.shopify.com/s/files/1/0010/9304/2228/products/ultra-sheer-clear-face-sunscreen-liquid-lotion-spf30_0_0_0.png?v=1538550869",
      applyTo: "Face",
      category: ["Every Day"],
    },
  ];
  await Sunscreen.insertMany(sunscreens);
  console.log("Created users & sunscreens!");

  db.close();
};

insertData();

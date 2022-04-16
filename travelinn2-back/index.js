import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import jwt from 'jsonwebtoken';
const PORT = process.env.PORT || 6066;

const app = express();
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

mongoose.connect(
  "mongodb://localhost:27017/travelinn",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log("DB connected");
  }
);

const userSchema = new mongoose.Schema({
  userType: String,
  name: String,
  email: String,
  mobile: String,
  password: String,
});

const ownerSchema = new mongoose.Schema({
  userType: String,
  name: String,
  email: String,
  mobile: String,
  password: String,
  area: String,
  city: String,
  state: String,
  country: String,
  pincode: String,
  guestcategory: String,
  facilites: String,
  propimage: String,
  price: String,
  title: String,
  description: String,
});

const User = new mongoose.model("User", userSchema);

const Owner = new mongoose.model("Owner", ownerSchema);

app.get("/", (req, res) => {
  res.send("Welcome to Travelinn Booking System");
});

app.post("/getSearchProperty",(req,res) => {
  console.log(req.body);
  const {location, persons, guestcategory } = req.body;
   
  Owner.find({$or: [
    {
      area: location, 
    },
    {
      city:location,
    }    
  ],
  guestcategory: guestcategory,
  }).then((data) => {
    console.log(data);
    res.send(data);
  });
});

app.get("/allProperty",(req,res) => {
  
  Owner.find({}).sort({'_id':-1}).limit(5).then(data=>{
     console.log(data)
     res.send(data);
     //res.send({ message: "DataFound" });
   })

});

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  User.findOne({ email: email }, (err, user) => {
    if (user) {
      if (password === user.password) {
        const token = jwt.sign(
          {
            id:user.id,
            name: user.name,
            email: user.email,
            mobile:user.mobile,
            area:user.area
          },
          "secret123"
        );

        res.send({ message: "Login Successfull", status: "ok", user: token });

        // res.send({ message: "Login Successfull", user: user });
      } else {
        res.send({ message: "Password doesn't Match." });
      }
    } else {
      res.send({ message: "User not Registered" });
    }
  });
});

app.post("/register", (req, res) => {
  const { userType, name, email, password } = req.body;
  User.findOne({ email: email }, (err, user) => {
    if (user) {
      res.send({ message: "User already registerd" });
    } else {
      const user = new User({
        userType,
        name,
        email,
        password,
      });
      user.save((err) => {
        if (err) {
          res.send(err);
        } else {
          res.send({ message: "Successfully Registered. Please login now." });
        }
      });
    }
  });
});

app.post("/ownerregister", (req, res) => {
  console.log(req.body);
  const {
    userType,
    name,
    email,
    password,
    mobile,
    area,
    city,
    state,
    country,
    pincode,
    guestcategory,
    facilites,
    propimage,
    price,
    title,
    description,
  } = req.body;
  Owner.findOne({ email: email }, (err, user) => {
    if (user) {
      res.send({ message: "User already registerd" });
    } else {
      const user = new User({
        userType,
        name,
        email,
        mobile,
        password,
      }).save();

      const owner = new Owner({
        userType,
        name,
        email,
        password,
        mobile,
        area,
        city,
        state,
        country,
        pincode,
        guestcategory,
        facilites,
        propimage,
        price,
        title,
        description,
      });
      owner.save((err) => {
        if (err) {
          res.send(err);
        } else {
          res.send({ message: "Successfully Registered. Please check your listing." });
        }
      });
    }
  });

 
});

app.listen(PORT, () => {
  console.log("Server started on port 6066");
});

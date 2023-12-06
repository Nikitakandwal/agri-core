// index.js
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const twilio = require("twilio");
const cors = require("cors");
const multer = require('multer');

dotenv.config();


const app = express();
const PORT = process.env.PORT || 3000;



// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(bodyParser.json());
app.use(cors());

const productSchema = require('./models/ProductShema');
const Product = mongoose.model("Product", productSchema);

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './uploads/ProductImages'); // specify the folder where product images will be stored
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

 
// Twilio setup
const twilioClient = twilio(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);

// Mongoose schema for registration data
const registrationSchema = new mongoose.Schema({
  fullName: String,
  contactNumber: String,
  gender: String,
  city: String,
  emailAddress: String,
  shopName: String,
  recoveryContact: String,
  location: String,
  GSTIN: String,
  selectedItems: Array
  // Add other fields as needed for your use case
});


const Registration = mongoose.model("Registration", registrationSchema);

// Generate a random 4-digit OTP
const generateOTP = () => {
  return Math.floor(1000 + Math.random() * 9000).toString();
};

// In-memory storage for generated OTPs (replace with database storage in production)
const otpStorage = {};

app.post("/send-verification-code", async (req, res) => {
  const { phoneNumber } = req.body;

  try {
    const otp = generateOTP();

    // Send OTP via Twilio
    await twilioClient.messages.create({
      body: `Your verification code is: ${otp}`,
      from: process.env.TWILIO_PHONE_NUMBER,
      to: `+${phoneNumber}`,
    });

    // Store the OTP for later verification
    otpStorage[phoneNumber] = otp;

    res.json({ success: true });
  } catch (error) {
    console.error("Error sending verification code:", error);
    res.json({ success: false });
  }
});

app.post("/verify-otp", (req, res) => {
  const { phoneNumber, otp } = req.body;

  // Retrieve the stored OTP
  const storedOTP = otpStorage[phoneNumber];

  if (otp === storedOTP) {
    // Clear the stored OTP after successful verification
    delete otpStorage[phoneNumber];

    res.json({ success: true });
  } else {
    res.json({ success: false });
  }
});

// New route for handling registration data
app.post("/register", async (req, res) => {
  const registrationData = req.body;

  try {
    // Create a new registration document using the Mongoose model
    const registration = new Registration(registrationData);

    // Save the registration data to MongoDB
    await registration.save();

    res.json({ success: true });
  } catch (error) {
    console.error("Error saving registration data:", error);
    res.json({ success: false });
  }
});

app.get("/api/products", async (req, res) => {
  try {
    // Fetch product data from MongoDB
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    console.error("Error fetching product data:", error);
    res.status(500).json({ success: false, error: "Internal Server Error" });
  }
});

app.post("/api/products/upload", upload.array('images', 4), async (req, res) => {
  const productData = req.body;
  const imagePaths = req.files.map(file => `./uploads/products/${file.filename}`);
  
  try {
    // Assuming productData is an array of products
    for (let i = 0; i < productData.length; i++) {
      // Append the new image path to the existing array of images
      productData[i].images = [ ...(productData[i].images || []), imagePaths[i] ];

      const newProduct = new Product(productData[i]);
      await newProduct.save();
    }
    
    res.json({ success: true });
  } catch (error) {
    console.error("Error uploading product data:", error);
    res.json({ success: false });
  }
});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


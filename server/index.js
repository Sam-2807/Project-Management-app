require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const port = 5000;

console.log("DEBUG: Script shuru hua.");
// Yeh check karega ki .env file se MONGO_URI aayi ya nahi
console.log("DEBUG: MONGO_URI check ->", process.env.MONGO_URI ? "Loaded Successfully" : "ERROR: NOT LOADED");

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Mera Trello Clone Server Chal Raha Hai!');
    });

    // Server start karne ka naya tareeka
    const startServer = async () => {
        try {
                console.log("DEBUG: Database se connect karne ki koshish...");
                        await mongoose.connect(process.env.MONGO_URI);
                                console.log("MongoDB Atlas se connect ho gaya! ✅");

                                        app.listen(port, () => {
                                                    console.log(`Server port ${port} par chal raha hai.`);
                                                            });
                                                                } catch (error) {
                                                                        console.error("DEBUG: Database connection mein BADA error aaya! ->", error);
                                                                            }
                                                                            };

                                                                            startServer();
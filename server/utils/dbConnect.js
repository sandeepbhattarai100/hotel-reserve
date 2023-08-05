import mongoose from "mongoose";

export const dbConfig = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_ATLAS_URI);
        if (conn) {
            console.log("database connected successfully");
        }
    } catch (error) {
        // console.log("cannot connect to the database");
        console.log(error);

    }

};

// module.exports = dbConfig;
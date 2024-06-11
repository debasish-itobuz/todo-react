import mongoose from 'mongoose'

const connectToDB = async () => {
    try {
        await mongoose.connect(process.env.CONNECTION_STRING)
        console.log('Connected to Mongodb');
    }
    catch (error) {
        console.error(error);
    }
}
export default connectToDB;
import mongoose from "mongoose";
const UserDetailsSchema= mongoose.Schema({

    name:{
        type:String,
        required:true,
    },
    assignment:{
        type:String,
        required:true,
    },
})

const UserDetails=mongoose.model("UserDetails",UserDetailsSchema);
export default UserDetails;
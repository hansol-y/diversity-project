import mongoose from "mongoose";
// import Event from "../model/Event.js"

const UserSchema = new mongoose.Schema(
    {
        userName: {
            type: String,
            required: true
        },
        userID: {
            type: String,
            required: true,
            unique: true
        },
        userEmail: {
            type: String,
            required: true,
            unique: true
        },
        userPhone: {
            type: Number,
            required: true,
            unique: true
        },
        events: {
            type: Array,
            default: [] // Array of Event
        }
    },
    {timestamps: true}
);

const User = mongoose.model("User", UserSchema);
export default User;

// export class User {
//     // private userID: number;
//     // private userName: string;
//     // private userEmail: string;
//     // private userPhone: number;
//     // private eventList: Event[];


//     constructor(ID, name, email, phone) {
//         this.userID = ID;
//         this.userName = name;
//         this.userEmail = email;
//         this.userPhone = phone;
//         this.eventList = []; // array of Event
//     }

//     addEventToUser(Event) {
//         if (!this.getEventList().includes(this)) {
//             this.eventList.push(Event);
//         }
//         if (!Event.participantsList.includes(User)) {
//             Event.addUser(this);
//         }
//     }
// }
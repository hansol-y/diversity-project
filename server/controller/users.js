import User from "./User.js";
import Event from "./Event.js";

export const getUser = async (req, res) => {
    try {
        const {userId} = req.params;
        const user = await User.findById(userId);
        res.status(200).json(user);
    } catch (err) {
        res.status(404).json({message: "User not found"});
    }
};

export const addUser = (req, res) => {
    try {
        const { userName, userID, userEmail, userPhone } = req.body;
        const newUser = new User({
            userName: userName,
            userID: userID,
            userEmail: userEmail,
            userPhone: userPhone,
            events: []
        });
        newUser.save();
    } catch (err) {
        res.status(409).json({message: err.message});
    }
}

export const getUserEvents = async (req, res) => {
    try {
        const {userId} = req.params;
        const event = await Event.find({userId});
        res.status(200).json(event);
    } catch (err) {
        res.status(404).json({message: "The user does not have any event"});
    }
}

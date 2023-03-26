// import User from "./User.js";
import Event from "../model/Event.js";

// export const createEvent = async (req, res) => {
//     try {
//         const { userId, title, date, description, imagePath, location, category } = req.body;
//         const creator = await User.findById(userId);
//         const newEvent = new Event({
//             title: title,
//             date: new Date.parse(date),
//             location: location,
//             description: description,
//             imagePath: imagePath,
//             participants: [creator],
//             category: category
//         });
//         await newEvent.save();

//         // TODO: Post event on feed?
//         res.status(201).json(newEvent);
//     } catch (err) {
//         res.status(409).json({message:err.message});
//     }
// }

// export const getEventsInCategory = async (req, res) => {
//     try {
//         const { category } = req.params;
//         const events = await Event.find({ category: category });
//         res.json(events);
//     } catch (err) {
//         res.status(404).json({message: "Event with given category not found"});
//     }
// }

// export const participate = (req, res) => {
//     try {
//         // Need to check: is object available as parameter?
//         const { event, user } = req.params;
//         user.events.push(event);
//         event.participants.push(user);
//     } catch (err) {
//         console.error(err);
//     }
// }

export const getAllEvents = async (req, res) => {
    try {
      const events = await Event.find();
      console.log(events);
      res.status(200).json(events);
    } catch (err) {
      console.error(err);
      res.status(500).json({message: "Server error"});
    }
  };
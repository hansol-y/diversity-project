import mongoose from "mongoose";

const userIds = [
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
];

export const users = [
    {
    _id: userIds[0],
    userName: "John Doe",
    userID: "JD123",
    userEmail: "johndoe@gmail.com",
    userPhone: 1234567890,
    events: [],
    __v: 0,
    },
    {
    _id: userIds[1],
    userName: "Jane Smith",
    userID: "JS456",
    userEmail: "janesmith@yahoo.com",
    userPhone: 2345678901,
    events: [],
    __v: 0,
    },
    {
    _id: userIds[2],
    userName: "Bob Johnson",
    userID: "BJ789",
    userEmail: "bobjohnson@hotmail.com",
    userPhone: 3456789012,
    events: [],
    __v: 0,
    },
    {
    _id: userIds[3],
    userName: "Samantha Lee",
    userID: "SL246",
    userEmail: "samlee@gmail.com",
    userPhone: 4567890123,
    events: [],
    __v: 0,
    },
    {
    _id: userIds[4],
    userName: "Mike Chen",
    userID: "MC369",
    userEmail: "mikechen@gmail.com",
    userPhone: 5678901234,
    events: [],
    __v: 0,
    },
];

export const events = [
    {
        _id: new mongoose.Types.ObjectId(),
        title: "Java Programming Study Group",
        date: "2023-04-12T16:00:00.000Z",
        description: "Join us for a study group on Java programming at the UBC Library!",
        location: "Irving K. Barber Learning Centre, UBC, Vancouver, BC",
        imagePath: "https://example.com/java-study-group.jpg",
        participants: [userIds[0], userIds[2]],
        category: "Study"
      },
      {
        _id: new mongoose.Types.ObjectId(),
        title: "UBC Computer Science Club Meeting",
        date: "2023-05-01T18:00:00.000Z",
        description: "Come join us for our monthly meeting of the UBC Computer Science Club!",
        location: "Hugh Dempster Pavilion, UBC, Vancouver, BC",
        participants: [userIds[1], userIds[3], userIds[4]],
        category: "Hangout"
      },
      {
        _id: new mongoose.Types.ObjectId(),
        title: "Introduction to HTML and CSS Workshop",
        date: "2023-06-15T13:00:00.000Z",
        description: "Learn the basics of HTML and CSS at this free workshop near UBC!",
        location: "AMS Student Nest, UBC, Vancouver, BC",
        participants: [userIds[2], userIds[4]],
        category: "Study"
      },
      {
        _id: new mongoose.Types.ObjectId(),
        title: "Networking Event for Women in Tech",
        date: "2023-07-10T17:30:00.000Z",
        description: "Meet other women in tech and network over drinks and snacks!",
        location: "Point Grey Village, Vancouver, BC",
        participants: [userIds[1], userIds[3]],
        category: "Hangout"
      },
      {
        _id: new mongoose.Types.ObjectId(),
        title: "Python Programming Study Session",
        date: "2023-08-21T15:00:00.000Z",
        description: "Join us for a Python programming study session at the UBC Student Union Building!",
        location: "UBC Student Union Building, Vancouver, BC",
        participants: [userIds[0]],
        category: "Study"
      }
]
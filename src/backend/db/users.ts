import { formatDate } from "../utils/authUtils";

/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: "4ea212a8-c0d7-11ec-9d64-0242ac120002",
    firstName: "John",
    lastName: "Doe",
    email: "johndoe@gmail.com",
    password: "johnDoe123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: "4ea212a8-c0d7-11ec-9d64-0247789000",
    firstName: "chanchal",
    lastName: "panpaliya",
    username: "chanchalcanpaliya",
    password: "chanchalpanpaliya123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];

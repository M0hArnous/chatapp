import jwt from "jsonwebtoken"

export const generateToken = (userId, res) => {
    const token = jwt.sign({userId}, process.env.JWT_SECRET, {
        expiresIn:"7d"
    })

    res.cookie("jwt", token, {
         maxAge: 7 * 24 * 60 * 100, //in milliseconds
         httpOnly: true, // prevent xss attacks
         sameSite: "strict",//CSRF attacks
         secure: process.env.NODE_ENV !== "development"  
    });

    return token;

};
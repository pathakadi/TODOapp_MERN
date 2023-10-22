import jwt from "jsonwebtoken";

export const sendCookie = ( user , res , message , statusCode = 200 ) => {
    const token = jwt.sign({ _id : user._id} , process.env.JWT_SECRET);

    res.status(statusCode).cookie("token" , token , {
        // An HttpOnly Cookie is a tag added to a browser cookie that prevents client-side scripts from accessing data.
        httpOnly : true ,   
        maxAge : 15*60*1000 ,
        // SameSite is a browser security mechanism that determines when a website's cookies are included -
        // - in requests originating from other websites.
        sameSite : process.env.NODE_ENV === "Development" ? "lax" : "none",
        secure : process.env.NODE_ENV === "Development" ? false :  true
    }).json({ success : true , message });
};
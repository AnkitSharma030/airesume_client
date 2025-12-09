import { connectDB } from "../../../lib/mongodb";
import User from "../../../models/User";
import jwt from "jsonwebtoken";

export async function GET(req) {
    try {
        const authHeader = req.headers.get("Authorization");
        if (!authHeader || !authHeader.startsWith("Bearer ")) {
            return Response.json({ error: "Unauthorized" }, { status: 401 });
        }

        const token = authHeader.split(" ")[1];
        let decoded;

        try {
            decoded = jwt.verify(token, process.env.JWT_SECRET);
        } catch (error) {
            return Response.json({ error: "Invalid token" }, { status: 401 });
        }

        await connectDB();

        const user = await User.findById(decoded.id).select("-password"); // Exclude password
        if (!user) {
            return Response.json({ error: "User not found" }, { status: 404 });
        }

        return Response.json({
            user: {
                name: user.name,
                email: user.email,
                userId: user._id,
                scans: user.scans
            }
        }, { status: 200 });

    } catch (err) {
        return Response.json({ error: err.message }, { status: 500 });
    }
}

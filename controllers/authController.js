import Account from "../models/Account.js";
import { StatusCodes } from "http-status-codes";
import { BadRequestError, UnAuthenticatedError } from "../errors/index.js";
import jwt  from 'jsonwebtoken';
import Staff from "../models/Staff.js";
import Admin from "../models/Admin.js";
import User from "../models/User.js";
const getAllAccounts = async (req, res) => {
    try {
        // Lấy tất cả các tài khoản từ cơ sở dữ liệu
        const accounts = await Account.find({});
        
        // Trả về danh sách tất cả các tài khoản
        res.status(StatusCodes.OK).json(accounts);
    } catch (error) {
        console.error("Error fetching accounts:", error);
        // Nếu có lỗi, trả về thông báo lỗi
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: "Internal Server Error" });
    }
};

const register = async (req, res, next) => {
    const { username, email, password, role, refress_token, avatar } = req.body;
    if (!username || !email || !password) {
        throw new BadRequestError("Please provide all values");
    }
    const userAlreadyExists = await Account.findOne({ email });
    if (userAlreadyExists) {
        throw new BadRequestError("Email already in use");
    }
    const account = await Account.create({ username, email, password,role, refress_token, avatar });
    const token = account.createJWT();
    res.status(StatusCodes.OK).json({
        user: {
            email: account.email,
            username: account.username,
        },
        token,
    });
};
// const login = async (req, res) => {
//     const { username, password } = req.body;

//     const user = await Account.findOne({ username }).select("+password");
//     if (!user) {
//         throw new UnAuthenticatedError("Sai tài khoản");
//     }

//     const isPasswordCorrect = await user.comparePassword(password);
//     if (!isPasswordCorrect) {
//         throw new UnAuthenticatedError("Sai mật khẩu");
//     }
    
//     const token = user.createJWT();
//     user.password = undefined;
//     res.status(StatusCodes.OK).json({ user, token });
    
// };
const login = async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await Account.findOne({ username }).select("+password");
        if (!user) {
            return res.status(401).json({ error: 'Sai tài khoản hoặc mật khẩu' });
        }

        const isPasswordCorrect = await user.comparePassword(password);
        if (!isPasswordCorrect) {
            return res.status(401).json({ error: 'Sai tài khoản hoặc mật khẩu' });
        }

        const token = user.createJWT();
        user.password = undefined; // Xóa mật khẩu trước khi gửi về client

        let userData = { user, token };

        // Kiểm tra và lấy thông tin tương ứng với từng vai trò
        if (user.role === 'admin') {
            const admin = await Admin.findOne({ account: user._id }).populate('account').exec();
            if (!admin) {
                return res.status(404).json({ error: 'Không tìm thấy thông tin admin' });
            }
            userData.admin = admin;
        } else if (user.role === 'staff') {
            const staff = await Staff.findOne({ account: user._id }).populate('account').exec();
            if (!staff) {
                return res.status(404).json({ error: 'Không tìm thấy thông tin nhân viên' });
            }
            userData.staff = staff;
        } else if (user.role === 'user') {
            const userDetail = await User.findOne({ account: user._id }).populate('account').exec();
            if (!userDetail) {
                return res.status(404).json({ error: 'Không tìm thấy thông tin người dùng' });
            }
            userData.user = userDetail;
        }

        res.status(StatusCodes.OK).json(userData);
    } catch (error) {
        console.error('Đăng nhập không thành công:', error);
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: 'Lỗi server' });
    }
};


const verifyToken = async (req, res) => {
    const token = req.headers.authorization;
    console.log("Received token:", token);

    if (!token) {
        throw new UnAuthenticatedError('No token provided');
    }

    try {
        const tokenWithoutBearer = token.split(' ')[1];
        const decoded = jwt.verify(tokenWithoutBearer, process.env.JWT_SECRET);

        console.log("Decoded token:", decoded);

        // Kiểm tra thời gian hết hạn của token
        const currentTimestamp = Math.floor(Date.now() / 1000); // Thời gian hiện tại
        if (decoded.exp < currentTimestamp) {
            throw new UnAuthenticatedError('Token has expired');
        }

        // Kiểm tra xác thực user
        const user = await Account.findById(decoded.userId);
        if (!user) {
            throw new UnAuthenticatedError('Invalid token');
        }

        // Gửi thông tin user nếu token hợp lệ
        res.status(StatusCodes.OK).json({
            user: {
                email: user.email,
                username: user.username,
            },
            message: 'Token verified successfully',
        });
    } catch (error) {
        throw new UnAuthenticatedError('Invalid token');
    }
};

export {register, login, verifyToken, getAllAccounts};


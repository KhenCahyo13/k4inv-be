import bcrypt from 'bcrypt';
import User from '../models/UserModel.js';

const Login = async (request, response) => {
    try {
        const user = await User.findAll({
            where:{
                email_user: request.body.email
            }
        });
        const match = await bcrypt.compare(request.body.password, user[0].password);
        const level = user[0].level;
        const nama = user[0].nama_user;
        const email = user[0].email_user
        const id = user[0].id_user;
        if(match && level == 'Admin') {
            return response.status(200).json({msg: "Login Sebagai " + nama + '...', level: "Admin", nama_user: nama, id_user: id, email_user: email});
        } else if (match && level == 'Pengguna') {
            return response.status(200).json({msg: "Login Sebagai " + nama + '...', level: "Pengguna", nama_user: nama, id_user: id, email_user: email});
        } else {
            return response.status(400).json({msg: "Password / Email Anda Salah"});
        }
    } catch (error) {
        console.log(error.message);
        response.status(400).json({msg: "Email Tidak Ditemukan"});
    }
}

export default Login;
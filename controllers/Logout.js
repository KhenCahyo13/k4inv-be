const Logout = async (request, response) => {
    try {
        request.session.destroy();
        response.status(200).json({msg: "Logout Berhasil"})
    } catch (error) {
        console.log(error);
    }
}

export default Logout;
export const login = (req, res) => {
    try {
        const { fullname, username, password, confirmPassword, gender } = req.body;
    } catch (error) {

    }
}
export const logout = (req, res) => {
    res.send("logout")
    console.log("logout")
}
export const signup = (req, res) => {
    res.send("signup")
    console.log("signup")
}

import bcrypt from 'bcrypt';

export const hashPassword = async (password) => {
    try {
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hashSync(password, saltRounds);
        return hashedPassword;
    } catch (error) {
        console.log(error.message);

    }
};

export const comparePassword = async (password, hashedPassword) => {

    const pwd = bcrypt.compareSync(password, hashedPassword);
    return pwd
}
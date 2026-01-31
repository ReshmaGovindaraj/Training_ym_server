import bcrypt from 'bcryptjs'

export const hashpassword = async (password) => {
    const salt=await bcrypt.genSalt(10); //10 layers of encryption
    return await bcrypt.hash(password,salt);
}
export const passwordcheck=async (password,hashpassword) => {
    return await bcrypt.compare(password,hashpassword);  // compares givesn password and stored(hashed) password
}
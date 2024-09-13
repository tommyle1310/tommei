import { listUsers } from "../sampleData/ListUser";

export const validateSignup = (newUser: { fullName: string, email: string, password: string }) => {
    const { fullName, email, password } = newUser;

    // Regular expression for email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Check if email is valid
    if (!emailRegex.test(email)) {
        console.log('Invalid email');
        return { EC: 1, EM: 'Invalid email format' };
    }

    // Check for duplicate email
    const emailExists = listUsers.some(user => user.email === email);
    if (emailExists) {
        console.log('Duplicated email');
        return { EC: 2, EM: 'Email already in use' };
    }

    // Check if fullName is already in use
    const fullNameExists = listUsers.some(user => user.fullName === fullName);
    if (fullNameExists) {
        console.log('Duplicated full name');
        return { EC: 3, EM: 'Full name already in use' };
    }

    // All checks passed
    return { EC: 0, EM: 'Sign up successfully' };
}

export const validateLogin = (credentials: { email: string, password: string }) => {
    const { email, password } = credentials;

    // Regular expression for email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Check if email is valid
    if (!emailRegex.test(email)) {
        console.log('Invalid email');
        return { EC: 11, EM: 'Invalid email format' };
    }

    // Check if the email exists in the user list
    const user = listUsers.find(user => user.email === email);

    if (!user) {
        console.log('Email not found');
        return { EC: 12, EM: 'Email not found' };
    }

    // Check if the password matches
    if (user.password !== password) {
        console.log('Incorrect password');
        return { EC: 13, EM: 'Incorrect password' };
    }

    // All checks passed
    return { EC: 0, EM: 'Login successful' };
};

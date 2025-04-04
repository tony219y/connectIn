
export const setjwtToken = (token: string) => {
    return localStorage.setItem('token', token);
}

export const getjwtToken = () => {
    return localStorage.getItem('token');
}
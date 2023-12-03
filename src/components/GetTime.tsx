const getCurrentTime = () => {
    const now = new Date();
    return now.toLocaleTimeString(); // This will return time in HH:MM:SS AM/PM format based on the locale
};
export default getCurrentTime;
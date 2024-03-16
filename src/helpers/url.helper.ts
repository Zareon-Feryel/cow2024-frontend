export const getPathname = () => {
    return window.location.pathname.split('/').pop();
};
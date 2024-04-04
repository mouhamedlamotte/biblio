export const Truncate = ({str, max, len}) => {
    return str?.length > max ? str?.substring(0, len) + "..." : str;
}
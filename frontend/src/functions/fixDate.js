export const fixDate = (num) => {
    var fixedDate = new Date(num);
    return fixedDate.getDate() + "/" + (fixedDate.getMonth() +1 );
}
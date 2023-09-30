export default function formatDate(date){
    date = new Date(date)
    let year = date.getFullYear();
    let month = String(date.getMonth() + 1).padStart(2, '0');  // Month is zero-indexed
    let day = String(date.getDate()).padStart(2, '0');
    
    return `${year}-${month}-${day}`
}
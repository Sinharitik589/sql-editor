export const calculateDiff = (diff) => 
{
    let seconds_diff=diff;
    let minutes_diff = seconds_diff/60;
    let hours_diff = minutes_diff/60;
    let days_diff = hours_diff/24;
    if(parseInt(days_diff)>0) return `${parseInt(days_diff)} days ago`;
    if(parseInt(hours_diff)>0) return `${parseInt(hours_diff)} hours ago`;
    if(parseInt(minutes_diff)>0) return `${parseInt(minutes_diff)} min ago`;
    if(parseInt(seconds_diff)>0) return `${parseInt(seconds_diff)} sec ago`;
}
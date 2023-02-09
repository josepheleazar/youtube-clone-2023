export default function translateViews(views) {
  const remFrom1K = views % 1000;

  if(views < 1000) {
    return views;
  } else if (views > 999 && views < 10000) {
    return (Math.floor(views / 1000)) + ',' + (remFrom1K);
  } else if (views > 9999 && views < 100000) {
    return (Math.floor(views / 1000)) + ',' + (remFrom1K === 0 ? '000' : remFrom1K < 100 ? '0' + remFrom1K : remFrom1K);
  } else if (views > 99999 && views < 1000000) {
    return (Math.floor(views / 1000)) + ',' + (remFrom1K === 0 ? '000' : remFrom1K < 100 ? '0' + remFrom1K : remFrom1K);
  } else if (views > 999999 && views < 10000000){
    return ((Math.floor(views / 1000000)) + '.' + (views % 1000000 * 0.00001) + 'M')
  } else if (views > 9999999 && views < 1000000000){
    return ((Math.floor(views / 1000000)) + 'M');
  } else {
    return ((Math.floor(views / 1000000000)) + '.' + (views % 1000000000 * 0.00000001) + 'B')
  }
}
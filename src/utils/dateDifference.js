export default function dateDifference(dateUploaded) {
  const today = new Date();

  const dateDiff = today - dateUploaded;

  const daysAgo = Math.floor(dateDiff / 86400000);
  const monthsAgo = Math.floor(dateDiff / 2629746000);
  const yearsAgo = Math.floor(dateDiff / 31556952000);

  if(daysAgo <= 31) {
    return daysAgo + ' days ago';
  } else if (daysAgo <= 366) {
    return monthsAgo + ' months ago';
  } else {
    return yearsAgo + ' years ago';
  }
}


import dayjs from 'dayjs';

export function getAvailableTimes(
  openTimeStr: string,
  closeTimeStr: string,
): string[] {
  // Convert input strings to dayjs objects
  const openTime = dayjs(openTimeStr);
  const closeTime = dayjs(closeTimeStr);

  // Initialize list of available times
  const availableTimes: string[] = [];

  // Loop through 1-hour intervals between opening and closing times
  let currentTime = openTime;
  while (currentTime.isBefore(closeTime)) {
    availableTimes.push(currentTime.toISOString());
    currentTime = currentTime.add(1, 'hour');
  }

  return availableTimes;
}

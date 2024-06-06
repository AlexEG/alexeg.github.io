export function isDateAtLeastAWeekOld(dateString: string): boolean {
  const oneWeekInMilliseconds: number = 7 * 24 * 60 * 60 * 1000;
  const givenDate: Date = new Date(dateString);
  const currentDate: Date = new Date();
  const differenceInMilliseconds: number =
    currentDate.getTime() - givenDate.getTime();
  return differenceInMilliseconds <= oneWeekInMilliseconds;
}

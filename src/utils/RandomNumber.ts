export const generateRandomPercentage = (): string => {
  const randomNumber = (Math.random() * 8) + 1;
  return `${randomNumber.toFixed(2)}%`
  };

export const getCurrentDate = (): string => {
    const currentDate = new Date();
    const options = { month: 'short', day: 'numeric' } as const;
    return currentDate.toLocaleDateString('en-US', options);
  };
  
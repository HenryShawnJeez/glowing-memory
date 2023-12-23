const formatDate = (date: Date): string => {
    const options: Intl.DateTimeFormatOptions = {
      weekday: 'long',
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    };
  
    return date.toLocaleDateString(undefined, options);
  };
  
  export { formatDate };
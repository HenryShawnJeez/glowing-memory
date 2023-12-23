export function formatDateTime(dateTimeString: string): string {
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
    };
    const formattedDate = new Date(dateTimeString).toLocaleDateString('en-US', options);
  
    return formattedDate;
  }
  
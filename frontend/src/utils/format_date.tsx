export const formatDateTime = (date: string) =>
  date.substring(0, 16).replace("T", " ");
  export const formatDate = (date: string) =>
  date.substring(0, 10).replace("T", " ");
import parse from 'date-fns/parse';

export function convertToLocalDate(date : string) {
  return parse(date,'MM-dd-yyyy', new Date());
}


export function convertToLocalTime(date : string) {
  return parse(date,'hh:mm:ss', new Date());
}


import parse from 'date-fns/parse';

export function dateValidator(date : string) {
  return parse(date,'MM-dd-yyyy hh:mm:ss', new Date());
}



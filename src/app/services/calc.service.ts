import { Injectable } from '@angular/core';

@Injectable()
export class CalcService {

  constructor() { }

  // pure function to calculate mortgage

  calc(mortgage: any) {
    
    console.log('mortgage object: ', mortgage);
  }

}

import { Injectable } from '@angular/core';
import {BehaviorSubject, map, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FragenService {
  textFrage1: string[] = ['Wählen Sie ein Teilgebiet aus, um die zugehörige Antwort zu sehen.']
  textFrage2: string[] = ['Wählen Sie ein Teilgebiet aus, um die zugehörige Antwort zu sehen.']
  textFrage3: string[] = ['Wählen Sie ein Teilgebiet aus, um die zugehörige Antwort zu sehen.']
  textFrage4: string[] = ['Wählen Sie ein Teilgebiet aus, um die zugehörige Antwort zu sehen.']
  textFrage5: string[] = ['Wählen Sie ein Teilgebiet aus, um die zugehörige Antwort zu sehen.']
  textFrage6: string[] = ['Wählen Sie ein Teilgebiet aus, um die zugehörige Antwort zu sehen.']
  textFrage7: string[] = ['Wählen Sie ein Teilgebiet aus, um die zugehörige Antwort zu sehen.']
  textFrage8: string[] = ['Wählen Sie ein Teilgebiet aus, um die zugehörige Antwort zu sehen.']
  textFrage9: string[] = ['Wählen Sie ein Teilgebiet aus, um die zugehörige Antwort zu sehen.']
  textFrage10: string[] = ['Wählen Sie ein Teilgebiet aus, um die zugehörige Antwort zu sehen.']

  frage1Subject: BehaviorSubject<string[]> = new BehaviorSubject<string[]>(this.textFrage1)
  frage2Subject: BehaviorSubject<string[]> = new BehaviorSubject<string[]>(this.textFrage2)
  frage3Subject: BehaviorSubject<string[]> = new BehaviorSubject<string[]>(this.textFrage3)
  frage4Subject: BehaviorSubject<string[]> = new BehaviorSubject<string[]>(this.textFrage4)
  frage5Subject: BehaviorSubject<string[]> = new BehaviorSubject<string[]>(this.textFrage5)
  frage6Subject: BehaviorSubject<string[]> = new BehaviorSubject<string[]>(this.textFrage6)
  frage7Subject: BehaviorSubject<string[]> = new BehaviorSubject<string[]>(this.textFrage7)
  frage8Subject: BehaviorSubject<string[]> = new BehaviorSubject<string[]>(this.textFrage8)
  frage9Subject: BehaviorSubject<string[]> = new BehaviorSubject<string[]>(this.textFrage9)
  frage10Subject: BehaviorSubject<string[]> = new BehaviorSubject<string[]>(this.textFrage10)

  constructor() { }

  getFrage1(): Observable<string[]> {
    return this.frage1Subject.asObservable().pipe(
      map((text: string[]) => {
        return text.map((text2: string) => {
          return text2;
        })
      })
    )
  }
  addFrage1(text: string) {
    this.textFrage1.push(text)
    this.frage1Subject.next(this.textFrage1)
  }

  getFrage2(): Observable<string[]> {
    return this.frage2Subject.asObservable().pipe(
      map((text: string[]) => {
        return text.map((text2: string) => {
          return text2;
        })
      })
    )
  }
  addFrage2(text: string) {
    this.textFrage2.push(text)
    this.frage2Subject.next(this.textFrage2)
  }

  getFrage3(): Observable<string[]> {
    return this.frage3Subject.asObservable().pipe(
      map((text: string[]) => {
        return text.map((text2: string) => {
          return text2;
        })
      })
    )
  }
  addFrage3(text: string) {
    this.textFrage3.push(text)
    this.frage3Subject.next(this.textFrage3)
  }

  getFrage4(): Observable<string[]> {
    return this.frage4Subject.asObservable().pipe(
      map((text: string[]) => {
        return text.map((text2: string) => {
          return text2;
        })
      })
    )
  }
  addFrage4(text: string) {
    this.textFrage4.push(text)
    this.frage4Subject.next(this.textFrage4)
  }

  getFrage5(): Observable<string[]> {
    return this.frage5Subject.asObservable().pipe(
      map((text: string[]) => {
        return text.map((text2: string) => {
          return text2;
        })
      })
    )
  }
  addFrage5(text: string) {
    this.textFrage5.push(text)
    this.frage5Subject.next(this.textFrage5)
  }

  getFrage6(): Observable<string[]> {
    return this.frage6Subject.asObservable().pipe(
      map((text: string[]) => {
        return text.map((text2: string) => {
          return text2;
        })
      })
    )
  }
  addFrage6(text: string) {
    this.textFrage6.push(text)
    this.frage6Subject.next(this.textFrage6)
  }

  getFrage7(): Observable<string[]> {
    return this.frage7Subject.asObservable().pipe(
      map((text: string[]) => {
        return text.map((text2: string) => {
          return text2;
        })
      })
    )
  }
  addFrage7(text: string) {
    this.textFrage7.push(text)
    this.frage7Subject.next(this.textFrage7)
  }

  getFrage8(): Observable<string[]> {
    return this.frage8Subject.asObservable().pipe(
      map((text: string[]) => {
        return text.map((text2: string) => {
          return text2;
        })
      })
    )
  }
  addFrage8(text: string) {
    this.textFrage8.push(text)
    this.frage8Subject.next(this.textFrage8)
  }

  getFrage9(): Observable<string[]> {
    return this.frage9Subject.asObservable().pipe(
      map((text: string[]) => {
        return text.map((text2: string) => {
          return text2;
        })
      })
    )
  }
  addFrage9(text: string) {
    this.textFrage9.push(text)
    this.frage9Subject.next(this.textFrage9)
  }

  getFrage10(): Observable<string[]> {
    return this.frage10Subject.asObservable().pipe(
      map((text: string[]) => {
        return text.map((text2: string) => {
          return text2;
        })
      })
    )
  }
  addFrage10(text: string) {
    this.textFrage10.push(text)
    this.frage10Subject.next(this.textFrage10)
  }

}

# RxjsWorkshop

## Setup Instructions

1. Clone this repo using the following command:
```
git clone https://github.com/adityachugh/rxjs-workshop.git
``` 
2. Ensure you have the correct node version. This repo uses v14.17.2, but any 14.x.x version should be fine.
3. Install dependencies using the following command:
```
npm install
```
4. Run the local development server using the following command:
```
npm start
```

## Workshop Agenda

- Async vs sync code
- What is a Promise
- What is an Observable
- Observable constructors
- Eager execution vs lazy execution
- Common operators
    - Map
    - Filter
    - Tap
    - Take
    - First
    - Delay
- Multiple subscriptions for an Observable
- Multicasting
    - Share & ShareReplay
- Error handling
- Binding Observables to an Angular template
- Importance of unsubscription
- Angular async pipe
- What should be modelled by an Observable
- Subjects vs Observables
- Http Observables
- Advanced operators
    - SwitchMap
    - DebounceTime
    - DistinctUntilChanged


 import {Observable  } from 'rxjs';

 let obsrvbl = Observable.create((observer :any)=>{

    observer.next('1')
    setTimeout(() => {
        observer.next('34234')  
    }, 2000);
   
 })


 let addeItem =  (val :string) => {

        let li = document.createElement('li');
        let text = document.createTextNode(val);
        li.appendChild(text);
        document.getElementById('output').appendChild(li);
 }

 obsrvbl.subscribe(addeItem);
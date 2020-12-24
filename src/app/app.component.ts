import { DataService } from './data.service';
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
   constructor(private _data:DataService){ }
   data:any={}
   
   input_value="";
   
   isEmptyObject(obj) {
      return (obj && (Object.keys(obj).length === 0));
    }
   
    onChange(val){
        if(val.length == 0){
            this.data={}
        }
    }

    onClick(search){
    this._data.getWiki(search).subscribe(data => { 
      this.data = data;
      console.log(data) 
    },
    err=>{
      this.data="Nothing"; 
    });
   }

   ngOnInit(): void {
     
   };
  
}

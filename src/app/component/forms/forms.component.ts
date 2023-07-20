import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CatchService } from 'src/app/service/catch.service';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
  createAccountForm:FormGroup|any
  countries:any=[]
  states: any=[]

  constructor(private service:CatchService,private builder:FormBuilder){
    this.createAccountForm=this.builder.group({
      country:["",Validators.required],
      state:["",Validators.required]
    })


  }

  ngOnInit(): void {
    this.service.getcountry().subscribe((res:any)=>{
      this.countries=res
    })
  }
  onChangeCountry(idcountry:any){
    if(idcountry.target.value){
      this.service.getstate(idcountry.target.value).subscribe((res:any)=>{
        this.states=res.states

      })
    }





  }
  onchange(idstate:any){
    console.log(idstate)
  }

}

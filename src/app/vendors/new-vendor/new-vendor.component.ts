import { Component, OnInit,ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { VendorService } from '../vendors.service';

@Component({
  selector: 'app-new-vendor',
  templateUrl: './new-vendor.component.html',
  styleUrls: ['./new-vendor.component.css']
})
export class NewVendorComponent implements OnInit {
  vendorForm:FormGroup;
  btnObj = [
    { label: "Create", method: "onCreate" },
    { label: "Save", method: "onSave" }
  ];
  btnButton: any;  
  submitted: Boolean;
  editData :any;
  vendor = [];
  vendorID:any;

  constructor(public location:Location,public formBuilder:FormBuilder,public vendorService:VendorService,public router:Router) {
    const navigation = this.router.getCurrentNavigation();
		if(navigation !=undefined && navigation.extras !=undefined && navigation.extras.state){
			const state = navigation.extras.state;
			this.editData = state;    
		}
   }

  ngOnInit(): void {
    this.btnButton = this.btnObj[0];
    this.submitted = false;

    this.vendorForm = this.formBuilder.group({
      name: new FormControl(''),
      type: new FormControl(''),
      email: new FormControl(''),
      url: new FormControl(''),
    });

    this.vendorService.readVendor('?active=true')
    .then(vendor_res => {
      this.vendor = vendor_res;      
    })
    .catch(err => {
      console.log(err);
    });

    if(this.editData != undefined) {
      this.edit(this.editData);
    }  

  }

  get VendorControl() {
    return this.vendorForm.controls;
  }


  back(): void {
		this.location.back();
	}

  onCreate() {
    if(this.vendorForm.invalid){
      this.submitted = true;
      return;
    } else {
      this.vendorService.createVendor(this.vendorForm.value)
      .then(contact_res => {
        alert('Data Saved Successfully.');
        this.ngOnInit();
      })
      .catch(err => {
        console.log(err);
        
        Swal.fire({
          title: err,
          buttonsStyling: false,
          confirmButtonClass: "btn btn-success"
        });
      });
    }
  } 

  edit(data) {
		this.btnButton = this.btnObj[1];
		this.vendorForm.patchValue({   
			name: data.name,
			type: data.type, 
			email: data.email,
			url:data.url,
		})
		this.vendorID = data._id;
	} 

  onSave() {
		this.vendorService.updateVendor(this.vendorID, this.vendorForm.value)
		.then(resp => {
			alert('Data updated Successfully.');
			this.router.navigate(['/vendor/']);		
		})
		.catch(err => {
			console.log(err);
      Swal.fire({
        title: err,
        buttonsStyling: false,
        confirmButtonClass: "btn btn-success"
      });
		});
	}
}

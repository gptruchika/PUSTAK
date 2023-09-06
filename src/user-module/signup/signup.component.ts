import { MatSnackBar } from '@angular/material/snack-bar';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
import { UserServiceService } from 'src/user-module/user-service.service';
import { Router } from '@angular/router';

function emailDomainValidator(allowedDomains: string[]): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
  const email: string = control.value;
  const domain = email.substring(email.lastIndexOf('@') + 1);
  if (email === '' || allowedDomains.some(allowedDomain => domain.toLowerCase() === allowedDomain.toLowerCase())) {
  return null; // Valid
  } else {
  return { 'invalidDomain': true }; // Invalid
  }
  };
}


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  profileForm !: FormGroup;


  isLoggedIn = false;
  isLoading = false;

  username!:string;
  user : any;

  constructor(private formBuilder: FormBuilder, private userService : UserServiceService, private router : Router,private snackbar : MatSnackBar) {
    
  }
  
  ngOnInit(): void {

    this.initForm();
    this.userService.isAuthenticated$.subscribe(
      isAuthenticated => {
        this.isLoggedIn = isAuthenticated;
      }
    );
    if (this.isLoggedIn) {
      this.loadProfileData();
    }
    console.log(this.user);
  }

  initForm() {
    this.profileForm = this.formBuilder.group({
    username: [{value:'', disabled:this.isLoggedIn}, Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6), Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/)]],
    contact: ['', [Validators.pattern(/^[0-9]{10}$/)]],
    gender: ['', Validators.required],
    address: ['', Validators.required],
    state: ['', Validators.required],
    city: ['', Validators.required],
    postalCode: ['', [Validators.required, Validators.pattern(/^[0-9]{6}$/)]],
    });
  }

  loadProfileData() {
    this.username = this.userService.getCurrentUser();
    this.isLoading = true;
    this.userService.getUserDetail(this.username).subscribe(
    (profileData) => {
    this.isLoading = false;
    this.profileForm.patchValue(profileData);
    this.profileForm.get('username')?.disabled;
    },
    (error) => {
    this.isLoading = false;
    console.error('Error fetching profile data:', error);
    }
    );
    
  }
  
  onSubmit() {
    if (this.profileForm.valid) {
      
    // Perform form submission logic here
    console.log('Form submitted:', this.profileForm.value);
    // You can add form submission logic (e.g., sending data to a server) here
    // Reset the form after successful submission if needed
    this.userService.signUp(this.profileForm.value).subscribe (
      response => {
        if(response) {
        this.profileForm.reset();
        this.showSuccessMessage();
        this.router.navigate(["/login"]);
        } else {
          alert("User already exist");
        }
      }
    );
    }else {
      alert("Enter Valid Details");
    }
  }

  onUpdate() {
    if(this.profileForm.valid){
      this.userService.updateUserDetail(this.profileForm.value).subscribe(
        () => {
          this.snackbar.open('User Details Updated','Dismiss',{
            duration : 8000
          });
        },
        (error) => {
          console.error("Error Updating User Details");
        }
      )
      
    }

  }

  showSuccessMessage() {
    this.snackbar.open('SignUp Successful','Dismiss',{
      duration : 8000
    });
  }
}

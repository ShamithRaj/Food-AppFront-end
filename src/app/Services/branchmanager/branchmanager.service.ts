import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Admin } from 'src/app/Admin/class/admin';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BranchmanagerService {

  constructor(private http: HttpClient) { }
  addData(admin: any) {
    return this.http.post("http://localhost:8080/savemanager", admin);
  }
  getData() {
    return this.http.get("http://localhost:8080/getallmanagers");
  }
  deleteData(id: any) {
    return this.http.delete(`http://localhost:8080/deletemanager/${id}`);
  }
  loginData(manager: any) {
    return this.http.post("http://localhost:8080/getbymanager", manager);

  }
  public getmanager(admin: Admin): Observable<object> {
    return this.http.post("http://localhost:8080/getbymanager", admin)
  }
  isLoggedIn() {
    //logic
    if (localStorage.getItem('rmanagerPassword') == localStorage.getItem('managerPassword')
      && localStorage.getItem('rmanagerEmail') == localStorage.getItem('managerEmail')) {
      return true;
    }
    else {
      return false;
    }
  }
  public regManager(admin:Admin):Observable<object>{
    return this.http.post("http://localhost:8080/savemanager",admin)
  }
}

import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
apiurl='https://localhost:7028/api/Employee'
  constructor(private http:HttpClient) {

  }

  LoadAllEmployee():Observable<object>{
    return this.http.get(this.apiurl);
  }
  Employeebycode(id:any){
    return this.http.get(this.apiurl+'/'+id);
  }
  RemoveEmployeebycode(id:any){
    return this.http.delete(this.apiurl+'/'+id);
  }
  SaveEmployee(inputdata:any){
    if(inputdata.id >0)
    return this.http.put(this.apiurl+'/'+inputdata.id,inputdata);// for update

    return this.http.post(this.apiurl+'/new',inputdata); //for add new

    }
  }



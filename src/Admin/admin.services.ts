import { Injectable } from "@nestjs/common/decorators";
import { AdminForm } from "./admin.dto";
@Injectable()
export class AdminService
{
    getAdmin(): any{
        return "Get all Admin";
   }
   getAdminById(id): any{
      return "get admin by ID : "+id;
   }
   getDoctors(): string{
      return "All doctors...";
   } 
   getDoctorByIdName(qry): any{
      return "Doctor id : "+qry.id+" and name : "+qry.name;
   }
   regDoc(mydto): any{
      return mydto;
   }
   removeDoc(name): string{
      return "Removed doctor : "+name;
   }
   updateDoc(myData, id): any{
      return "Update doctor info where id :"+id+
      " name: "+myData.name+
      " age : "+myData.age+
      " email : "+myData.email+
      " contactNo : "+myData.contactNo;
      ;
   }
   regStaff(mydto:AdminForm): any{
      return mydto;
   }
   updateStaff(name, id): any{
      return "Staff updated name: "+name+" and id: "+id;
   }
   removeStaffById(id): any{
      return "Staff removed by Id : "+id;
   }
   getPatientByIdName(qry): any{
      return "Patient id : "+qry.id+" and name : "+qry.name;
   }
   getHospital(name): string{
      return "Get hospital by name : "+name;
   }
}

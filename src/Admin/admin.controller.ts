import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, Query, UsePipes } from "@nestjs/common";
import { AdminService } from "./admin.services";
import { AdminForm } from "./admin.dto";
import { updateForm } from "./admin.dto";
import { ValidationPipe } from "@nestjs/common/pipes";

@Controller("/admin")
export class AdminController
{
    constructor(private adminService : AdminService){}
    @Get()
    getAdmin(): any {
        return this.adminService.getAdmin();
    }

    @Get("/Id/:id")
        getAdminById(@Param("id", ParseIntPipe) id:number): number{
            return this.adminService.getAdminById(id);
            //return "get admin by id : "+param.id;
        }

    @Get("/docList")
    getDoctors(): string{
        return this.adminService.getDoctors();
        //return "get doctor list ";
    }

    @Get("/docId")
    getDoctorByIdName(@Query() qry:any): any{
        return this.adminService.getDoctorByIdName(qry);
        //return "get doctor by ID : "+param.id;
    }

    
    @Post("/regDoc")
    @UsePipes(new ValidationPipe())
    regDoc(@Body() mydto:AdminForm): any{
        return this.adminService.regDoc(mydto);
                //return "Register Doctor by Id :" +param.id + " and name " +param.name;
    }

    @Delete("/rmvDoc/:name")
    removeDoc(@Param("name") name:string): string{
        return this.adminService.removeDoc(name);
        //return "Remove Doctor :"+param.name
    }

    @Put("updateDoc/:id")
    @UsePipes(new ValidationPipe())
    updateDoc(@Body() myData:updateForm,
                @Param("id", ParseIntPipe) id:number): any{
        return this.adminService.updateDoc(myData, id);
                    //return "Update Doctor by Id : "+param.id
    }

    @Post("/regStaff")
    @UsePipes(new ValidationPipe())
    regStaff(@Body() mydto:AdminForm): any{
        return this.adminService.regStaff(mydto);
        //return "Register Staff by Id :" +param.id + " and name " +param.name;
    }

    @Put("updateStaff/:id")
    @UsePipes(new ValidationPipe())
    updateStaff(@Body() myData:updateForm,
                @Param("id", ParseIntPipe) id:number): any{
        return this.adminService.updateDoc(myData, id);
                    //return "Update Staff by Id : "+param.id
    }

    @Delete("/removeStaff/:id")
    removeStaffById(@Param("id", ParseIntPipe) id:number): any{
        return this.adminService.removeStaffById(id);
    } 

    @Get("/Patient")
    getPatientByIdName(@Query() qry:any): any {
        return this.adminService.getPatientByIdName(qry);
        //return "get all Patient...";
    }

    @Get("/hospital/:name")
    getHospital(@Param("name") name:string): string{
        return this.adminService.getHospital(name);
        //return "get hospital by name : "+param.name;
    }
   

}
export interface IAttendance {
    empName: string;
    empContactNo: string;
    employeeId: number;
    attendanceDate: string;
    attendanceId: number;
    inTime: string;
    outTime: string;
    isFullDay: boolean;
}
export class attendance {
    attendanceId: number;
    employeeId: number;
    attendanceDate?: Date;
    inTime?: Date;
    outTime?: Date;
    isFullDay: boolean;
    constructor() {
        this.attendanceId = 0;
        this.employeeId = 0;
        this.attendanceDate = undefined;
        this.inTime = undefined;
        this.outTime = undefined;
        this.isFullDay = false;

    }
}
export interface IAdvance {
    empName: string;
    empContactNo: string;
    employeeId: number;
    advanceDate?: Date;
    advanceAmount: number;
    advanceId: number;
    reason: string;
}
export class advance {
    advanceId: number;
    employeeId: number;
    advanceDate?: Date;
    advanceAmount: Number;
    reason: string;
    constructor() {
        this.advanceId = 0;
        this.employeeId = 0;
        this.advanceDate = undefined;
        this.advanceAmount = 0;
        this.reason = "";
    }
}
export interface Ileaves {
    empName: string;
    empContactNo: string;
    employeeId: number;
    leaveDate?: Date;
    leaveId: number;
    leaveReason: string;
    noOfFullDayLeaves: number;
    noOfHalfDayLeaves: number;
}
export class leaves {
    leaveId: number;
    employeeId: number;
    leaveDate?: Date;
    leaveReason: string;
    noOfFullDayLeaves: Number;
    noOfHalfDayLeaves: Number;
    constructor() {
        this.leaveId = 0;
        this.employeeId = 0;
        this.leaveDate = undefined;
        this.leaveReason = "";
        this.noOfFullDayLeaves = 0;
        this.noOfHalfDayLeaves = 0;
    }
} 
export interface IDashbard {
    totalEmployee: number;
    totalAdvanceRecordCount: number;
    totalLeavesCount: number;
    totalSalaryCount: number;
    todaysAdvanceTotalAmount: number;
    todaysLeaves: number;
}
export class dashboard {
    totalEmployee: number;
    totalAdvanceRecordCount: number;
    totalLeavesCount: number;
    totalSalaryCount: number;
    todaysAdvanceTotalAmount: number;
    todaysLeaves: number;
    constructor() {
        this.totalEmployee = 0;
        this.totalAdvanceRecordCount = 0;
        this.totalLeavesCount = 0;
        this.totalSalaryCount = 0;
        this.todaysAdvanceTotalAmount = 0;
        this.todaysLeaves = 0;
    }
} 
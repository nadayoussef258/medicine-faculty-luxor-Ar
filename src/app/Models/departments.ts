export interface DepartmentDto {
  id?: string;
  name?: string;
  subTitle?: string;
  departmentAttachment?: DepartmentAttachmentDto[];
  departmentPrograms?: DepartmentProgramDto[];
  departmentServices?: DepartmentServiceDto[];
  departmentDetails?: DepartmentDetailDto[];
  departmentUnits?: DepartmentUnitDto[];
  departmentPosts?: DepartmentPostDto[];
}

export interface DepartmentPostDto {
  id?: string;
  departmentId: string;
  postId: string;
}

export interface DepartmentUnitDto {
  id?: string;
  unitNameAr?: string;
  unitDescriptionAr?: string;
  manager?: string;
  email?: string;
  employeesCount?: number;
  location?: string;
  unitPhone?: string;
  departmentId: string;
}

export interface DepartmentDetailDto {
  id?: string;
  about?: string;
  title?: string;
  departmentId: string;
}

export interface DepartmentServiceDto {
  id?: string;
  name?: string;
  details?: string;
  duration?: string;
  applicationUrl?: string;
  downloadUrl?: string;
  isOnline: boolean;
  category: string;
  fees?: number;
  contactPerson?: string;
  contactPhone?: string;
  departmentId: string;
}

export interface DepartmentProgramDto {
  id?: string;
  name?: string;
  departmentId: string;
}

export interface DepartmentAttachmentDto {
  id?: string;
  filePath?: string;
  departmentId: string;
}

export interface AboutDepartment {
  Id?: number;
  About: string;
  Title: string;
  DepartmentId?: string;
}

export interface DepartmentImage {
  Id?: number;
  Field?: string;
  UrlPath: string;
  DepartmentId?: string;
}

export interface DepartmentStatistic {
  Id?: number;
  Title: string;
  Count: number;
  DepartmentId?: string;
}

export interface DepartmentDirector {
  Id?: number;
  Name: string;
  Title: string;
  Message: string;
  ImageUrl: string;
  DepartmentId?: string;
}

export interface DepartmentVision {
  Id?: number;
  Vision: string;
  DepartmentId?: string;
}

export interface DepartmentMission {
  Id?: number;
  Mission: string;
  DepartmentId?: string;
}

export interface DepartmentGoal {
  Id?: number;
  Goal: string;
  OrderIndex?: number;
  DepartmentId?: string;
}

export interface Department {
  Id: string;
  Name: string;
  description?: string;
  manager?: string;
  email?: string;
  phone?: string;
  sectorId?: string;
  employeesCount?: number;
  location?: string;
  image?: string;
  AboutDepartment?: AboutDepartment;
  DepartmentImages?: DepartmentImage[];
  Statistics?: DepartmentStatistic[];
  Director?: DepartmentDirector;
  Vision?: DepartmentVision;
  Mission?: DepartmentMission;
  Goals?: DepartmentGoal[];
}

export interface DepartmentBasicInfo {
  title: string;
  subtitle: string;
}

export interface DepartmentNavTab {
  title: string;
  link: string;
}

export interface DepartmentNews {
  id: number;
  title: string;
  summary: string;
  image: string;
  date: string;
  category: string;
  readTime: string;
  author: string;
}

export interface AddDepartmentDto {
  name: string;
  subTitle: string;
}

export interface DepartmentServices {
  id?: string;
  name: string;
  details: string;
  duration: string;
  applicationUrl?: string;
  downloadUrl?: string;
  isOnline: boolean;
  category: string;
  fees?: number;
  contactPerson?: string;
  contactPhone?: string;
  departmentId: string;
}

// DTOs for CRUD operations
export interface AddDepartmentAttachmentDto {
  Id?: number;
  FilePath: File;
  DepartmentId: string;
}

export interface EditDepartmentAttachmentDto {
  Id?: number;
  FilePath?: File;
  DepartmentId: string;
}

export interface AddDepartmentDetailDto {
  Id?: number;
  About: string;
  Title: string;
  DepartmentId: string;
}

export interface EditDepartmentDetailDto {
  Id?: number;
  About: string;
  Title: string;
  DepartmentId: string;
}

export interface AddDepartmentStatDto {
  Id?: number;
  Title: string;
  Count: number;
  DepartmentId: string;
}

export interface EditDepartmentStatDto {
  Id?: number;
  Title: string;
  Count: number;
  DepartmentId: string;
}

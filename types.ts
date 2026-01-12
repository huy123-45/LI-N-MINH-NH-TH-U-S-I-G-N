
export enum MemberType {
  THAU = 'NHÀ THẦU',
  THO = 'THỢ LÀNH NGHỀ'
}

export interface Service {
  id: string;
  name: string;
  description: string;
  icon: string;
}

export interface Member {
  id: string;
  name: string;
  type: MemberType;
  specialty: string;
  experience: number;
  rating: number;
  avatar: string;
  projectsCompleted: number;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  status: 'Hoàn thành' | 'Đang thi công';
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

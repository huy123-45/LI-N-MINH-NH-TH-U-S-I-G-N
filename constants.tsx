
import { Service, Member, MemberType, Project } from './types';

export const SERVICES: Service[] = [
  {
    id: '1',
    name: 'Xây dựng phần thô',
    description: 'Thi công móng, cột, sàn, tường gạch chuyên nghiệp.',
    icon: 'fa-trowel-bricks'
  },
  {
    id: '2',
    name: 'Điện nước dân dụng',
    description: 'Thiết kế, lắp đặt hệ thống điện nước an toàn, hiện đại.',
    icon: 'fa-bolt-lightning'
  },
  {
    id: '3',
    name: 'Sơn bả - Chống thấm',
    description: 'Kỹ thuật sơn bả mịn màng, xử lý chống thấm triệt để.',
    icon: 'fa-paint-roller'
  },
  {
    id: '4',
    name: 'Thi công nội thất',
    description: 'Hoàn thiện nội thất gỗ, thạch cao thẩm mỹ cao.',
    icon: 'fa-couch'
  }
];

export const TOP_MEMBERS: Member[] = [
  {
    id: 'm1',
    name: 'Nguyễn Văn Hùng',
    type: MemberType.THAU,
    specialty: 'Xây dựng nhà phố',
    experience: 15,
    rating: 4.9,
    avatar: 'https://picsum.photos/seed/m1/200/200',
    projectsCompleted: 45
  },
  {
    id: 'm2',
    name: 'Trần Minh Tâm',
    type: MemberType.THO,
    specialty: 'Điện nước kỹ thuật cao',
    experience: 8,
    rating: 4.8,
    avatar: 'https://picsum.photos/seed/m2/200/200',
    projectsCompleted: 120
  },
  {
    id: 'm3',
    name: 'Lê Hoàng Nam',
    type: MemberType.THAU,
    specialty: 'Thi công biệt thự',
    experience: 20,
    rating: 5.0,
    avatar: 'https://picsum.photos/seed/m3/200/200',
    projectsCompleted: 30
  }
];

export const FEATURED_PROJECTS: Project[] = [
  {
    id: 'p1',
    title: 'Biệt thự tân cổ điển Quận 2',
    category: 'Thiết kế',
    description: 'Dự án kiến trúc biệt thự cao cấp phong cách Châu Âu.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
    status: 'Hoàn thành'
  },
  {
    id: 'p2',
    title: 'Cải tạo chung cư Vinhomes',
    category: 'Sửa chữa',
    description: 'Thay đổi layout, nâng cấp hệ thống kỹ thuật và hoàn thiện bề mặt.',
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&q=80',
    status: 'Đang thi công'
  },
  {
    id: 'p3',
    title: 'Nhà phố hiện đại Gò Vấp',
    category: 'Thiết kế',
    description: 'Mẫu nhà phố tối giản, tối ưu không gian ánh sáng tự nhiên.',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80',
    status: 'Hoàn thành'
  },
  {
    id: 'p4',
    title: 'Nâng cấp nội thất căn hộ Masteri',
    category: 'Sửa chữa',
    description: 'Sửa chữa phần thô và lắp đặt nội thất gỗ công nghiệp.',
    image: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=800&q=80',
    status: 'Hoàn thành'
  }
];

export const HCMC_DISTRICTS = [
  "Quận 1", "Quận 3", "Quận 4", "Quận 5", "Quận 6", "Quận 7", "Quận 8", "Quận 10", 
  "Quận 11", "Quận 12", "Bình Tân", "Bình Thạnh", "Gò Vấp", "Phú Nhuận", 
  "Tân Bình", "Tân Phú", "Thủ Đức", "Bình Chánh", "Cần Giờ", "Củ Chi", 
  "Hóc Môn", "Nhà Bè"
];

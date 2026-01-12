
import React from 'react';
import { FEATURED_PROJECTS } from '../constants';

const ProjectGallery: React.FC = () => {
  return (
    <section id="projects" className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold sm:text-4xl mb-4">Công Trình Tiêu Biểu</h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Khám phá những dự án đã hoàn thành và đang được thi công bởi các thành viên trong Liên Minh.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6">
          {FEATURED_PROJECTS.map((project) => (
            <div key={project.id} className="group relative overflow-hidden rounded-2xl bg-gray-800 border border-gray-700 flex flex-col h-full">
              <div className="aspect-[4/3] w-full overflow-hidden relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider shadow-lg ${
                    project.category === 'Thiết kế' ? 'bg-orange-600 text-white' : 'bg-blue-600 text-white'
                  }`}>
                    {project.category}
                  </span>
                </div>
                <div className="absolute bottom-4 left-4">
                  <span className={`text-[10px] px-2 py-0.5 rounded font-bold uppercase backdrop-blur-md bg-black/40 ${
                    project.status === 'Hoàn thành' ? 'text-green-400' : 'text-blue-400'
                  }`}>
                    {project.status}
                  </span>
                </div>
              </div>
              <div className="p-5 flex flex-col flex-1">
                <h3 className="text-lg font-bold mb-2 group-hover:text-orange-500 transition-colors line-clamp-1">{project.title}</h3>
                <p className="text-sm text-gray-400 mb-6 line-clamp-2 flex-1">{project.description}</p>
                <button className="w-full py-2.5 rounded-xl border border-white/20 text-sm font-bold hover:bg-white hover:text-gray-900 transition-all flex items-center justify-center gap-2 group/btn">
                  Xem chi tiết 
                  <i className="fas fa-arrow-right text-[10px] group-hover/btn:translate-x-1 transition-transform"></i>
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <button className="px-10 py-4 rounded-2xl bg-white text-gray-900 font-extrabold hover:bg-orange-500 hover:text-white transition-all shadow-xl shadow-white/5">
            Tất cả dự án thực tế
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProjectGallery;

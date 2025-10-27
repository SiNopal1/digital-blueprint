import React, { useState, useEffect } from 'react';
import { Search, GraduationCap, Sparkles, Heart } from 'lucide-react';

const students = [
  { id: 1, name: "Tasya", path: "ITS Teknik Industri", motivation: "Keep pushing your limits" },
  { id: 2, name: "Andynna", path: "ITS (DKV)", motivation: "segala kesalahan dimasa lalu dapat diperbaiki di masa sekarang" },
  { id: 3, name: "Aulia", path: "UINSA - Filsafat (S1)", motivation: "Keheningan adalah bahasa Tuhan." },
  { id: 4, name: "Aurel", path: "ITB - Teknik Pertambangan", motivation: "take the risk or lose the chance" },
  { id: 5, name: "Afaq", path: "UM - Desain Komunikasi Visual", motivation: "just enjoy your life" },
  { id: 6, name: "Antoo", path: "ITS - Teknik Sipil", motivation: "Fearfully and wonderfully made" },
  { id: 7, name: "Dido", path: "UNESA - Kedokteran Gigi", motivation: "Ngeband Kuliah aja juga seru" },
  { id: 8, name: "Dinda", path: "UGM - Teknik Pertambangan", motivation: "harus bangun pagi" },
  { id: 9, name: "Euro", path: "ITS - Teknik Industri", motivation: "Besok bangun pagi!" },
  { id: 10, name: "Farid", path: "ITS - Sistem Informasi", motivation: "Dikit demi dikit lama lama menjadi bukit!" },
  { id: 11, name: "Fernanda", path: "UB - Sastra China", motivation: "It's okay to start slow, just don't stop." },
  { id: 12, name: "Firdaus", path: "ITS - Teknik Sipil", motivation: "Gagal sekali, bangkit lagi" },
  { id: 13, name: "Gabriella", path: "Unair - Biomedis", motivation: "You were born to be who you are" },
  { id: 14, name: "Wayan", path: "PPI MADIUN - TMP", motivation: "jika tidak ada yang mendukungmu maka lakukanlah sendiri" },
  { id: 15, name: "Kevin", path: "ITS - Sistem Informasi", motivation: "belajar dari kesalahan" },
  { id: 16, name: "Luqman", path: "ITS - Teknik Material S1", motivation: "Tetap semangat, tetap berguna" },
  { id: 17, name: "Lyonel", path: "UB - Sistem Informasi", motivation: "Bermimpilah sampai membuatmu takut, jika tidak takut berarti mimpimu kurang tinggi" },
  { id: 18, name: "Lutfi", path: "UB - Teknik Industri", motivation: "tidak ada kata gagal dalam hidup!" },
  { id: 19, name: "Meysa", path: "ITS - Desain Produk Industri", motivation: "Dijalani dengan senang hati" },
  { id: 20, name: "Wildan", path: "ITS - Teknik Mesin", motivation: "Serumit apapun jalan hidup, selagi kita tahu arah kiblat untuk bersujud, yakinlah pasti allah memberi petunjuk" },
  { id: 21, name: "Fuzan", path: "UGM - Ilmu Hukum", motivation: "Belajar terus sampai mati" },
  { id: 22, name: "Mufid", path: "ITB - Teknik Mesin", motivation: "tuntutlah ilmu sampai ke negeri china" },
  { id: 23, name: "Ibram", path: "PIP Semarang - Teknik Nautika", motivation: "Perjuangkan dan menangkan" },
  { id: 24, name: "Rasya", path: "ITS - Teknik Elektro", motivation: "Turn Pain Into Your Power" },
  { id: 25, name: "Attha", path: "ITS - Teknik Kimia", motivation: "Take your time, but dont waste it" },
  { id: 26, name: "Naufal", path: "ITS - Teknik Informatika", motivation: "Rise stronger after every fall" },
  { id: 27, name: "Rafih", path: "UGM - Hukum", motivation: "Be Kind, Be right and respectful" },
  { id: 28, name: "Rayhan", path: "ITS/UNEJ - Teknik Elektro", motivation: "tetap hidup dan berdoa" },
  { id: 29, name: "Rama", path: "UGM - Sistem Informasi", motivation: "Gagal bukanlah jawaban." },
  { id: 30, name: "Jendra", path: "ITS - Teknik Informatika", motivation: "habis gelap terbitlah terang" },
  { id: 31, name: "Elga", path: "ITS - Teknik Industri", motivation: "Gagal itu cuma latihan supaya sukses nanti nggak kaget" },
  { id: 32, name: "Renanda", path: "Bekerja", motivation: "Semangat dan tetap hidup" },
  { id: 33, name: "Rika", path: "Unair - K3 (S1)", motivation: "wake up and be cool today" },
  { id: 34, name: "Robian", path: "PT. Pama - Operator Alat Berat", motivation: "tetap konsisten" },
  { id: 35, name: "Sean", path: "ITS - Teknik Industri", motivation: "Face The Fear, Build The Future" },
  { id: 36, name: "Shifa", path: "Bekerja", motivation: "kita tidak harus sempurna untuk jadi luar biasa" },
  { id: 37, name: "Tegar", path: "ITS - Arsitektur", motivation: "belajar wow" },
  { id: 38, name: "Vicky", path: "PENS - Teknik Elektro", motivation: "tanpa usaha bakat tak berarti" },
  { id: 39, name: "Volta", path: "ITS - Teknik Geomatika", motivation: "Langkah kecil menuju mimpi besar" },
  { id: 40, name: "Zaskia", path: "UNAIR - Teknik Lingkungan", motivation: "Ilmu abadi, hidup sekali." }
];

const StudentCard = ({ student, index }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), index * 50);
    return () => clearTimeout(timer);
  }, [index]);

  return (
    <div
      className={`group relative bg-gradient-to-br from-purple-900/20 to-pink-900/20 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20 hover:border-purple-400/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transition: 'all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)' }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600/0 to-pink-600/0 group-hover:from-purple-600/10 group-hover:to-pink-600/10 rounded-2xl transition-all duration-500" />
      
      <div className="relative z-10">
        <div className="flex items-start justify-between mb-4">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-2xl font-bold text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
            {student.name.charAt(0)}
          </div>
          <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
            <Sparkles className="w-4 h-4 text-purple-400" />
          </div>
        </div>

        <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 transition-all duration-300">
          {student.name}
        </h3>

        <div className="flex items-center gap-2 mb-4 text-purple-300">
          <GraduationCap className="w-4 h-4" />
          <p className="text-sm font-medium">{student.path}</p>
        </div>

        <div className="relative">
          <div className="absolute -left-2 top-0 w-1 h-full bg-gradient-to-b from-purple-500 to-pink-500 rounded-full" />
          <p className="pl-4 text-gray-300 italic text-sm leading-relaxed">
            "{student.motivation}"
          </p>
        </div>
      </div>

      <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl group-hover:bg-purple-500/20 transition-all duration-500 -z-10" />
    </div>
  );
};

export default function DigitalYearbook() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredStudents, setFilteredStudents] = useState(students);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const filtered = students.filter(student =>
      student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.path.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.motivation.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredStudents(filtered);
  }, [searchTerm]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Header */}
        <header className={`text-center py-16 px-4 transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'}`}>
          <div className="inline-block mb-6">
            <div className="relative">
              <h1 className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 animate-gradient">
                Class of 2026
              </h1>
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000" />
            </div>
          </div>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-4 font-light">
            Digital Blueprint
          </p>
          
          <div className="flex items-center justify-center gap-2 text-purple-400">
            <Heart className="w-5 h-5 animate-pulse" />
            <p className="text-sm">40 Amazing Journeys Begin Here</p>
            <Heart className="w-5 h-5 animate-pulse" />
          </div>
        </header>

        {/* Search Bar */}
        <div className={`max-w-2xl mx-auto px-4 mb-12 transition-all duration-1000 delay-300 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-300" />
            <div className="relative flex items-center">
              <Search className="absolute left-6 w-5 h-5 text-purple-400" />
              <input
                type="text"
                placeholder="Cari nama, jurusan, atau motivasi..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-gray-900/80 backdrop-blur-sm text-white pl-14 pr-6 py-4 rounded-2xl border border-purple-500/30 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all duration-300 placeholder-gray-500"
              />
            </div>
          </div>
        </div>

        {/* Student Cards Grid */}
        <div className="max-w-7xl mx-auto px-4 pb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredStudents.map((student, index) => (
              <StudentCard key={student.id} student={student} index={index} />
            ))}
          </div>

          {filteredStudents.length === 0 && (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">🔍</div>
              <p className="text-2xl text-gray-400">Tidak ditemukan</p>
              <p className="text-gray-500 mt-2">Coba kata kunci lain</p>
            </div>
          )}
        </div>

        {/* Footer */}
        <footer className="text-center py-12 px-4 border-t border-purple-500/20">
          <p className="text-gray-400 mb-2">Made with love for our amazing class</p>
          <p className="text-sm text-gray-500">© 2025 - Forever in our memories</p>
        </footer>
      </div>

      <style jsx>{`
        @keyframes gradient {
          0%, 100% {
            background-size: 200% 200%;
            background-position: left center;
          }
          50% {
            background-size: 200% 200%;
            background-position: right center;
          }
        }
        .animate-gradient {
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </div>
  );
}
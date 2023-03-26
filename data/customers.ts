const generateId = () => {
  return Math.random()
}
// Temp Array with customers

export const customers = [
  { id: generateId(), name: 'Ichigo Kurosaki', top: '16%', left: '25%', status: 'online' },
  { id: generateId(), name: 'Rukia Kuchiki', top: '27%', left: '39%', status: 'online' },
  { id: generateId(), name: 'Orihime Inoue', top: '20%', left: '15%', status: 'offline' },
  { id: generateId(), name: 'Renji Abarai', top: '12%', left: '50%', status: 'online' },
  { id: generateId(), name: 'Uryū Ishida', top: '18%', left: '60%', status: 'offline' },
  { id: generateId(), name: 'Yasutora Sado', top: '65%', left: '20%', status: 'online' },
  { id: generateId(), name: 'Sōsuke Aizen', top: '9%', left: '45%', status: 'offline' },
  { id: generateId(), name: 'Byakuya Kuchiki', top: '35%', left: '10%', status: 'online' },
  { id: generateId(), name: 'Kisuke Urahara', top: '30%', left: '50%', status: 'offline' },
  { id: generateId(), name: 'Yoruichi Shihōin', top: '50%', left: '4%', status: 'offline' },
  { id: generateId(), name: 'Suì-Feng', top: '3%', left: '35%', status: 'offline' },
  { id: generateId(), name: 'Rangiku Matsumoto', top: '23%', left: '45%', status: 'online' },
  { id: generateId(), name: 'Retsu Unohana', top: '30%', left: '70%', status: 'offline' },
  { id: generateId(), name: 'Mayuri Kurotsuchi', top: '30%', left: '86%', status: 'online' },
  { id: generateId(), name: 'Kenpachi Zaraki', top: '50%', left: '40%', status: 'offline' },
  { id: generateId(), name: 'Sajin Komamura', top: '10%', left: '20%', status: 'online' },
  { id: generateId(), name: 'Izuru Kira', top: '20%', left: '80%', status: 'online' },
  { id: generateId(), name: 'Isshin Kurosaki', top: '30%', left: '18%', status: 'offline' },
  { id: generateId(), name: 'Shunsui Kyoraku', top: '70%', left: '47%', status: 'online' },
  { id: generateId(), name: 'Jushiro Ukitake', top: '80%', left: '85%', status: 'offline' },
  { id: generateId(), name: 'Toshiro Hitsugaya', top: '12%', left: '8%', status: 'online' }
]

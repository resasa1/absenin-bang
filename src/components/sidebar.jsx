import React from 'react';

function Sidebar () {
  const menuItems = [
    { name: 'Dashboard', icon: '📊' },
    { name: 'Lessons', icon: '📚' },
    { name: 'Schedule', icon: '📅' },
    { name: 'Materials', icon: '📝' },
    { name: 'Forum', icon: '💬' },
    { name: 'Assessments', icon: '✅' },
    { name: 'Settings', icon: '⚙️' },
  ];

  return (
    <aside className="bg-blue-900 text-white w-64 h-screen p-6">
      <h2 className="text-2xl font-bold mb-8">Smart</h2>
      <ul>
        {menuItems.map((item, index) => (
          <li key={index} className="flex items-center mb-6 cursor-pointer hover:bg-blue-700 p-2 rounded">
            <span className="text-xl mr-4">{item.icon}</span>
            <span>{item.name}</span>
          </li>
        ))}
      </ul>
      <button className="absolute bottom-6 left-6 bg-blue-700 px-4 py-2 rounded text-white hover:bg-blue-600">
        Log Out
      </button>
    </aside>
  );
};

export default Sidebar;

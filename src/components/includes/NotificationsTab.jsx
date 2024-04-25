import { Icon } from '@iconify/react'
import React from 'react'

export const NotificationsTab = () => {
  return (
    <div className={`z-10 absolute w-96 max-w-sm  bg-gray-800 py    -4 divide-y divide-gray-100 rounded-lg -ml-96 md":ml-60 mt-6 shadow  dark:bg-gray-700 dark:divide-gray-600 hidden`}>
        <h3 className='text-lg font-semibold p-3'>Notifications</h3>
    <div className="relative shadow-lg">
      <button onClick='return this.parentNode.remove()'
        className="absolute p-1 bg-gray-100 border border-gray-300 rounded-full right-2 top-1 hover:bg-gray-200"
      >
        <Icon className='text-gray-500' icon="mdi:close" />
      </button>
    
      <div className="flex items-center p-4">
        <img
          className="object-cover w-12 h-12 rounded-lg"
          src="https://randomuser.me/api/portraits/women/71.jpg"
          alt=""
        />
    
        <div className="ml-3 overflow-hidden">
          <p className="font-medium text-gray-900">Jan Doe</p>
          <p className="max-w-xs text-sm text-gray-500 truncate">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet,
            laborum?
          </p>
        </div>
      </div>
    </div>
</div>
  )
}

import { delete_all_user_notifications, delete_user_notification, get_user_notifications } from '@/api/users'
import { AuthContext } from '@/context/authContext'
import { Icon } from '@iconify/react'
import { useRouter } from 'next/router'
import React, { useContext, useEffect, useState } from 'react'

export const NotificationsTab = ({collasped}) => {

  
  const { user } = useContext(AuthContext)

  const [notifications, setNotifications] = useState([])

  const getNotifications = async () => {
    console.log("geting notifications");
    const res = await get_user_notifications(user?.id)
    if (res) {
      setNotifications(res)
    }
  }

  const handledelete = async (notif_id) => {
    const res = await delete_user_notification(user?.id, notif_id)
    if (res) {
      const new_notifications = notifications.filter((notif) => notif.id != notif_id)
      setNotifications(new_notifications)
    }
  }
  const router = useRouter()

  const handledeleteall = () => {
    const res = delete_all_user_notifications(user?.id)
    if (res) {
      setNotifications([])
    }
  }

  useEffect(() => {
    getNotifications()
  }, [])


  if (collasped) return null

  return (
    <div className={`z-10 absolute w-96 max-w-sm  bg-gray-800 py-3 divide-y divide-gray-100 rounded-lg -ml-96 md":ml-60  shadow  dark:bg-gray-700 dark:divide-gray-600`}>
      <div className='flex items-center p-2 justify-between'>
        <h3 className='text-lg font-semibold'>Notifications</h3>
        <button className='text-red-500 hover:underline'
        onClick={handledeleteall}>
          clear
        </button>
      </div>
    {
      notifications.length > 0 && notifications.map((notif) => (
        <div className="relative shadow-lg max-h-96 overflow-y-auto scrollbar-none" key={notif?.id}>
      <button 
        className="absolute p-1 bg-gray-100 border border-gray-300 rounded-full right-2 top-1 hover:bg-gray-200"
        onClick={() => handledelete(notif?.id)}
      >
        <Icon className='text-gray-500' icon="mdi:close" />
      </button>
    
      <div className="flex items-center p-4">
<Icon icon={notif?.icon} className="w-10 h-10 text-gray-500" />
    
        <div className="ml-3 overflow-hidden">
          <p className="font-medium text-gray-50">Jan Doe</p>
          <p className="max-w-xs text-sm  truncate">
            {notif?.message}
          </p>
        </div>
      </div>
    </div>
      ))
    }
</div>
  )
}

import { useState, FC } from 'react'
import { UserDisplay } from '@/entities/user/ui/UserDisplay'
import { UserEdit } from '@/entities/user/ui/UserEdit'
import { User } from '@/entities/user/model/types/user.ts'
import { AnimatePresence, motion } from 'framer-motion'

interface Props {
  user: User
}
export const UserProfile: FC<Props> = ({ user }) => {
  const [isEditing, setIsEditing] = useState(false)

  return (
    <>
      <AnimatePresence mode={'wait'}>
        {isEditing ? (
          <motion.div
            key="edit"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <UserEdit closeEdit={() => setIsEditing(false)} user={user} />
          </motion.div>
        ) : (
          <motion.div
            key="display"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <UserDisplay
              key="dispaly"
              onEdit={() => setIsEditing(true)}
              user={user}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

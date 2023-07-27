/* eslint-disable prefer-arrow-callback */
import { forwardRef } from 'react'
import { TransitionProps } from '@mui/material/transitions/transition'
import Slide from '@mui/material/Slide/Slide'
import Dialog from '@mui/material/Dialog/Dialog'
import TopBar from './components/TopBar'
import NotificationCard from './components/NotificationCard'

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />
})

type Props = {
  notificationOpen: boolean
  handleNotificationClose: () => void
}

export default function NotificationsView({
  notificationOpen,
  handleNotificationClose,
}: Props) {
  return (
    <div>
      <Dialog
        fullScreen
        open={notificationOpen}
        onClose={handleNotificationClose}
        TransitionComponent={Transition}
      >
        <div className="flex flex-col relative">
          <TopBar handleClose={handleNotificationClose} />
          <div className="flex flex-col mt-16 mb-16 w-full p-3">
            <NotificationCard />
            <NotificationCard />
            <NotificationCard />
            <NotificationCard />
          </div>
        </div>
      </Dialog>
    </div>
  )
}

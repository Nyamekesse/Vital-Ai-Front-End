import { Typography } from '@mui/material'

export default function NotificationCard() {
  return (
    <div className="w-full shadow-md border-b my-2 p-3">
      <div className="flex flex-row justify-between">
        <div className="flex flex-col justify-start">
          <Typography variant="h5" my={1} fontWeight={700} fontSize="1.25rem">
            Appointment Cancelled
          </Typography>
          <div className="text-gray-700 text-sm">Today | 14:36 PM</div>
        </div>
        <div className="bg-blue-500 flex p-2 h-6 justify-center items-center self-center text-white text-sm rounded-md">
          new
        </div>
      </div>
      <hr />
      <div className="">
        <Typography variant="caption" sx={{ fontWeight: 400 }}>
          You have successfully canceled your appointment with Dr. Alan Watson
          on December 24, 2024, 13:00 p.m. 80% of the funds will be returned to
          your account.
        </Typography>
      </div>
    </div>
  )
}

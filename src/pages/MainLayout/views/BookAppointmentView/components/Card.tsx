import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography/Typography'
import Divider from '@mui/material/Divider'

export default function Card() {
  return (
    <div className="flex p-4 shadow-md rounded-lg">
      <div className="">
        <Avatar
          alt="Remy Sharp"
          src="https://i.pinimg.com/originals/07/33/ba/0733ba760b29378474dea0fdbcb97107.png"
          variant="rounded"
          sx={{ width: 80, height: 80 }}
        />
      </div>
      <div className="flex flex-col p-2">
        <div className="flex justify-between items-center">
          <Typography
            sx={{ fontWeight: 700 }}
            variant="body1"
            noWrap
            align="center"
          >
            Dr. Randy Wigham
          </Typography>
        </div>
        <hr />
        <div className="mt-3">
          <div className="flex justify-between items-center">
            <Typography
              sx={{ fontWeight: 500 }}
              variant="caption"
              noWrap
              align="center"
            >
              Cardiologists
            </Typography>
            <Divider
              orientation="vertical"
              flexItem
              sx={{ marginLeft: 0.5, marginRight: 0.5 }}
            />
            <Typography
              sx={{ fontWeight: 500, width: 100 }}
              variant="caption"
              noWrap
              align="center"
            >
              Valley View Hospital
            </Typography>
          </div>
        </div>
      </div>
    </div>
  )
}

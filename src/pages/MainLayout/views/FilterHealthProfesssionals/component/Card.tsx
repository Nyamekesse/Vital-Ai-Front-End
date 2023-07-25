/* eslint-disable react/jsx-one-expression-per-line */
import Avatar from '@mui/material/Avatar'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import Typography from '@mui/material/Typography/Typography'

export default function Card() {
  return (
    <div className="flex p-4 shadow-lg rounded-lg">
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
          <h6 className="text-lg font-bold">Dr. Randy Wigham</h6>
          <FavoriteBorderIcon color="primary" />
        </div>
        <hr />
        <div className="mt-3">
          <div className="flex items-center">
            <Typography
              sx={{ fontWeight: 500 }}
              variant="caption"
              noWrap
              align="center"
            >
              Cardiologists
            </Typography>
            <div className="mx-1">|</div>
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

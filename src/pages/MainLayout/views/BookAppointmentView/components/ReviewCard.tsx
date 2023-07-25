import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'

export default function ReviewCard() {
  return (
    <div className="my-2 border-b-2 shadow-sm p-3">
      <div className="flex justify-between items-center">
        <div>
          <Avatar
            alt="Cindy Baker"
            src="https://i.pinimg.com/originals/07/33/ba/0733ba760b29378474dea0fdbcb97107.png"
          />
        </div>
        <Typography
          variant="body1"
          align="center"
          sx={{ fontSize: '1rem', fontWeight: 500, color: '#212121' }}
        >
          Samuel Nyamekesse
        </Typography>
      </div>
      <div className="">
        <Typography
          variant="caption"
          component="p"
          sx={{ fontWeight: 400 }}
          mt={2}
        >
          Dr. Randy Wigham is very professional in his work and responsive. I
          have consulted and my problem is solved. 😍😍
        </Typography>
      </div>
    </div>
  )
}

import { useIsFetching, useIsMutating } from 'react-query'
import Backdrop from '@mui/material/Backdrop'
import CircularProgress from '@mui/material/CircularProgress'

export default function Loading() {
  const isFetching = useIsFetching() // for now, just don't display
  const isMutating = useIsMutating()
  const showLoading = !!(isFetching || isMutating)
  return (
    <div>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={showLoading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  )
}

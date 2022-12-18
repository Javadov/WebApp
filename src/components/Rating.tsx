import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';

const HalfRating = () => {  

  return (
    <Stack spacing={1}>
         <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
    </Stack>
  )
}

export default Rating
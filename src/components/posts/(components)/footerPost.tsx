import { ThumbsUp } from 'lucide-react';
import { MessageCircle } from 'lucide-react';
import { useState } from 'react';

export const FooterPost = () => {
    const [like, setLike] = useState<boolean>(false)
  return (
    <div className='flex w-full px-4 py-2 text-white gap-4'>
        <div className='flex gap-2 items-center cursor-pointer'  onClick={()=> setLike(!like)}>
            <ThumbsUp fill={(like)? 'white': 'none'} />
            <label htmlFor="">Like</label>
        </div>

        <div className='flex gap-2 items-center'>
            <MessageCircle />
            <label htmlFor="">Comment</label>
        </div>
    </div>
  )
}